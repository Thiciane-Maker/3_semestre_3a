import express from 'express';
import cors from 'cors';
import { testarConexao } from './db.js';


// import swaggerUi from 'swagger-ui-express';
// import documentacao from './config/swagger.js';
// import rotasUsuarios from './src/routes/rotasUsuarios.js';

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

// Rota principal
app.get('/', async (req, res) => {
    try {
        await testarConexao();
        res.status(200).json({ mensagem: "API Funcionando" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro na conexão com o banco" });
    }
});

// Rotas externas
// app.use(rotasUsuarios);
// app.use(rotaProdutos);

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
