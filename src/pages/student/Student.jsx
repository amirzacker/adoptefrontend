import './student.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Student () {
/*   const { context, dispatch } = useContext(Context)
  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch]) */
  return (
    <div>
        <div class="container-fluid">
            <div class="single-student-main">
                <div class="firstpart">
                    <div class="profil-student">
                        <div class="photo-student"><img src="assets/img/avatar1.png" alt="photo-student"/></div>
                        <div class="personal-information-student">
                            <h3>Natasha</h3>
                            <h4>Soleimani</h4>
                            <p>23 Ans</p>
                            <p>Lyon 1 er France</p>
                        </div>
                    </div>
                    <div class="description-student">
                        <div class="description-student-principal">
                            <div class="description-student-1">
                                <p>Cherche stage</p>
                                <p> Du 17 Janvier au 17 Mars 2021</p>
                            </div>
                            <div class="description-student-2">
                                <h4>DESCRIPTION</h4>
                            </div>
                            <div class="description-student-3">
                                <p>Jelly beans shortbread wafer cookie lemon drops powder I love. Donut ice cream chocolate bar carrot cake cheesecake donut. Shortbread icing cotton candy lemon drops caramels sweet roll dragée marzipan halvah. Pie soufflé
                                    topping I love cake. Cookie muffin carrot cake soufflé croissant oat cake powder chocolate cake. Candy apple pie danish tart fruitcake jelly chocolate cake.</p>
                            </div>
                        </div>
                        <div class="attachments-student">
                            <div class="adopte-single-student-container">
                                <Link class="adopte-single-student-button" to="#">Adopter</Link>
                                <Link class="adopte-single-student-button" to="#">Contacter</Link>
                            </div>
                            <div class="attachments-student-files">
                                <Link to="#"><img src="assets/svg/icon-cv.svg" alt="cv-logo" class="cv-lm-svg"/></Link>
                                <Link to="#"><img src="assets/svg/icon-lm.svg" alt="lm-logo" class="cv-lm-svg"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="secondpart">

                    <h4>Ils cherchent aussi dans le même domaine</h4>
                    <div class="pic-ctn">
                        <img src="assets/img/avatar1.png" alt="" class="pic"/>
                        <img src="assets/img/avatar1.png" alt="" class="pic"/>
                        <img src="assets/img/avatar1.png" alt="" class="pic"/>
                        <img src="assets/img/avatar1.png" alt="" class="pic"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Student
