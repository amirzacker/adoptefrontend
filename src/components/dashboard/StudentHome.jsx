import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Switch, IconButton, Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  } from '@material-ui/core';
import { Delete , Cancel } from '@material-ui/icons';
export default function StudentHome({ currentUser }) {

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(null);

  const [status, setStatus] = React.useState(currentUser?.user?.status);


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/users/" + currentUser?.user?._id);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();

  }, [currentUser, status]);


  const token = currentUser?.token;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

  function convertDate(date) {
    const month = date.toLocaleString('fr', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${day} ${month}  ${year}`;
  }

  const timestampCv = user?.cv;
  const timestampMo = user?.MotivationLetter;

  const startDate = convertDate(new Date(user?.startDate));
  const endDate = convertDate(new Date(user?.endDate));
  


  const DateCv = convertDate(new Date(parseInt(timestampCv)));
  const DateMo = convertDate(new Date(parseInt(timestampMo)));


  const handleChange = async (event) => {
    try {
      const res = await axios.put("/users/" + user?._id, { status: event.target.checked }, { headers: {"x-access-token" : token} });
      console.log(res);
      setStatus( event.target.checked );

    const storedObject = JSON.parse(localStorage.getItem('user'));

    // Update the object
    storedObject.user = res.data;

    // Save the updated object back to localStorage
    localStorage.setItem('user', JSON.stringify(storedObject));
    window.location.reload();
    } catch (err) {console.log(err)}

   
  };

  const handleDeleteCompte = async (e) => {
    try {
        // Submit the form
        await axios.delete("/users/" + user?._id, { headers: {"x-access-token" : token} });
        // after delete remove  localStorage
        localStorage.removeItem('user');
        //and reload page to deconnecte
        window.location.reload();
 
    } catch (err) {console.log(err)}
   
  };

//console.log(parseInt(user?.cv));
//console.log(currentUser);






  return (
    <div>
    
    <div className="dash-partition-header-student">
			<div className="partition-header-profil">
				<h4>Hello 
					{" "} {user?.firstname}</h4>
				<h5>Profil renseigné à 80%</h5>
				<h6>
					<Link to="#">Modifier mon mot de passe</Link>
			   </h6>
			<h6>
				<Link to="#">Modifier mon profil</Link>
			</h6>
		</div>
		<div className="partition-header-date">
			<h4>Type de recherche :
      {" "} {user?.searchType?.name}
			</h4>
			<h5>Du
      {" "} {startDate} {" "}
				au
        {" "} {endDate}
      </h5>
			<h6>
				<Link to="#">Modifier</Link>
			</h6>
		</div>
		<div className="partition-header-status">
		
            <h4>Votre status</h4>
            <Switch color="primary" checked={status} onChange={handleChange} />
            <h5>Supprimer votre compte</h5>            

       <IconButton onClick={() => setOpen(true)}>
        <Delete fontSize="large" color="secondary" />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Vous etes sur de bien vouloir supprimer votre compte?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            <Cancel />
            Annulez
          </Button>
          <Button onClick={handleDeleteCompte}>
            <Delete />
            Confirmez
          </Button>
        </DialogActions>
      </Dialog>




		</div>
	</div>
	<div className="dash-partition-cv-lm">
		<div className="partition-cv">
			<h4>Mon CV</h4>
			<h5>Mise à jour le {" "} {DateCv}</h5>
			<h6>
				<a href={`${PF + "pdf.pdf"}`} target="_blank" rel="noreferrer" >Voir</a>
			</h6>

			<h6>
				<Link to="">Modifier</Link>
			</h6>
		</div>
		<div className="partition-lm">
			<h4>Ma lettre de motivation</h4>
			<h5>Mise à jour le {" "} {DateMo}</h5>
			<h6>
      <a href={`${PF + "pdf.pdf"}`} target="_blank" rel="noreferrer" >Voir</a>
			</h6>
			<h6>
				<Link to="#">Modifier</Link>
			</h6>
		</div>
	</div>
	<div className="dash-partition-description">
		<h4>description</h4>
		<h5>{user?.desc}</h5>
		<h6>
			<Link to="">Modifier ma description</Link>
		</h6>
	</div>

    </div>
  );
}
