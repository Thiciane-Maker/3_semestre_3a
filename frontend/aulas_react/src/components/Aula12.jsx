import { useState, useEffect } from "react"; 
import { estilos } from "../styles/Estilos";
import Aula12_CEP from "./Aula12_CEP";

const Aula12 = () => {
  const [dogImagem, setDogImagem] = useState('');

  async function buscarDados() {
    try {
      const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
      const dados = await resposta.json();
      setDogImagem(dados.message);
    } catch (erro) {
      console.error('Erro ao buscar dados API:', erro.message);
    }
  }

  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <div style={estilos.cardAula}>
      <h2>Aula 12 - Consumo de APIs</h2>
      <h3>Aprendendo a utilizar APIs em React</h3>
      <Aula12_CEP/>
      <hr />
      <div>
        <p>Imagem de cachorro da API Dog CEO</p>
        {dogImagem && <img src={dogImagem} alt="Cachorro aleatório" width={300} />}
        <br />
        <button onClick={buscarDados}>Nova Foto</button>
      </div>
    </div>
  );
};

export default Aula12;