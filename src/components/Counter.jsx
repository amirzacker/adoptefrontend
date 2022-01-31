import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {counter}<br/>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Counter;