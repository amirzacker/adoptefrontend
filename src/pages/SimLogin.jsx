import React from 'react';
import propTypes from 'prop-types';

function SimLogin({ setUser }) {
  return (
    <div>
      <button onClick={() => setUser('Eva')}>Eva</button>
      <button onClick={() => setUser('Aude')}>Aude</button>
    </div>
  );
}

SimLogin.propTypes = {
  setUser: propTypes.func.isRequired
}

export default SimLogin;