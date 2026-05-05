import { Link, useParams } from 'react-router-dom';

function Filme() {
  const { nome } = useParams();

  return (
    <div>
      <h1>Página de Detalhes do Filme</h1>
      
        <h2>Filme selecionado: {nome}</h2>
          
      <br />
      <Link to="/principal">Voltar para principal</Link>
    </div>
  );
}

export default Filme;