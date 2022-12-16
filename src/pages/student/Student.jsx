import './student.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Student () {

    const navigate = useNavigate()

    const [student, setStudent] = useState({});
    const userId = useParams().id;
  
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users/${userId}`);
        setStudent(res.data);
      };
      fetchUser();
    }, [userId]);

    const [studentsSameDomain, setStudentsSameDomain] = useState([]);
    const domainId = student?.domain?._id;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users/domain/${domainId}`);
          setStudentsSameDomain(res.data);
        };
        fetchUser();
      }, [domainId, userId ]);

  return (
    <div>
        <div className="container-fluid">
            <div className="single-student-main">
                <div className="firstpart">
                    <div className="profil-student">
                        <div className="photo-student"><img  src="/assets/img/avatar1.png" alt="student"/></div>
                        <div className="personal-information-student">
                            <h3>{student.firstname}</h3>
                            <h4>Soleimani</h4>
                            <p>23 Ans</p>
                            <p>Lyon 1 er France</p>
                        </div>
                    </div>
                    <div className="description-student">
                        <div className="description-student-principal">
                            <div className="description-student-1">
                                <p>Cherche stage {student.searchType?.name}</p>
                                <p> Du 17 Janvier au 17 Mars 2021</p>
                            </div>
                            <div className="description-student-2">
                                <h4>DESCRIPTION</h4>
                            </div>
                            <div className="description-student-3">
                                <p>Jelly beans shortbread wafer cookie lemon drops powder I love. Donut ice cream chocolate bar carrot cake cheesecake donut. Shortbread icing cotton candy lemon drops caramels sweet roll dragée marzipan halvah. Pie soufflé
                                    topping I love cake. Cookie muffin carrot cake soufflé croissant oat cake powder chocolate cake. Candy apple pie danish tart fruitcake jelly chocolate cake.</p>
                            </div>
                        </div>
                        <div className="attachments-student">
                            <div className="adopte-single-student-container">
                                <Link className="adopte-single-student-button" to="#">Adopter</Link>
                                <Link className="adopte-single-student-button" to="#">Contacter</Link>
                            </div>
                            <div className="attachments-student-files">
                                <Link to="#"><img src="/assets/svg/icon-cv.svg" alt="cv-logo" className="cv-lm-svg"/></Link>
                                <Link to="#"><img src="/assets/svg/icon-lm.svg" alt="lm-logo" className="cv-lm-svg"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondpart">

                    <h4>Ils cherchent aussi dans le même domaine</h4>
                    <div className="pic-ctn">
                    {
                     studentsSameDomain.map((student) => (
                        <img  onClick={() => navigate('/student/' + student._id)} src="/assets/img/avatar3.png" alt="" className="pic btn btn-link"/>
                    ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Student
