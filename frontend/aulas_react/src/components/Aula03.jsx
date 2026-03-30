import '../styles/Aula03.css'
import { estilos } from '../styles/Estilos.jsx'
import Aula03_Login from './Aula03_Login'

const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 03 - Componentes e estilização</h2>
            <h3>Criação de componentes reutilizáveis e suas estilizações</h3>
            <p>Aprendendo a criar e reutilizar componentes e estilização para melhorar a UI</p>
            
            <hr />
            <p className='texto'>CSS Externo</p>
            <p className='texto'>A forma mais simples e clássica de estilização por CSS</p>

            <hr />
            <p style={{color:'blue', fontWeight:'bold'}}>Estilização inline</p>
            <p style={{fontStyle:'italic'}}>Estilos aplicados diretamente nos elementos como objetos</p>
      
            <hr />
            
            <p style={estilos.tituloModulo}>Objeto de Estilo (CSS Modules simulado)</p>
            <p style={estilos.descricaoModulo}>CSS modularizado e a forma mais comum para mobile</p>

            <hr />
            
            <h3>Exercício: Login</h3>
            <Aula03_Login />

        </div>
    )
}

export default Aula03