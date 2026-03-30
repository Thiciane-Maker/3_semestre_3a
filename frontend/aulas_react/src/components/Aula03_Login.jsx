import { useState } from 'react';
import { estilosLogin } from '../styles/Aula03_Login_Estilos';

const Aula03_Login = () => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const estilos = estilosLogin;


    const handleLogin = () => {
        if (email === 'senai@senai.br' && senha === '123') {
            setMensagem('Login bem-sucedido!');
        } else {
            setMensagem('Email ou senha incorretos ');
        }
    };

    const handleSair = () => {
        setEmail('');
        setSenha('');
        setMensagem('');
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
                    <button style={estilos.botaoLogin} onClick={handleLogin}>
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

export default Aula03_Login;