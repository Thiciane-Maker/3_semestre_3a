import { useState } from 'react';
import { enderecoServidor } from '../utils';
import { estilosLogin as estilos } from '../styles/Aula03_Login_Estilos';
import { useNavigate } from 'react-router-dom';

const Aula15_Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const botaoEntrar = async () => {
        try {
            if (email === '' || senha === '') {
                throw new Error('Por favor, preencha todos os campos.');
            }

            const dadosLogin = {
                email: email,
                senha: senha
            };

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                console.log('Login realizado com sucesso', dados);
                setMensagem('Login realizado com sucesso!');
                localStorage.setItem('UsuarioLogado', JSON.stringify(dados));
                navigate('/inicio'); // Redireciona para o inicio após login
            } else {
                setMensagem('Erro ao realizar login. Por favor, tente novamente.');
                console.log('Erro ao realizar login:', dados);

            }

        } catch (erro) {
            console.error('Erro ao tentar fazer login:', erro);
            setMensagem(erro.message);
        }
    };

    const handleSair = () => {
        localStorage.removeItem('UsuarioLogado');
        setMensagem('Usuário deslogado.');
    };

    return (
        <div style={estilos.loginConteudo}>
            <div style={estilos.loginCaixa}>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU9uH4-kpTYm4GxBN9IzsVD4WRLpYhpFbPQ&s" 
                    alt="Logo" 
                    style={estilos.logo} 
                />
                <h2>Login</h2>
                
                <div style={estilos.grupoInput}>
                    <label style={estilos.label}>Email</label>
                    <input 
                        type="text" 
                        style={estilos.input} 
                        placeholder='Digite seu email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div style={estilos.grupoInput}> 
                    <label style={estilos.label}>Senha</label>
                    <input 
                        type="password" 
                        style={estilos.input} 
                        placeholder='Digite uma senha'
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div> 

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={estilos.botaoLogin} onClick={botaoEntrar}>
                        Entrar
                    </button>
                    
                    <button 
                        style={{ ...estilos.botaoLogin, backgroundColor: '#6c757d' }} 
                        onClick={handleSair}
                    >
                        Sair
                    </button>
                </div>

                {mensagem && (
                    <p style={{ 
                        marginTop: '15px', 
                        color: mensagem.includes('sucesso') ? 'green' : 'red',
                        fontWeight: 'bold' 
                    }}>
                        {mensagem}
                    </p>
                )}
            </div> 
        </div>
    );
}

export default Aula15_Login;