import './student.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import FlashMessage from '../../components/alert/FlashMessage';

function Student () {
    const { user } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");
    const [color, setColor] = useState(true);
   

    const navigate = useNavigate();

    const [student, setStudent] = useState({});
    const userId = useParams().id;
  
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
              navigate("/messenger");
            } else {

              try {
                const data = {
                    senderId : user?.user?._id,
                    receiverId : userId
                }
              await axios.post("/conversations/", data, { headers: {"x-access-token" : user?.token} });
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


      const handleAdoption = async () => {
      
            try {
              if (user?.user?.isCompany) {
              await axios.put("/users/" + userId +"/adopte", { id : user?.user?._id} , { headers: {"x-access-token" : user?.token} });
              //navigate("/messenger");
              setMessage("adopté avec succes");
              setSuccess(true)
              } else{
                setColor(false); 
                setMessage("Attention vous etes etudiant! vous ne pouver pas adopter un autre, choisisez le profil entreprise si vous vous etes trompé ");
                setSuccess(true)
              }
            } catch (err) {
             ! user ? navigate("/login") : setMessage(" vous avez déjà adopté cet étudiant") && setSuccess(true) ; 
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
                                <Link onClick={handleConversation}  className="adopte-single-student-button" to="">Contacter</Link>
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
