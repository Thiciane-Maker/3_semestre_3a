import { useState } from "react"
import { estilos } from './GameEstilos'

const Game = () => {

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1
    }

    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero)
    const [chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('Adivinhe um número entre 1 e 100')
    const [tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function botaoChutar() {
        const numero = Number(chute)


        if (numero === numeroSecreto) {
            setMensagem(`DIVOU! Você descobriu em ${tentativas} tentativas!`)
            setJogoFinalizado(true)
        } 
        else if (numero < numeroSecreto) {
            setMensagem(`Você chutou ${numero}. O número secreto é MAIOR!`)
            setTentativas(tentativas + 1)
        } 
        else {
            setMensagem(`Você chutou ${numero}. O número secreto é MENOR!`)
            setTentativas(tentativas + 1)
        }

        setChute('')
    }

    function novoJogo() {
        setNumeroSecreto(sortearNumero())
        setMensagem('Adivinhe um número entre 1 e 100')
        setTentativas(1)
        setChute('')
        setJogoFinalizado(false)
    }

    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo Número Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem}</p>
                    </div>

                    <input 
                        type="number" 
                        style={estilos.chute}
                        onChange={(event) => setChute(event.target.value)} 
                        value={chute}
                        disabled={jogoFinalizado}
                    />

                    <div style={estilos.botoes}>
                        <button 
                            style={estilos.botao} 
                            onClick={botaoChutar}
                            disabled={jogoFinalizado}
                        >     Chutar
                        </button>

                        <button 
                            style={estilos.botao}
                            onClick={novoJogo}
                        >
                            Novo jogo
                        </button>
                    </div>

                </div>

                <img 
                    src="./img/ia.png" 
                    style={estilos.imagem} 
                    alt="Imagem IA"
                />
            </div>
        </section>
    )
}

export default Game