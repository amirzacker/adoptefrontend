import "./students.css";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import logo from "../../logo.svg";
import { Context } from "../../context";
import classnames from "classnames";

function Students() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  

  const [searchDomain, setSearchDomain] = useState('')
  const handleDomain = useCallback(event => setSearchDomain(event.target.value), [])

  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(() => {
    setFilteredUsers(users.filter(user => user?.domain?.name?.toLowerCase().includes(searchDomain.toLowerCase() )))
  }, [searchDomain, users])


  useEffect(() => {
    // Axios version
    axios.get("/users").then((result) => setUsers(result.data));
  }, [users]);
  return (
    <div>
      <section className="content" id="profiletudiants">
        <div className="container">
          <div className="row rowcards">
            <Link to="#">
              <h2>Web Developer students</h2>
            </Link>
        {
             users.map((student) => (
              
       
            <div class="card">
              <Link to="/student">
                {" "}
                <img
                  className="card-img-top"
                  src="assets/img/avatar1.png"
                  alt=""
                />
              </Link>
              <div class="card-body">
                <span class="card-text fw-bold">{student.firstname}</span>
                <br />
                <span className="fw-normal">Recherche:</span>
                <span  className="fw-bold text-danger"> {student.searchType?.name}</span>
                <br />
                <span class="card-text fw-lighter fst-italic ">Du: 01-01-1997 Au: 01-01-1997 </span>
                <p>{student.domain?.name}</p>
                <Link   to={"/student/" + student._id}>
                  <h6 className="text-center btn btn-secondary btn-bg">Voir profil</h6>
                </Link>
            
              </div>
            </div>
     ))
    }
           
          </div>
        </div>
      </section>

      <section className="content" id="profiletudiants2">
        <div className="container">
          <div className="row rowcards">
            <Link to="">
              <h2>Business students</h2>
            </Link>
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/avatar1.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/avatar2.webp"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/avatar3.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/avatar4.webp"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
      <h1>Liste des utilisateurs</h1>
      <input type="text" className="form-control" placeholder="Recherche par domain" onChange={handleDomain}/>
      <div className="container mt-3">
        <div className="row">
          {filteredUsers.length
            ? filteredUsers.map((user, i) =>
              <div
                key={i}
                className="col-6 col-sm-4 col-md-3 mb-3"
                style={{ cursor: 'pointer' }}
              >
                {user.firstname}{user.domain?.name}
              </div>,
            )
            : <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default Students;
