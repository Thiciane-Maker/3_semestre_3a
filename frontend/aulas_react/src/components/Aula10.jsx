import React, { use, useEffect, useState } from "react";
import { estilos } from "../styles/Estilos";

const Aula10 = () => {
    const [contador, setContador] = useState(0);

    function botaoContador() {
        const novoContador = contador + 1;
        setContador(novoContador);
        localStorage.setItem('valor_contador', JSON.stringify(novoContador));
    }



    
    useEffect(() => {
        console.log(contador);
        document.title = `Contador: ${contador}`;
    },[contador]); 


    useEffect(() => {
        const conradorSalvo = localStorage.getItem('valor_contador');
        setContador(JSON.parse(conradorSalvo));
    }, [] )

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo o hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />

            <h2>Você clicou {contador} vezes</h2>
            <button onClick={botaoContador}>Clique aqui</button>
        </div>
    );
};

export default Aula10;