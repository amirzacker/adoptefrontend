import { useContext, useRef } from "react";
import "./dashboard.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function DashboardStudent() {
  
	const { user } = useContext(AuthContext);

  return (
    <main>
       <div className="sidebar">
			<ul>
				<div className="student-avatar-container">
					<li className="student-avatar-dashboard">
						<img src="assets/img/avatar3.png" alt="avatar-student"/>
					</li>
				</div>
				<div className="center-icons-dashboard">
					<li className="home-icon">
						<Link to="#">
							<i className="fas fa-house-user"></i>
						</Link>
					</li>
					<li className="message-icon">
						<Link to="#">
							<i className="fas fa-comment"></i>
						</Link>
					</li>
					<li className="message-icon">
						<Link to="/dashboardStudentAdoption">
							<i className="fas fa-users"></i>
						</Link>
					</li>
					<li className="message-icon">
						<Link to="#">
							<i className="fas fa-bell"></i>
						</Link>
					</li>
                <li>
					<Link to="#"><img src="assets/svg/iconnavdashboard/deconnexion.svg" alt="deconnexion" id="logout-icon"/></Link>
				</li>
			</div>
		</ul>
	</div>

	<div className="dashboard-partition">
		<div className="dash-partition-header-student">
			<div className="partition-header-profil">
				<h4>Hello
					AMIR</h4>
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
				Alternance
			</h4>
			<h5>Du
                01/12/2022
				au
				01/12/2022</h5>
			<h6>
				<Link to="#">Modifier</Link>
			</h6>
		</div>
		<div className="partition-header-status">
			
					<div className="form-check form-switch">
						<input className="form-check-input " type="checkbox" id="flexSwitchCheckDisabled" checked/>
						<label className="form-check-label " for="flexSwitchCheckDisabled">adopté</label>
					</div>
                   

		</div>
	</div>
	<div className="dash-partition-cv-lm">
		<div className="partition-cv">
			<h4>Mon CV</h4>
			<h5>Mise à jour le 02/12/2021</h5>
			<h6>
				<Link to="">Voir</Link>
			</h6>

			<h6>
				<Link to="">Modifier</Link>
			</h6>
		</div>
		<div className="partition-lm">
			<h4>Ma lettre de motivation</h4>
			<h5>Mise à jour le 02/12/2021</h5>
			<h6>
				<Link to="">Voir</Link>
			</h6>
			<h6>
				<Link to="#">Modifier</Link>
			</h6>
		</div>
	</div>
	<div className="dash-partition-description">
		<h4>description</h4>
		<h5>sfjdsfdjfjdbfjdbfjsfbsjfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdbsjfsfsfsffsfsf</h5>
		<h6>
			<Link to="">Modifier ma description</Link>
		</h6>
	</div>
</div>
    </main>
  );
}
