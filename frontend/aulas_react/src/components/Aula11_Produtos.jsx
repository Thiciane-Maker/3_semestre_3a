import React from 'react';

const Aula11_Produtos = ({ ProdutoAtual }) => {
    if (!ProdutoAtual) return null;

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: 10,
            width: 250,
            textAlign: 'center',
            backgroundColor: '#fff',
            borderRadius: 8
        }}>
            <img 
                src={ProdutoAtual.linkImagem || 'https://via.placeholder.com/150'} 
                style={{ height: 150, width: "100%", objectFit: "contain" }} 
                alt="produto"
            />
            <h2 style={{ fontSize: 16 }}>{ProdutoAtual.nomeProduto}</h2>
            <p style={{ fontSize: 20, fontWeight: "bold", color: "#e30613" }}>
                R$ {Number(ProdutoAtual.preco).toFixed(2)}
            </p>
            {ProdutoAtual.freteGratis && <p style={{ color: "green", fontWeight: "bold" }}>🚚 Frete Grátis</p>}
            <a href={ProdutoAtual.linkProduto} target="_blank" rel="noreferrer" style={{
                display: "block",
                background: "#e30613",
                color: "white",
                textDecoration: "none",
                padding: "8px",
                borderRadius: 5,
                marginTop: 10
            }}>Ver Produto</a>
        </div>
    );
};

export default Aula11_Produtos;