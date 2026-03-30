import { useState } from "react";
import { estilos } from "../styles/Estilos.jsx";
import Aula09_Numero from "./Aula09_Numero.jsx";
import Aula09_ListaNomes from "./Aula09_ListaNome.jsx"; 

const Aula09 = () => {
    const [numerosSorteados, setNumerosSorteados] = useState([10, 43, 28, 2]);

    function botaoSortear() {
        const novoNumero = Math.floor(Math.random() * 60) + 1;
        setNumerosSorteados([...numerosSorteados, novoNumero]);
        console.log(novoNumero);
    }

    function botaoExcluir(nr) {
        const listaAtualizada = numerosSorteados.filter(
            (numero) => numero !== nr
        );
        setNumerosSorteados(listaAtualizada);
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula09 - Listas em React</h2>
            <h3>Exibindo conteúdos dinamicamente com Listas</h3>
            <hr />

            {/* Seção do Sorteador */}
            <button onClick={botaoSortear}>Sortear</button>
            <p>Lista de números sorteados:</p>

            {numerosSorteados.map((numero, index) => (
                <Aula09_Numero 
                    key={index} 
                    numero={numero} 
                    index={index + 1}
                    excluir={() => botaoExcluir(numero)}
                />
            ))}

            <hr />

            <h2>Exercício: Lista de Presença</h2>
            <Aula09_ListaNomes />
            
        </div>
    );
};

export default Aula09;