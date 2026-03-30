import { useEffect, useState } from "react"
import Aula13_Produto from "./Aula13_Produto"

const Aula13_CRUD_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [linkProduto, setLinkProduto] = useState('')
    const [linkImagem, setLinkImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratis, setFreteGratis] = useState(false)
    
    const [alterando, setAlterando] = useState(false) 
    const [id, setId] = useState(null)

    function botaoAlterar(produto) {
        setNome(produto.nome)
        setPreco(produto.preco)
        setLinkImagem(produto.link_imagem)
        setLinkProduto(produto.link_produto)
        setCategoria(produto.categoria)
        setFreteGratis(!!produto.frete)
        setId(produto.id_produto)
        setAlterando(true)
    }

    async function botaoExcluir(id_produto) {
        if (!window.confirm("Você tem certeza que deseja excluir?")) return

        try {
            const resposta = await fetch(`http://10.130.42.68:3001/produtos/${id_produto}`, {
                method: 'DELETE'
            })

            if (!resposta.ok) {
                throw new Error('Erro ao excluir: ' + resposta.statusText)
            }

            await buscarDados()

        } catch (erro) {
            console.error('Erro ao excluir produto', erro)
        }
    }

    async function botaoSalvar() {

        if (!nome || !preco) {
            alert("Preencha nome e preço!")
            return
        }

        const produto = {
            nome,
            preco: Number(preco),
            link_produto: linkProduto,
            link_imagem: linkImagem,
            categoria,
            frete: freteGratis
        }

        try {
            const url = alterando
                ? `http://10.130.42.68:3001/produtos/${id}`
                : 'http://10.130.42.68:3001/produtos'

            const metodo = alterando ? 'PUT' : 'POST'

            const resposta = await fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            })

            if (!resposta.ok) {
                const erroTexto = await resposta.text()
                throw new Error(erroTexto)
            }

            await buscarDados()
            limparCampos()

        } catch (erro) {
            console.error('Erro ao salvar produto', erro)
        }
    }

    function limparCampos() {
        setNome('')
        setPreco('')
        setLinkProduto('')
        setLinkImagem('')
        setCategoria('')
        setFreteGratis(false)
        setAlterando(false)
        setId(null)
    }

    async function buscarDados() {
        try {
            const resposta = await fetch('http://10.130.42.68:3001/produtos')
            const dados = await resposta.json()
            setListaProdutos(dados)
        } catch (erro) {
            console.error("Erro ao buscar produtos", erro)
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div>
            <h1>Cadastro de Produtos</h1>

            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={estilos.input}
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    style={estilos.input}
                />

                <input
                    type="text"
                    placeholder="Link do Produto"
                    value={linkProduto}
                    onChange={(e) => setLinkProduto(e.target.value)}
                    style={estilos.input}
                />

                <input
                    type="text"
                    placeholder="Link da foto"
                    value={linkImagem}
                    onChange={(e) => setLinkImagem(e.target.value)}
                    style={estilos.input}
                />

                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    style={estilos.input}
                >
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletrônicos'>Eletrônicos</option>
                    <option value='Brinquedos'>Brinquedos</option>
                    <option value='Livros'>Livros</option>
                </select>

                <label>
                    <input
                        type="checkbox"
                        checked={freteGratis}
                        onChange={(e) => setFreteGratis(e.target.checked)}
                    />
                    Frete Grátis
                </label>

                <button onClick={botaoSalvar} style={estilos.botao}>
                    {alterando ? "Alterar Produto" : "Adicionar Produto"}
                </button>

                <hr />

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {listaProdutos.map((produto) => (
                        <Aula13_Produto
                            key={produto.id_produto}
                            produto={produto}
                            botaoExcluir={botaoExcluir}
                            botaoAlterar={botaoAlterar}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const estilos = {
    input: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
        cursor: "pointer"
    }
}

export default Aula13_CRUD_Produtos