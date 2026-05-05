import { Link, useNavigate } from 'react-router-dom'
import { estilos } from "../styles/Estilos"

const Aula14 = () => {
  const navigate = useNavigate();

  return (
    <div style={estilos.cardAula}>
      <h2>Aula 14 - Introdução ao React - Navegação em React</h2>
      <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
      <hr />

      <h3>Navegação com Link</h3>

      <Link to="/sobre">Sobre</Link>
      <br />

      <Link to="/">Página Inicial</Link>
      <br />

      <Link to="/blablabla">Página Não Encontrada</Link>
      <br />

      <Link to="/contato">Contato</Link>
      <br />

      <Link to="/principal">Principal</Link>
      <br />

      <Link to="/detalhes">Detalhes</Link>
      <br />
      

      <h3>Navegação com useNavigate</h3>

      <button onClick={() => navigate('/sobre')}>
        Ir para Sobre
      </button>

      <br />

      <h3>Rotas dinâmicas (useParams)</h3>

      <button onClick={() => navigate('/perfil/thici')}>
        Perfil thici
      </button>

      <button onClick={() => navigate('/perfil/ana')}>
        Perfil ana
      </button>

      <br />

      <button onClick={() => navigate('/filme/barbie')}>
        Filme
      </button>

    </div>
  )
}

export default Aula14