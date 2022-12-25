import './navbar.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Navbar () {
  const { context, dispatch } = useContext(Context)
  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch])
  return (
    <div>  
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <h1>
                    <Link to="/"><img src="/assets/logos/logodef.svg" alt="Adopte-logo" id="adopte-logo"/></Link>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">

                        <li className="nav-item navbarhover">
                            <Link className="link link--thebe" to="/">Home</Link>
                        </li>

                        <li className="nav-item navbarhover">
                            <Link className="link link--thebe" to="/students">Students</Link>
                        </li>
                        <li className="nav-item navbarhover">
                            <Link className="link link--thebe" to="/contact">Contactez Nous</Link>
                        </li>
                        <li className="nav-item navbarhover">
                            <div className="right-menu">
                                <Link className="link link--thebe " to="#">Domaine d'études</Link>
                                <div className="dropdown-menu-domaine">
                                    <Link to="#">Informatique</Link>
                                    <Link to="#">Commerce et management</Link>
                                    <Link to="#">Santé</Link>
                                    <Link to="#">Restauration</Link>
                                    <Link to="#">Logistique</Link>
                                    <Link to="#">Art et spectacles</Link>
                                    <Link to="#">Autres domaines</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item navbarhover">
                            <div className="input-group search-case">
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-search">
                                  <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </li>
                        <li className="nav-item nav-item-login  glow-on-hover">
                            <div className="login-container1">
                                <Link className="nav-link nav-login" to="/login">Connexion</Link>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </header>
    <div className="container login-responsive">
        <div className="login-container">
            <Link className="nav-link nav-login glow-on-hover2" to="/login">Connexion</Link>

        </div>
    </div>

    </div>
  )
}

export default Navbar
