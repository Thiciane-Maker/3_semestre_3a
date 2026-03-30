import {Link, useNavigate} from 'react-router-dom'
import { estilos } from "../styles/Estilos"

const Aula14 = () => {
    const navigate = useNavigate();
    return(
       <div style={estilos.cardAula}>
        <h2>Aula 14 - Introduçao ao React- Navegaçao em react</h2>
        <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
      <hr />

      <h3>Navegaçao com Link</h3>
      <Link to='/sobre'>Sobre</Link>
      <br />
      <Link to='/'>Página Inicial</Link>
      <br />
      <Link to='/blablabla'>Pagina Não Encontrada</Link>
      <br />
      <h3>Navegaçao com programa useNavigate</h3>
      <button onClick={() => navigate('/sobre')}>Ir para Sobre</button>
       <br />
       <h3>Rotas dinamicas / rotas com Parametros (useParams)</h3>
       <button onClick={() => navigate('/perfil/thici')}>Perfil thici</button>
       <button onClick={() => navigate('/perfil/ana')}>Perfil ana</button>
       


       </div>
    )
}

export default Aula14