import { estilos } from "../styles/Estilos";
import { useState } from "react";
import Aula06_contador from "./Aula06_Contador";
import Aula06_Placar from "./Aula06_Placar";

const Aula06 = () => {
  const [nome, setNome] = useState("Thiciane");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [visivel, setVisivel] = useState(false);

  function botaoLimpar() {
    setNome("");
    setEndereco("");
    setTelefone("");
  }

  return (
    <div style={estilos.cardAula}>
      <h2>Aula 06 - useState - Estado de um componente</h2>
      <h3>
        O hook useState adiciona estado a componentes funcionais, permitindo
        atualizar valores dinamicamente
      </h3>

      <hr />

      <input
        type="text"
        placeholder="Nome"
        onChange={(event) => setNome(event.target.value)}
        value={nome}
      />

      <input
        type="text"
        placeholder="Endereço"
        onChange={(event) => setEndereco(event.target.value)}
        value={endereco}
      />

      <input
        type="text"
        placeholder="Telefone"
        onChange={(event) => setTelefone(event.target.value)}
        value={telefone}
      />

      <p>
        Olá, {nome}, você mora em {endereco}, seu número de telefone é {telefone}
      </p>

      <button onClick={botaoLimpar}>Limpar</button>

      <hr />

      <button onClick={() => setVisivel(!visivel)}>
        {visivel == true ? <p>Ocultar saldo</p> : <p>Mostrar saldo 👀</p>}
      </button>

      {visivel  ? <p>R$ 3.890 🔒</p> : <p>R$ *,***</p>}

      <hr />

      <Aula06_contador />
      <Aula06_Placar/>
      
    </div>
  );
};

export default Aula06;
