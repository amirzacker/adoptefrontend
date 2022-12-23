import { useContext, useRef } from "react";
import "./dashboard.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import StudentHome from "../../components/dashboard/StudentHome";
import { useState } from "react";
import Adoption from "../../components/dashboard/Adoption";
import CompanyHome from "../../components/dashboard/CompanyHome";
import Home from "../../components/dashboard/Home";

export default function Dashboard() {
  
	const { user } = useContext(AuthContext);
	
	const [currentComponent, setCurrentComponent] = useState(<Home currentUser={user}/>);

	console.log(user);
	const handleHome = () => {
		if (user?.user?.isCompany) {
			setCurrentComponent(<CompanyHome currentUser={user}/>);
        } else if (user?.user?.isStudent) {
			setCurrentComponent(<StudentHome currentUser={user}/>);
        }
		setCurrentComponent(<StudentHome currentUser={user}/>);
	  };

	const handleAdoption = () => {
		setCurrentComponent( <Adoption currentUser={user}/>);
	  };

  return (
    <main>
       <div className="sidebar">
			<ul>
				<div className="student-avatar-container">
					<li className="student-avatar-dashboard">
						<img src="/assets/img/avatar3.png" alt="avatar-student"/>
					</li>
				</div>
				<div className="center-icons-dashboard">
					<li className="home-icon">
						<Link onClick={handleHome}  to="#">
							<i className="fas fa-house-user"></i>
						</Link>
					</li>
					<li className="messages-icon">
						<Link to="/messenger">
							<i className="fas fa-comment"></i>
						</Link>
					</li>
					<li  className="users-icon">
						<Link onClick={handleAdoption} to="#">
							<i className="fas fa-users"></i>
						</Link>
					</li>
					<li className="bell-icon">
						<Link to="#">
							<i className="fas fa-bell"></i>
						</Link>
					</li>
                <li>
					<Link to="#"><img src="/assets/svg/iconnavdashboard/deconnexion.svg" alt="deconnexion" id="logout-icon"/></Link>
				</li>
			</div>
		</ul>
	</div>

	<div className="dashboard-partition">

	
	{currentComponent}

    </div>
    </main>
  );
}
