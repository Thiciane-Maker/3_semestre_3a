

const Aula04_filmes = ({ foto, titulo, genero }) => {
    return (
        <div style={styles.card}>
            <img src={foto} alt={titulo} style={styles.imagem} />
            <div style={styles.conteudo}>
                <h3 style={styles.titulo}>{titulo}</h3>
                <p style={styles.genero}>Gênero: {genero}</p>
                <button style={styles.botao}>Assistir</button>
            </div>
        </div>
    );
};


const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '200px',
        margin: '10px',
        padding: '10px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imagem: {
        width: '100%',
        height: '250px',
        borderRadius: '4px'
    },
    conteudo: {
        textAlign: 'center',
        marginTop: '10px'
    },
    titulo: {
        fontSize: '18px',
        margin: '5px 0'
    },
    genero: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '10px'
    },
    botao: {
        padding: '8px 16px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    }
};
7
export default Aula04_filmes