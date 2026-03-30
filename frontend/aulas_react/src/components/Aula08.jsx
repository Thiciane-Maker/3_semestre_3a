import { estilos } from "../styles/Estilos"

const Aula08 = () => {
    return(
       <div style={estilos.cardAula}>
            <h2>Aula 08 - Jogo</h2>

            <a 
              href="https://jogo-numero-secreto-7fnvi1pko-thicianes-projects-75e8f7f4.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
                <p>Jogo Número Secreto</p>
            </a>

            <img 
               
                src="/img/ia.png" 
                style={estilos.imagem}
                alt="Imagem IA"
            />
       </div>
    )
}

export default Aula08;