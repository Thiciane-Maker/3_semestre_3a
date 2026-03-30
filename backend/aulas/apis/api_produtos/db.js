import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'bd_finan_control_3a',
    port: 5432
});

const testarConexao = async () => {
    try {
        const cliente = await db.connect(); 
        console.log(' Conexão com o PostgreSQL estabelecida com sucesso!');
        cliente.release(); 
    } catch (error) {
        console.error('Erro ao conectar com o banco:', error.message);
    }
};


export { db, testarConexao };