import { estilos } from "../styles/Estilos"
import Aula05_Exercicio from "./Aula05_Exercicio"

const Aula05 = () => {

    function botaoClique() {
        alert('click!');
        console.log('Evento onClick');
    }

    function alteracao(event) {
        alert(event.target.value);
    }

    function entradaMouse(event) {
        console.log('Mouse entrou')
        event.target.style.backgroundColor = '#7db5ff';
    }

    function saidaMouse(event) {
        console.log('Mouse saiu')
        event.target.style.backgroundColor = '#7def';
    }

    function alterarCor(event) {
        if (event.key === 'a') {
            event.target.style.backgroundColor = '#8326fc'
        } else if (event.key === 'v') {
            event.target.style.backgroundColor = '#01ff38'
        } else if (event.key === 'c') {
            event.target.style.backgroundColor = '#fcff37'
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 05 - Eventos de um componente</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações</h3>
            <hr />

            <p>Evento onClick - Clique do usuário em qualquer elemento HTML</p>
            <p onClick={botaoClique}>Clique Aqui</p>

            <p onClick={() => alert('click 2')}>Este é o outro parágrafo clicável, mas com arrow function</p>

            <hr />

            <p onDoubleClick={() => alert('Duplo clique')}>Este é um parágrafo que recebe um clique duplo</p>
            <hr />
            <p>Evento onChange - Sempre que um campo de entrada é alterado</p>

            <input type='text' placeholder="Digite algo..." onChange={alteracao} />

            <select onChange={alteracao}>
                <option value="1 A">1 ano A</option>
                <option value="2 A">2 ano A</option>
                <option value="3 A">3 ano A</option>
                <option value="3 B">3 ano B</option>
            </select>
            <hr />

            <p>Evento onMouseEnter / onMouseLeave</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse</p>

            <hr />

            <p>Evento onKeyDown - Aciona ao pressionar uma tecla</p>

            <input
                type="text"
                onKeyDown={alterarCor}
                placeholder="Digite: a, v ou c"
            />
            
            <br /><br />
            <hr />
            
            <Aula05_Exercicio />

        </div>
    )
}

export default Aula05