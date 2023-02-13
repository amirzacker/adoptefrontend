import './student.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import FlashMessage from '../../components/alert/FlashMessage';
import emailjs from '@emailjs/browser';
import { Add, Remove } from "@material-ui/icons";

function Student () {
  const userId = useParams().id;
  const { user, dispatch } = useContext(AuthContext);
 
  const [followed, setFollowed] = useState(
    user?.user?.favoris.includes(userId)
  );
    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");
    const [color, setColor] = useState(true);
   

    const navigate = useNavigate();

    const [student, setStudent] = useState({});



    const handleClick = async () => {
      try {
        if (followed) {
          await axios.put(
            "/users/" + userId + "/unfavoris",
            { id: user?.user?._id },
            { headers: { "x-access-token": user?.token } }
          );

          dispatch({ type: "UNFAVORIS", payload: userId });
        } else {
          await axios.put(
            "/users/" + userId + "/favoris",
            { id: user?.user?._id },
            { headers: { "x-access-token": user?.token } }
          );
          dispatch({ type: "FAVORIS", payload: userId });
        }
        setFollowed(!followed);
      } catch (err) {
      }
    };
  
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users/${userId}`);
        setStudent(res.data);
      };
      fetchUser();
    }, [userId]);

    const [studentsSameDomain, setStudentsSameDomain] = useState([]);
    const domainId = student?.domain?._id;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users/domain/${domainId}`);
          setStudentsSameDomain(res.data);
        };
        fetchUser();
      }, [domainId, userId ]);

      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

      function convertDate(date) {
        const month = date.toLocaleString('fr', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
      
        return `${day} ${month}  ${year}`;
      }

    
      const startDate = convertDate(new Date(student?.startDate));
      const endDate = convertDate(new Date(student?.endDate));
      
      const date = new Date(student?.date);
      const anneeEncours = new Date();

      const age = (anneeEncours.getFullYear() - date.getFullYear());

      const handleConversation = async () => {

        try {
          if (user?.user?.isCompany) {
            const res = await axios.get(
              `/conversations/find/${user?.user?._id}/${userId}`
            , { headers: {"x-access-token" : user?.token} } );
            console.log(res);
            if (res.data) {
              //if conversation existe send email
              var templateParams = {
                to_email: student?.email,
                from_email: user?.user?.email,
                to_name: student?.firstname,
                message: "Vous avez reçu un nouveau message de la part de Adopte1etudiant, prenez connaissance du message en vous connectant sur adopte1etudiant.fr"
          
            }
              emailjs.send('service_7s3s4up', 'template_drlm32o', templateParams , 'vZuhD0JUkXi3hPizJ')
              .then((result) => {
                  console.log(result.text);
                  setMessage("Email de notification envoyé avec succès");
                  setSuccess(true)
        
              }, (error) => {
                  console.log(error.text);
              });

              navigate("/messenger");
            } else {

              try {
                const data = {
                    senderId : user?.user?._id,
                    receiverId : userId
                }
              await axios.post("/conversations/", data, { headers: {"x-access-token" : user?.token} });
              const templateParams = {
                to_email: student?.email,
                from_email: user?.user?.email,
                to_name: student?.firstname,
                from_name: user?.user?.name,
                message: "Vous avez reçu un nouveau message de la part de Adopte1etudiant, prenez connaissance du message en vous connectant sur adopte1etudiant.fr"
          
            }
              emailjs.send('service_7s3s4up', 'template_drlm32o', templateParams , 'vZuhD0JUkXi3hPizJ')
              .then((result) => {
                  console.log(result.text);
                  setMessage("Email de notification envoyé avec succès");
                  setSuccess(true)
        
              }, (error) => {
                  console.log(error.text);
              });
              navigate("/messenger");
            } catch (err) {
             
              console.log(err);
              navigate("/login"); 
            }
            }
          }else{
            setColor(false); 
            setMessage("Attention vous etes etudiant! vous ne pouver pas contacter un autre, choisisez le profil entreprise si vous vous etes trompé ");
            setSuccess(true)
          }

          } catch (err) {
            ! user ? navigate("/login") :  console.log(err); 
           

          }
       
      };

      const navigateToLogin = () => {
        navigate("/login");
      };

      const handleAdoption = async () => {
        if (!user) {
          window.location.href = '/login';
          return; 
        }
            try {
              if (user?.user?.isCompany) {
              await axios.put("/users/" + userId +"/addfavoris", { id : user?.user?._id} , { headers: {"x-access-token" : user?.token} });
              setMessage("adopté avec succes");
              setSuccess(true)
              } else{
                setColor(false); 
                setMessage("Attention vous etes etudiant! vous ne pouver pas adopter un autre, choisisez le profil entreprise si vous vous etes trompé ");
                setSuccess(true)
              }
            } catch (err) {
             setMessage(" vous avez déjà adopté cet étudiant"); 
             setColor(false); 
             setSuccess(true)
            //console.log(err.reponse.status);
          
            }
            
    
          
       
      };

 
   

  return (
    <div>
        <div className="container-fluid">
            <div className="single-student-main">
                <div className="firstpart">
                    <div className="profil-student">
                        <div className="photo-student"><img  src={`${PF + student?.profilePicture}`} alt="student"/></div>
                        <div className="personal-information-student">
                            <h3>{student?.firstname}</h3>
                            <h4>{student?.lastname}</h4>
                            <p>{age} {" "} Ans</p>
                            <p>{student?.city}</p>
                        </div>
                    </div>
                    <div className="description-student">
                        <div className="description-student-principal">
                            <div className="description-student-1">
                                <p>Cherche stage {student?.searchType?.name}</p>
                                <p> Du {" "}  {startDate}  {" "} {endDate}</p>
                            </div>
                            <div className="description-student-2">
                                <h4>DESCRIPTION</h4>
                            </div>
                            <div className="description-student-3">
                                <p>{student?.desc}</p>
                            </div>
                        </div>
                        <div className="attachments-student">
                            <div className="adopte-single-student-container">
                                <Link className="adopte-single-student-button" onClick={handleAdoption} to="">Adopter</Link>
                                 {user?.user?.isCompany ? 
                                <button className="rightbarFollowButton" onClick={handleClick}>
                                {followed ? "Annuler Favoris" : "Ajouter Favoris"}
                                {followed ? <Remove /> : <Add />}
                                 </button>
                                 : null}
                                <Link onClick={handleConversation}  className="adopte-single-student-button" to="">Contacter</Link>
                            </div>
                            <div>
                              
                            </div>
                            <div className="attachments-student-files">
                              <a href={`${PF + student?.cv}`} target="_blank" rel="noreferrer" ><img src="/assets/svg/icon-cv.svg" alt="cv-logo" className="cv-lm-svg"/></a>
                              <a href={`${PF + student?.motivationLetter}`} target="_blank" rel="noreferrer" ><img src="/assets/svg/icon-lm.svg" alt="lm-logo" className="cv-lm-svg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="secondpart">

                    <h4>Ils cherchent aussi dans le même domaine</h4>
                    <div className="pic-ctn">
                    {
                     studentsSameDomain.map((student, i) => (
                        <img key={i} onClick={() => navigate('/student/' + student._id)} src={`${PF + student?.profilePicture}`} alt="" className="pic btn btn-link"/>
                    ))}

                    </div>
                </div>
                {
                  success ? <FlashMessage message={message} color={color}  /> : ""
                }
            </div>
        </div>
    </div>
  )
}

export default Student
