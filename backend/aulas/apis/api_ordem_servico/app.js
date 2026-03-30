import express from 'express';
import { testarConexao } from './db.js';
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';
import rotasUsuarios from "./src/routes/rotasUsuarios.js";
import rotasDepartamentos from "./src/routes/rotasDepartamentos.js";
import rotasOrdem from "./src/routes/rotasOrdem.js";
import cors from 'cors'

const app = express();
app.use(express.json()); 
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

app.use(cors())
app.get('/', async (req, res) => {
    await testarConexao();
    res.redirect('/swagger');
});

app.use(rotasDepartamentos);
app.use(rotasUsuarios);
app.use(rotasOrdem);

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);

});