import { estilos } from "../styles/Estilos"
import Aula11_CadastroProdutos from "./Aula11_CadastroProdutos";
import Aula11_Produto from "./Aula11_Produtos";

const Aula11 = () => {
  return (
    <div style={estilos.cardAula}>
      <h2>Aula 11 - Cadastro de produtos</h2>
      <h3>Criando uma lista de produtos e armazenando os dados localmente</h3>
      <hr />
      <Aula11_CadastroProdutos />
      <Aula11_Produto />
    </div>
  );
};

export default Aula11;