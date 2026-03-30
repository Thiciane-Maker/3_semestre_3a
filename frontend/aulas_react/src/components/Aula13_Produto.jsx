const Aula13_Produto = ({ produto, botaoExcluir, botaoAlterar }) => {
    const id = produto.id_produto || produto.id

    return (
        <div style={estilos.cardProduto}>
            <img src={produto.link_imagem} alt="" style={estilos.imagem} />

            <h2 style={estilos.titulo}>{produto.nome}</h2>

            <p style={estilos.preco}>
                R$ {Number(produto.preco || 0).toFixed(2)}
            </p>

            <p>{produto.categoria}</p>

            {produto.freteGratis && <p>Frete Grátis</p>}

            <a href={produto.link_produto} style={estilos.botao}>
                Ver Produto
            </a>

            <button
                style={{ ...estilos.botao, marginLeft: 5 }} 
                onClick={() => botaoAlterar(produto)}
            >
                Alterar
            </button>

            <button
                style={{ ...estilos.botao, marginLeft: 5 }}
                onClick={() => botaoExcluir(id)}
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
    imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },
    titulo: {
        fontSize: 14,
        color: "#333"
    },
    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },
    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold",
        border: "none",
        cursor: "pointer"
    }
}

export default Aula13_Produto