import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Adoption({ currentUser }) {
    const [adoptions, setAdoption] = useState([]);
    useEffect(() => {
        if (currentUser?.user?.isCompany) {
            setAdoption([...adoptions, currentUser?.user?.adoptions])
            console.log("company");
        } else if (currentUser?.user?.isStudent) {
            setAdoption([...adoptions, currentUser?.user?.isAdopted])
            console.log("students");
        }
      }, [currentUser]);

      console.log(adoptions);

   
  return (
    <div>
    	
 <div className="dash-partition-cv-lm">
	
    <div className="partition-lm">
        <h4>Nombre d'apdotion : </h4>
        <h5>{adoptions.length -1 }</h5>
    </div>
</div>

   <div className="div-adopted-button">
       <p className="adopted-button">{currentUser?.user?.isCompany ? "Vous adoptés : " : "Vous etes adoptés par : "}</p>
   </div>
   
   <div className="row rowcards">
       <div className="card" style={{width: "18rem"}}>
           <Link to="#"><img className="card-img-top" src="assets/img/avatar3.png" alt="Card image cap"/></Link>
           <div className="card-body">
               <p className="card-text">AMIR azae

               </p>
           </div>
       </div>
       <div className="card" style={{width: "18rem"}}>
           <Link to="#"><img className="card-img-top" src="assets/img/avatar3.png" alt="Card image cap"/></Link>
           <div className="card-body">
               <p className="card-text">AMIR azae

               </p>
           </div>
       </div>
       <div className="card" style={{width: "18rem"}}>
           <Link to="#"><img className="card-img-top" src="assets/img/avatar3.png" alt="Card image cap"/></Link>
           <div className="card-body">
               <p className="card-text">AMIR azae

               </p>
           </div>
       </div>
   </div>
    </div>
  );
}
