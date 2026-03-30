import { useState } from "react";

const Aula06_contador = () => {
  const [contador, setContador] = useState(0);

  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <p>Valor: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>  Aumentar</button>

      <button onClick={diminuir}> Diminuir </button>
    </div>
  );
};

export default Aula06_contador;
