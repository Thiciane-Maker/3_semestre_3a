const Aula13_Usuario = ({ usuario, onExcluir, botaoAlterar }) => {
    // Garantindo que pegamos o ID correto, independente de como vem do banco
    const id = usuario.id_usuario || usuario.id

    return (
        <div style={estilos.cardProduto}>
            <h2 style={estilos.titulo}>{usuario.nome}</h2>
            <h2 style={estilos.titulo}>{usuario.email}</h2>

            {/* Novo botão de Alterar */}
            <button 
                style={{ ...estilos.botao, marginRight: 5 }}
                onClick={() => botaoAlterar(usuario)}
            >
                Alterar
            </button>

            <button 
                style={estilos.botao}
                onClick={() => onExcluir(id)}
            >
                Excluir
            </button>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250,
        textAlign: 'center'
    },

    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },

    botao: {
        background: "#e30613",
        color: "white",
        border: "none",
        padding: "8px",
        borderRadius: 5,
        marginTop: 10,
        cursor: "pointer",
        fontWeight: "bold"
    }
};

export default Aula13_Usuario