import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export default function AdoptionUnit({
  user,
  currentUser,
  deleteUser,
  handleClickUnadopte,
}) {
  const handleUnAdoption = async () => {
    try {
      await axios.put(
        "/users/" + user?._id + "/unfavoris",
        { id: currentUser?.user?._id },
        { headers: { "x-access-token": currentUser?.token } }
      );
      //navigate("/messenger");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (event) => {
    handleUnAdoption();
    handleClickUnadopte(user?._id);
  };

  //console.log(currentUser);
  return (
    <div className="card favoris-card h-50">
      <Link className="d-flex justify-content-center align-items-center" to="#">
        <img
          className="card-img-top-favoris"
          src="/assets/img/avatar3.png"
          alt="Card cap"
        />
      </Link>
      <div className="card-body  flex-column">
        {currentUser?.user?.isCompany ? (
          <>
            <p className="card-text">{user?.firstname}</p>
            <span className="fw-normal">Recherche : </span>
            <span className="fw-bold text-danger">
             {" "} {user?.searchType?.name}
            </span>
            <p>{user?.domain?.name}</p>
            <Link to={"/student/" + user?._id}>
              <h6 className="btn btn-secondary btn-bg w-50 my-2">
                Voir profil
              </h6>
            </Link>
            <IconButton>
              <Delete
                fontSize="medium"
                color="secondary"
                onClick={handleDelete}
              />
            </IconButton>
          </>
        ) : (
          <>
            <p className="card-text">{user?.name}</p>
            <span className="fw-normal">Adresse:</span>
            <span className="fw-bold text-danger"> {user?.city}</span>
          </>
        )}
      </div>
    </div>
  );
}
