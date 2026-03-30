import { useState } from "react";

const Aula07_Perfil = ({ foto, nome }) => {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <div style={estilos.fundo}>
      <img
        src={foto}
        alt={nome}
        style={estilos.imagem}
      />

      <h2 style={estilos.nome}>{nome}</h2>

      <button
        onClick={() => setSeguindo(!seguindo)}
        style={{
          ...estilos.botao,
          backgroundColor: seguindo ? "#dd5ea4" : "#e918a4",
        }}
      >
        {seguindo ? "Deixar de seguir" : "Seguir"}
      </button>
    </div>
  );
};

const estilos = {
  imagem: {
    borderRadius: "50%",
    width: 120,
    height: 120,
  },
  fundo: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
    width: "250px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    border: "1px solid #ddd",
  },
  botao: {
    borderRadius: 8,
    border: "none",
    minWidth: 140,
    minHeight: 40,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    color: "#fff",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  nome: {
    fontSize: 22,
    margin: 0,
  },
};

export default Aula07_Perfil;