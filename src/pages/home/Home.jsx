import './home.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Home () {
/*   const { context, dispatch } = useContext(Context)
  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch]) */
  return (
    <div >
         
    <div className="container-fluid container-relative" id="img-header-container">
        <img src="assets/img/6.jpg" className="img-fluid" id="img-header" alt="header-picture"/>
        <div className="slogan-text">
            <p>Vous êtes in <b>THE RIGHT PLACE</b> pour trouver des profils appropriés à votre entreprise</p>
        </div>
    </div>

    <div className="pic-ctn">
        <img src="assets/img/avatar1.png" alt="" className="pic"/>
        <img src="assets/img/avatar1.png" alt="" className="pic"/>
        <img src="assets/img/avatar1.png" alt="" className="pic"/>
        <img src="assets/img/avatar1.png" alt="" className="pic"/>
    </div>
    <div className="heading text-center">
        <a href="profils.html" className="a-btn">
            <span className="a-btn-text">Voir les profils</span>
            <span className="a-btn-slide-text">Now!</span>
            <span className="a-btn-icon-right"><span></span></span>
        </a>
    </div>
    </div>
  )
}

export default Home
