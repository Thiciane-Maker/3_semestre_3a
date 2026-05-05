import pkg from 'pg';
const { Pool } = pkg;

const BD = new Pool({ 
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'BD_barbearia',
    port: 5432
});

const testarConexao = async () => {
    try {
        const cliente = await BD.connect(); 
        console.log(' Conexão com o PostgreSQL estabelecida com sucesso!');
        cliente.release(); 
    } catch (error) {
        console.error('Erro ao conectar com o banco:', error.message);
    }
};


export { BD, testarConexao };
