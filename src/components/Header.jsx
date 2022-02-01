import React, { useState, useEffect, useCallback } from 'react';
import logo from '../logo.svg'

function Header(props) {
  const [user, setUser] = useState()

  useEffect(() => {
    setTimeout(() => setUser('Stéphane'), 1000)
  }, [])

  const setUserEva = useCallback(() => {
    if (user !== 'Eva') {
      setUser('Eva')
    }
  }, [user])

  const setUserAude = useCallback(() => setUser('Aude'), [])

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mt-1" />
            MOOC
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <div className="nav-link">Lien 1</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Lien 2</div>
            </li>
          </ul>
          <div className="navbar-text">
            Bienvenue {user} !
          </div>
        </div>
      </nav>
      <div>
        <button onClick={setUserEva}>Eva</button>
        <button onClick={setUserAude}>Aude</button>
      </div>
    </div>
  );
}

export default Header;