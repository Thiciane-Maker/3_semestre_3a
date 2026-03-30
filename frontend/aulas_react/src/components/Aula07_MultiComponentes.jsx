const Aula07_MultiComponentes = () => {
    return (
        <div>
            <p>Meu componente padrão</p>
            <MeuComponenteNomeado1 />
            <MeuComponenteNomeado2 />
        </div>
    )
}

export const MeuComponenteNomeado1 = () => {
    return (
        <p>Meu componente nomeado 1</p>
    )
}

export const MeuComponenteNomeado2 = () => {
    return (
        <p>Meu componente nomeado 2</p>
    )
}

export default Aula07_MultiComponentes;