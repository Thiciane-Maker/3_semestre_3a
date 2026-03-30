import { useState } from "react";
import { estilos } from "../styles/Estilos";

const BuscaCep = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState(null);

  async function buscarCep() {
    setErro(null);
    
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("Por favor, digite um CEP válido com 8 dígitos.");
      return;
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado.");
        setEndereco(null);
      } else {
        setEndereco(dados);
      }
    } catch (err) {
      setErro("Erro ao conectar com o serviço de busca.");
    }
  }

  return (
    <div style={estilos.cardAula}>
      <h2>Busca de Endereço</h2>
      <p>Digite o CEP para encontrar a localização:</p>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Ex: 01001000"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          maxLength={9}
        />
        <button onClick={buscarCep} style={{ marginLeft: "10px" }}>
          Buscar Endereço
        </button>
      </div>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {endereco && (
        <div style={{ textAlign: "left", marginTop: "10px", borderTop: "1px solid #ccc" }}>
          <p><strong>Rua:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade} - {endereco.uf}</p>        </div>
      )}
    </div>
  );
};

export default BuscaCep;