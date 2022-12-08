import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function Login() {
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
    <main>
    <div className="mapage">
        <div className="container">
            <form className="login">
            <img src="assets/logos/logodef.svg" alt="adopte-logo" className="adopte-logo-login"/>
                <p className="welcome">Bienvenue</p>
                <input type="email" name="email" placeholder="Email"/><br/>
                <input type="password" name="password" placeholder="Mot de passe"/><br/>
                <input type="submit" name="submit" value="Connexion"/><br/>
              <Link to="/registerStudent">Vous etes un nouveau étudiant?</Link><br/>
              <Link to="/registerCompany">une entreprise?</Link>
            </form>
        </div>
    </div>
</main>
  );
}
