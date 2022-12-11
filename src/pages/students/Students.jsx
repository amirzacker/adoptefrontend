import './students.css'
import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { Context } from '../../context'
import classnames from 'classnames'

function Students () {
/*   const { context, dispatch } = useContext(Context)
  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch]) */
  return (
    <div>
        <section className="content" id="profiletudiants">
        <div className="container">
            <div className="row rowcards">
                <Link to="#">
                    <h2>Web Developer students</h2>
                </Link>
                <div className="card" >
                    <Link to="/student"> <img className="card-img-top" src="assets/img/avatar1.png" alt=""/></Link>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar2.webp" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar3.png" alt="" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar4.webp" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="content" id="profiletudiants2">
        <div className="container">
            <div className="row rowcards">
                <Link to="">
                    <h2>Business students</h2>
                </Link>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar1.png" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar2.webp" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar3.png" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top" src="assets/img/avatar4.webp" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </div>
  )
}

export default Students
