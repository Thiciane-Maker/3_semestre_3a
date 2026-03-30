
const Aula04_IMC = ({nome, peso, altura, cor}) =>{
    // const nome = 'paulo'; 
    // const peso = 12;
    // const altura = 1.23;
    const imc = peso / (altura * altura);

    return(
        <div>
           <h3>Calculadora de IMC</h3>
           <p style={{color: cor}}>ola {nome}</p>
           <p>Altura: {altura}m /peso {peso}kg</p>
           <p>Seu IMC é: {imc.toFixed(1)}</p>

           <hr />
        </div>
    )
}

export default Aula04_IMC