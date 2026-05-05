import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { testarConexao } from './db.js';
import documentacao from './config/swagger.js';

import rotasUsuarios from "../api_ordem_servico/src/routes/rotasUsuarios.js";
import rotasCategorias from "../api_ordem_servico/src/routes/rotasCategorias.js";
import rotasSubcategorias from "../api_ordem_servico/src/routes/rotasSubcategorias.js";



const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

app.get('/', async (req, res) => {
    try {
        await testarConexao();
        res.redirect('/swagger');
    } catch (error) {
        res.status(500).send("Erro ao conectar ao banco de dados.");
    }
});


app.use('/usuarios', rotasUsuarios);
app.use('/categorias', rotasCategorias);
app.use('/subcategorias', rotasSubcategorias);


const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});