import { useEffect, useState } from "react"
import Aula13_Usuario from "./Aula13_Usuario"

const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const [alterando, setAlterando] = useState(false)
    const [id, setId] = useState(null)

    function botaoAlterar(usuario) {
        setNome(usuario.nome)
        setEmail(usuario.email)
        setSenha(usuario.senha || '') 
        setId(usuario.id_usuario || usuario.id)
        setAlterando(true)
    }

    async function botaoSalvar() {
        if (!nome || !email) {
            alert("Preencha pelo menos nome e email!")
            return
        }

        const usuario = {
            nome,
            email,
            senha
        }

        try {
            const url = alterando
                ? `http://10.130.42.68:3001/usuarios/${id}`
                : 'http://10.130.42.68:3001/usuarios'

            const metodo = alterando ? 'PUT' : 'POST'

            const resposta = await fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            if (!resposta.ok) {
                throw new Error('Erro ao salvar')
            }

            await buscarDados()
            limparCampos()

        } catch (erro) {
            console.error('Erro ao salvar usuário', erro)
        }
    }

    function limparCampos() {
        setNome('')
        setEmail('')
        setSenha('')
        setAlterando(false)
        setId(null)
    }

    async function buscarDados() {
        try {
            const resposta = await fetch('http://10.130.42.68:3001/usuarios')
            const dados = await resposta.json()
            setListaUsuarios(dados)
        } catch (erro) {
            console.error('Erro ao buscar usuários', erro)
        }
    }

    async function botaoExcluir(id_usuario) {
        if (!window.confirm("Você tem certeza que deseja excluir?")) return

        try {
            const resposta = await fetch(`http://10.130.42.68:3001/usuarios/${id_usuario}`, {
                method: 'DELETE'
            })

            if (!resposta.ok) {
                throw new Error('Erro ao excluir')
            }

            await buscarDados()

        } catch (erro) {
            console.error('Erro ao excluir usuário', erro)
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div>
            <h1>Cadastro de Usuários</h1>

            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={estilos.input}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={estilos.input}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    style={estilos.input}
                />

                <button onClick={botaoSalvar} style={estilos.botao}>
                    {alterando ? "Alterar Usuário" : "Adicionar Usuário"}
                </button>

                <hr />

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {listaUsuarios.map((usuario) => (
                        <Aula13_Usuario
                            key={usuario.id_usuario || usuario.id}
                            usuario={usuario}
                            onExcluir={botaoExcluir}
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

export default Aula13_CRUD_Usuarios