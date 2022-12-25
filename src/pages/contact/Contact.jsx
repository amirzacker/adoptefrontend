import { useContext, useEffect, useRef, useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Contact() {

    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [userExist, setUserExist] = useState("");


    //test error of form 
    
    const yupValidation = Yup.object().shape({
        name: Yup.string()
          .required('Veuillez saisir une valeur.')
          .min(4, '4 caracteres minimum'),
        email: Yup.string().required('Email requise').email(),
        city: Yup.string().required('Ville requise'),
        desc: Yup.string().required('Description requise'),
        password: Yup.string()
        .required("Mot de passe requis")
        .min(10, "Mot de passe requis minimum 10 caractères")
        .max(20, "Mot de passe requis maximum 20 caractères")
        .matches(/([0-9])/, "Au moins un entier"),
        cpassword: Yup.string()
        .required("Mot de passe de confirmation requis")
        .min(10, "Mot de passe requis minimum 10 caractères")
        .max(20, "Mot de passe requis maximum 20 caractères")
        .matches(/([0-9])/, "Au moins un entier")
        .oneOf([Yup.ref("password")], "Mot de passe non identiques"),
        acceptTerms: Yup.bool().oneOf(
            [true],
            "Accepter les conditions est obligatoire"
        ),
        })
      const formOptions = { resolver: yupResolver(yupValidation) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState;

 


    //test error of form 



  
    const handleClick = async (data) => {
   
    try {
        await axios.get("/users/email/"+ data.email)
        //Test if Email already exists in the database
        //console.log(uu);
        setUserExist('Email already exists in the database');
    } catch (error) {
         // Continue with the form submission if the email does not exist
         //alert('Email does not exist. Form submission successful');

         const user = {
            name: data.name,
            desc: data.desc,
            city: data.city,
            email: data.email,
            isCompany: true,
            password: data.password,
          };
          if (file) {
              const data = new FormData();
              const fileName = Date.now() + file.name;
              data.append("name", fileName);
              data.append("file", file);
              user.profilePicture = fileName;
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
                <p>Ajoutez votre logo</p>

            </div>
            <form className="form-container" onSubmit={handleSubmit(handleClick)}>
            <div className="form-group">
                    <label className="form-label">Je cherche</label>
                        <div  className="form-check">
                        <input  className={`form-check-input ${errors.searchType ? 'is-invalid' : ''}`} {...register('searchType')}  value="" type="radio" name="searchType"  />
                        <label className="form-check-label"> Etudiant </label>
                        </div>
                        <div  className="form-check">
                        <input  className={`form-check-input ${errors.searchType ? 'is-invalid' : ''}`} {...register('searchType')}  value="" type="radio" name="searchType"  />
                        <label className="form-check-label"> Entreprise </label>
                        </div>
                
                   <div className="invalid-feedback">{errors.searchType?.message}</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''} form-control-lg`} placeholder="Entrez votre nom"   name="name" {...register('name')}/>
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Sujet :</label>
                    <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''} form-control-lg`} {...register('city')} name="city" placeholder="Entrez votre ville" />
                    <div className="invalid-feedback">{errors.city?.message}</div>
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''} form-control-lg`} {...register('email')} placeholder="Entrez votre email" name="email" />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                    {userExist && <div className="alert alert-danger">{userExist}</div>}
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className={`form-control ${errors.desc ? 'is-invalid' : ''} form-control-lg`} {...register('desc')} name="desc" rows="6" />
                    <div className="invalid-feedback">{errors.desc?.message}</div>
                </div>
            
                <div className="form-group">
                    <label className="form-label">J'ai lu et j'accepte les conditions</label>
                    <input type="checkbox" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''} `} {...register('acceptTerms')} style={{padding: "10px", margin: "0px 0px 10px 10px" }} name="acceptTerms" />
                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                </div>

                <div className="form-group submit-subscribe-button-div">
                    <input type="submit" className="form-control form-control-lg submit-subscribe-button" value="Envoi"/>
                </div>
            </form>
        </div>
    </div>
  );
}