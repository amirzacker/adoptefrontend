import './footer.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Footer () {
 /*  const { context, dispatch } = useContext(Context)
  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch]) */
  return (
    <footer className="footer">
        <div className="container" id="footersize">
            <div className="rowfooter">
                <div className="footer-col">
                    <h4>Adopteunetudiant</h4>
                    <ul>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Sitemap</h4>
                    <ul>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum dolor.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                        <li>
                            <Link to="#">Lorem, ipsum.</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <Link to="error404.html"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="error404.html"><i className="fab fa-twitter"></i></Link>
                        <Link to="error404.html"><i className="fab fa-linkedin-in"></i></Link>
                        <Link to="error404.html"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
