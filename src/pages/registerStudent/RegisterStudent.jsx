import { useContext, useRef } from "react";
import "./register.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function RegisterStudent() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
<div className="container">
        <div className="form-inscription">
            <div className="headersubscribe">
                <h2>Inscription</h2>
                <h3><img src="assets/svg/icon-img-etudiant.svg" alt="upload-img-student"/></h3>
                <p>Ajoutez votre photo</p>
            </div>
            <form className="form-container">
                <div className="form-group form-group-css">
                    <label className="form-label">Prénom</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Entrez votre prénom"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Entrez votre nom"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Âge</label>
                    <input type="number" className="form-control form-control-lg" placeholder="Entrez votre âge"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Ville</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Entrez votre ville"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Je cherche</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="form-check-label" for="flexRadioDefault1">
                      Stage
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" for="flexRadioDefault2">
                      Alternance
                    </label>
                    </div>
                </div>

                <label className="form-label">Durée</label>
                <div className="date-form-container">
                    <p>De : </p>
                    <input type="date" className="form-control form-control-lg date-form"/>
                    <p id="date-delai">à : </p>
                    <input type="date" className="form-control form-control-lg date-form"/>

                </div>

                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Domaine</label><br/>
                <select className="form-control-lg form-control">
                    <option value="1">Informatique</option>
                    <option value="2">Commerce</option>
                    <option value="3">Santé</option>
                    <option value="4">Restauration</option>
                    <option value="5">Logistique</option>
                </select>

                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea className="form-control form-control-lg " rows="5"></textarea>
                </div>

                <label className="form-label">Ajoutez votre CV et lettre de motivation</label>
                <div className="row">
                    <img src="assets/svg/icon-cv.svg" alt="cv-logo" className="cv-lm-svg"/>
                    <img src="assets/svg/icon-lm.svg" alt="lm-logo" className="cv-lm-svg"/>
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Entrez votre email"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Mot de passe</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Entrez votre mot de passe"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Confirmation de mot de passe</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Confirmez votre mot de passe"/>
                </div>

                <div className="form-group submit-subscribe-button-div">
                    <input type="submit" className="form-control form-control-lg submit-subscribe-button" value="Envoi"/>
                </div>
            </form>
        </div>
    </div>
  );
}
