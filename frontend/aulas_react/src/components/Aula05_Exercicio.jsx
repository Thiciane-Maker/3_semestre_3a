import { estilos } from "../styles/Estilos"

const Aula05_Exercicio = () => {

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
        '#7def'  
         '#77ddee' 
        event.target.style.backgroundColor = '#7def';
    }

    function alterarCor(event) {
        if (event.key === 'a') {
            event.target.style.backgroundColor = '#50317a'
        } else if (event.key === 'm') {
            event.target.style.backgroundColor = '#ecdbfe'
        } else if (event.key === 'o') {
            event.target.style.backgroundColor = '#b279ce'
        } else if (event.key === 'r') {
            event.target.style.backgroundColor = '#86758e'
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 05 - Atividades</h2>
            <hr />

            <p></p>
            <p onClick={botaoClique} style={{cursor: 'pointer'}}>Clique Aqui</p>

            <p onClick={() => alert('click 2')} style={{cursor: 'pointer'}}>Clica plsssss</p>

            <hr />

            <input type='text' placeholder="Digite algo..." onChange={alteracao} />

            <hr />

            <p>Evento onMouseEnter / onMouseLeave</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>

            <hr />

            <p>Pressione uma tecla para mudar a cor</p>

            <input
                type="text"
                onKeyDown={alterarCor}
                placeholder="Digite: a, m, o, r"
            />

        </div>
    )
}

export default Aula05_Exercicio