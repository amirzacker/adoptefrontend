import { useState, useCallback } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0)

  const [historique, setHistorique] = useState([])
  const histoCounter = useCallback((value) => {
    setHistorique([...historique, counter])
    setCounter(value)
  }, [historique, counter])

  return (
    <div>
      {counter} : Le compteur est {counter % 2 ? 'impair' : 'pair'}.<br />
      <button onClick={() => histoCounter(counter - 1)}>-</button>
      <button onClick={() => histoCounter(counter + 1)}>+</button>
      <br />
      {historique.map((histo, i) => <div key={i}>valeur {i} : {histo}</div>)}
    </div>
  );
}

export default Counter;