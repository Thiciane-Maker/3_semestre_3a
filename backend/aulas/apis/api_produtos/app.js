import express from 'express';
import cors from 'cors'; 
import { testarConexao } from './db.js';
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';

import rotasUsuarios from './src/routes/usuarios.js';
import rotasProdutos from './src/routes/produtos.js';

const app = express();
const porta = 3000; 

app.use(cors());
app.use(express.json()); 

app.use('/usuarios', rotasUsuarios);
app.use('/produtos', rotasProdutos);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

app.get('/', async (req, res) => {
    try {
        await testarConexao();
        res.redirect('/swagger');
    } catch (error) {
        console.error("Erro de conexão:", error);
        res.status(500).send("Erro ao conectar ao banco de dados.");
    }
});

app.listen(porta, () => {
    console.log(`
    Local: http://localhost:${porta}
    `);
});