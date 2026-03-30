import { useState } from "react";

const Aula06_Placar = () => {

  const [timeA, setTimeA] = useState(0);
  const [timeB, setTimeB] = useState(0);

  const [basquete1, setBasquete1] = useState(0);
  const [basquete2, setBasquete2] = useState(0);

 
  const diminuirA = () => {
    if (timeA > 0) {
      setTimeA(timeA - 1);
    }
  };

  const diminuirB = () => {
    if (timeB > 0) {
      setTimeB(timeB - 1);
    }
  };

 
  const diminuirBasquete1 = () => {
    if (basquete1 > 0) {
      setBasquete1(basquete1 - 1);
    }
  };

  const diminuirBasquete2 = () => {
    if (basquete2 > 0) {
      setBasquete2(basquete2 - 1);
    }
  };

  return (
    <div>

      <h2>1. Placar</h2>
      <div>
        <p>Time A: {timeA}</p>
        <button onClick={() => setTimeA(timeA + 1)}>Aumentar</button>
        <button onClick={diminuirA}>Diminuir</button>
      </div>
      <div>
        <p>Time B: {timeB}</p>
        <button onClick={() => setTimeB(timeB + 1)}>Aumentar</button>
        <button onClick={diminuirB}>Diminuir</button>
      </div>

      <hr />

      <h2>2. Placar de Basquete</h2>
      <div>
        <p>Time 1: {basquete1}</p>
        <button onClick={() => setBasquete1(basquete1 + 1)}>+1</button>
        <button onClick={() => setBasquete1(basquete1 + 2)}>+2</button>
        <button onClick={() => setBasquete1(basquete1 + 3)}>+3</button>
        <button onClick={diminuirBasquete1}>Diminuir</button>
      </div>

      <div>
        <p>Time 2: {basquete2}</p>
        <button onClick={() => setBasquete2(basquete2 + 1)}>+1</button>
        <button onClick={() => setBasquete2(basquete2 + 2)}>+2</button>
        <button onClick={() => setBasquete2(basquete2 + 3)}>+3</button>
        <button onClick={diminuirBasquete2}>Diminuir</button>
      </div>
    </div>
  );
};

export default Aula06_Placar;