import { useContext, useRef } from "react";
import "./register.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function RegisterCompany() {
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

    <div class="container">
        <div class="form-inscription">
            <div class="headersubscribe">
                <h2>Inscription</h2>
                <h3><img src="assets/svg/icon-img-etudiant.svg" alt="upload-img-student"/></h3>
                <p>Ajoutez votre logo</p>

            </div>
            <form class="form-container" method="POST">
                <div class="form-group">
                    <label class="form-label">Nom</label>
                    <input type="text" class="form-control form-control-lg" placeholder="Entrez votre nom"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Ville</label>
                    <input type="text" class="form-control form-control-lg" placeholder="Entrez votre ville"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-control form-control-lg " rows="6"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control form-control-lg" placeholder="Entrez votre email"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Mot de passe</label>
                    <input type="password" class="form-control form-control-lg" placeholder="Entrez votre mot de passe"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Confirmation de mot de passe</label>
                    <input type="password" class="form-control form-control-lg" placeholder="Confirmez votre mot de passe"/>
                </div>

                <div class="form-group submit-subscribe-button-div">
                    <input type="submit" class="form-control form-control-lg submit-subscribe-button" value="Envoi"/>
                </div>
            </form>
        </div>
    </div>
  );
}
