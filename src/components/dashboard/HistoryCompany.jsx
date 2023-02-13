import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import { useCallback } from "react";
import FlashMessage from "../alert/FlashMessage";
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function HistoryCompany({ currentUser }) {
  const [adoptions, setAdoption] = useState([]);
  const [adoptionForDate, setAdoptionForDate] = useState(null);
  const [contractForDate, setContractForDate] = useState(null);
  const [contactForDate, setContactForDate] = useState(null);

  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState("");

  const [selectedAdoption, setSelectedAdoption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useState(null);

  const handleCloseModal = () => {
    setSelectedAdoption(null);
    setShowModal(false);
  };

  const handleShowModal = (adoption) => {
    setSelectedAdoption(adoption);
    setShowModal(true);
  };

  useEffect(() => {
    const getAdoptions = async () => {
      try {
        const res = await axios.get(`/adoptions/${currentUser?.user?._id}`, {
          headers: { "x-access-token": currentUser.token },
        });
        //setAdoption(res.data);
        setAdoption(
          res.data.filter((adoption) => adoption.status === "accepted")
        );
        //console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getAdoptions();
  }, [currentUser, adoptions]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pages = Math.ceil(adoptions.length / itemsPerPage);
  const paginatedData = adoptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //console.log(currentUser?.token);

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  function convertDate(date) {
    const month = date.toLocaleString("fr", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day} ${month}  ${year}`;
  }

  function calculateDuration(startDate, endDate) {
    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();
    const duration =
      endMonth -
      startMonth +
      12 * (endDate.getFullYear() - startDate.getFullYear());
    return duration;
  }

  const calculateRemainingDuration = (startDate, endDate) => {
    const totalDuration = calculateDuration(startDate, endDate);
    const elapsedTime = Date.now() - startDate.getTime();
    const elapsedDuration = Math.floor(
      elapsedTime / (1000 * 60 * 60 * 24 * 30)
    );
    const remainingDuration = totalDuration - elapsedDuration;
    return remainingDuration;
  };

  useEffect(() => {
    const getAdoption = async () => {
      try {
        const res = await axios.get(
          `/adoptions/history/${currentUser?.user?._id}/${selectedAdoption?.adopted?._id}`,
          {
            headers: { "x-access-token": currentUser.token },
          }
        );
        setAdoptionForDate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getContract = async () => {
      try {
        const res = await axios.get(
          `/contracts/history/${currentUser?.user?._id}/${selectedAdoption?.adopted?._id}`,
          {
            headers: { "x-access-token": currentUser.token },
          }
        );
        setContractForDate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getContact = async () => {
      try {
        const res = await axios.get(
          `/conversations/find/${currentUser?.user?._id}/${selectedAdoption?.adopted?._id}`,
          {
            headers: { "x-access-token": currentUser.token },
          }
        );
        setContactForDate(res.data);
      } catch (err) {
        console.log(err);
      }
    };

  
    if (selectedAdoption) {
      getAdoption();
      getContract();
      getContact();
    }
  }, [
    currentUser,
    selectedAdoption,
    contractForDate,
    adoptionForDate,
    contactForDate,
  ]);

  return (
    <div>
      <h2>Mes Historiques</h2>
      <>
        <div className="table-responsive">
          <table className="table table-striped striped bordered hover">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Recherche</th>
                <th>Domaine</th>
                <th>Adresse</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length ? (
                paginatedData.map((adoption, index) => (
                  <tr key={index}>
                    <td>{adoption.adopted?.lastname}</td>
                    <td>{adoption.adopted?.firstname}</td>
                    <td>{adoption.adopted?.searchType?.name}</td>
                    <td>{adoption.adopted?.domain?.name}</td>
                    <td>{adoption.adopted?.city}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleShowModal(adoption)}
                      >
                        Consulter
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">chargement...</span>
                  </div>
                  <span className="visually">Pas d'historique encours...</span>
                </div>
              )}
            </tbody>
          </table>
        </div>

        {selectedAdoption && (
          <Modal show={!!selectedAdoption} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Details de l'historique</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formAdopterName">
                  <Form.Label style={{ color: "red", fontWeight: "bold" }}>
                    Adoption :
                  </Form.Label>
                  <br />
                  Demande :{" "}
                  {adoptionForDate
                    ? convertDate(new Date(adoptionForDate?.createdAt))
                    : "en cours"}
                  <br />
                  <br />
                  Acceptation :{" "}
                  {adoptionForDate
                    ? convertDate(new Date(adoptionForDate?.updatedAt))
                    : "en cours"}
                  <br />
                  <br />
                </Form.Group>
                <Form.Group controlId="formPet">
                  <Form.Label style={{ color: "red", fontWeight: "bold" }}>
                    Prise de contact :
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={
                      contactForDate
                        ? convertDate(new Date(contactForDate?.createdAt))
                        : "en cours"
                    }
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="formPet">
                  <Form.Label style={{ color: "red", fontWeight: "bold" }}>
                    Contrat :
                  </Form.Label>
                  <br />
                  Envoi :{" "}
                  {contractForDate
                    ? convertDate(new Date(contractForDate?.createdAt))
                    : "en cours"}
                  <br />
                  <br />
                  Signature :{" "}
                  {contractForDate
                    ? convertDate(new Date(contractForDate?.updatedAt))
                    : "en cours"}
                  <br />
                  <br />
                  Type :{" "}
                  {contractForDate
                    ? contractForDate.student?.searchType?.name
                    : "en cours"}
                  <br />
                  <br />
                  Durée :{" "}
                  {contractForDate
                    ? calculateDuration(
                        new Date(contractForDate?.startDate),
                        new Date(contractForDate?.endDate)
                      ) + " mois "
                    : "en cours"}
                  <br />
                  <br />
                  Durée restante :{" "}
                  {contractForDate
                    ? calculateRemainingDuration(
                        new Date(contractForDate?.startDate),
                        new Date(contractForDate?.endDate)
                      ) + " mois "
                    : "en cours"}
                  <br />
                  <br />
                  <Form.Label style={{ color: "red", fontWeight: "bold" }}>
                    Suivi:
                  </Form.Label>
                  <br />
                  1er :{" "}
                  {contractForDate
                    ? convertDate(new Date(contractForDate?.createdAt))
                    : "en cours"}
                  <br />
                  <br />
                  2e :{" "}
                  {contractForDate
                    ? convertDate(new Date(contractForDate?.updatedAt))
                    : "en cours"}
                  <br />
                  <br />
                  3e :{" "}
                  {contractForDate
                    ? contractForDate.student?.searchType?.name
                    : "en cours"}
                  <br />
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </>
      <div className="d-flex justify-content-center mt-3">
        <Pagination count={pages} page={currentPage} onChange={handleChange} />
      </div>
    </div>
  );
}
