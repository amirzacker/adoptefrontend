import { useContext, useEffect, useRef, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function RegisterCompany() {
    const profilePicture = useRef();
    const name = useRef();
    const desc = useRef();
    const city = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        emailError ? setEmailError("password and user don't match") : setEmailError("") 
        }, [emailError]);
  
    const handleClick = async (e) => {
      e.preventDefault();
      if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!");
      } else {
        const user = {
          name: name.current.value,
          desc: name.current.value,
          city: name.current.value,
          email: email.current.value,
          isCompany: true,
          password: password.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            user.profilePicture = fileName;
            console.log(user);
            try {
                await axios.post("/uploads",data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
          await axios.post("/users", user);
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      }
    };

  return (

    <div className="container">
        <div className="form-inscription">
            <div className="headersubscribe">
                <h2>Inscription</h2>
                <h3>
                    <label htmlFor="profilePicture">

                     <img src="assets/svg/icon-img-etudiant.svg" alt="upload-img-student"/>
                    </label>
                </h3>
                <p>Ajoutez votre logo</p>

            </div>
            <form className="form-container" onSubmit={handleClick}>
                <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="file" className="form-control form-control-lg" style={{display: "none"}}  id="profilePicture" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])}/>
                    <input type="text" className="form-control form-control-lg" placeholder="Entrez votre nom"  ref={name}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Ville</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Entrez votre ville"ref={city}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea className="form-control form-control-lg " rows="6"  ref={desc}></textarea>
                </div>
                <div className="form-group">
                {emailError && <div className="alert alert-danger">{emailError}</div>}
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Entrez votre email" required ref={email}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Mot de passe</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Entrez votre mot de passe" required ref={password}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Confirmation de mot de passe</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Confirmez votre mot de passe" required ref={passwordAgain}/>
                </div>

                <div className="form-group submit-subscribe-button-div">
                    <input type="submit" className="form-control form-control-lg submit-subscribe-button" value="Envoi"/>
                </div>
            </form>
        </div>
    </div>
  );
}
