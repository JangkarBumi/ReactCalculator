import React, { useState } from 'react';
import '../styles/App.scss';
import '../styles/Button.scss';
import '../styles/ButtonPanel.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    let data = calculate({ total, next, operation }, buttonName);

    setNext(data.next);
    setOperation(data.operation);
    setTotal(data.total);
  };

  return (
    <div id='container'>
      <Display result={next ? next : total} />

      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
