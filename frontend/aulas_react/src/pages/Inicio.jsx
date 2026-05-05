import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h2>Bem Vindo</h2>
      <Link to="/Detalhes">Ver Detalhes</Link>
      

    </div>
  );
}

export default Inicio;