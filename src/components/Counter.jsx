import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {counter} : Le compteur est {counter % 2 ? 'impair' : 'pair'}.<br />
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Counter;