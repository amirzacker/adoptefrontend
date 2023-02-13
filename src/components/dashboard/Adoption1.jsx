import axios from "axios";
import { useEffect, useState } from "react";
import AdoptionUnit from "./AdoptionUnit";
import { Pagination } from "@material-ui/lab";
import { useCallback } from "react";
import FlashMessage from "../alert/FlashMessage";

export default function Adoption({ currentUser }) {
  const [adoptions, setAdoption] = useState([]);

  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState("");
  /* 
  useEffect(() => {
    const getAdoptions = async () => {
      try {
        const res = await axios.get("/users/adoptions", {
          headers: { "x-access-token": currentUser.token },
        });
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
  }, [currentUser, adoptions]); */

  useEffect(() => {
    const getAdoption = async () => {
      try {
        const res = await axios.get("/users");
        setAdoption(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAdoption();
  }, [adoptions]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const pages = Math.ceil(adoptions.length / itemsPerPage);
  const paginatedData = adoptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleClickUnadopte = useCallback(
    (userId) => {
      setAdoption(adoptions.filter((user) => user.id !== userId));
      setMessage(" étudiant supprimé avec succes");
      setSuccess(true);
      console.log(userId);
    },
    [adoptions]
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-3 mt-6">
        <h1>Panneau d'apdoption</h1>
      </div>
      <div className="form">
        <form className="container" style={{ display: "flex" }}>
          <div>
            <select className="form-control">
              <option value="">selectionnez.. domain</option>

              <option value="f">""</option>
            </select>
          </div>
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {success ? <FlashMessage message={message} color={true} /> : ""}
        {paginatedData.length ? (
          paginatedData.map((user, i) => (
            <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={i}>
              <AdoptionUnit
                user={user}
                currentUser={currentUser}
                handleClickUnadopte={handleClickUnadopte}
              />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span className="visually">Pas d'adoption encours...</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination count={pages} page={currentPage} onChange={handleChange} />
      </div>
    </div>
  );
}
