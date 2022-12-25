import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AdoptionUnit from "./AdoptionUnit";
import { Pagination } from '@material-ui/lab';
import { useCallback } from "react";




export default function Adoption({ currentUser }) {
  const [adoptions, setAdoption] = useState([]);
  

  useEffect(() => {
    const getAdoptions = async () => {
      try {
        const res = await axios.get("/users/adoptions" , { headers: {"x-access-token" : currentUser.token} });
        if (currentUser?.user?.isCompany) {
            setAdoption(res.data.adoptions);
            //setAdoption([...adoptions, res.data.adoptions]);
            console.log("company");
          } else if (currentUser?.user?.isStudent) {
            setAdoption(res.data.adopted);
            //setAdoption([...adoptions, res.data.adopted]);
            console.log("students");
          }
      } catch (err) {
        console.log(err);
      }
    };
    getAdoptions();
  }, [currentUser,adoptions]);

  const deleteUser =  useCallback(userId => {
    setAdoption(adoptions.filter(user => user.id !== userId))
  }, [adoptions, currentUser])




  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3 ;
  const pages = Math.ceil(adoptions.length / itemsPerPage);
  const paginatedData = adoptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };



  const handleClickUnadopte =  useCallback(userId => {
    setAdoption(adoptions.filter(user => user.id !== userId))
    console.log(userId);
  }, [adoptions])

  return (
    <div>
      <div className="dash-partition-cv-lm">
        <div className="partition-lm">
          <h4>Nombre d'apdotion : </h4>
          <h5>{adoptions.length}</h5>
        </div>
      </div>

      <div className="div-adopted-button">
        <p className="adopted-button">
          {currentUser?.user?.isCompany
            ? "Vous adoptés : "
            : "Vous etes adoptés par : "}
        </p>
      </div>

      <div className="row rowcards">
            {paginatedData.length  ? (
              paginatedData.map((user, i) => (
                <AdoptionUnit key={i} user={user} currentUser={currentUser} handleClickUnadopte={handleClickUnadopte}/>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <Pagination count={pages} page={currentPage} onChange={handleChange} />
      </div>

     

    </div>
  );
}
