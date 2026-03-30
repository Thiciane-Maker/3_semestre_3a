import express from 'express';
import { db } from '../../db.js'; 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resultado = await db.query('SELECT id_usuario, nome, email FROM usuarios');
        res.json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
});

router.post('/', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const novoUsuario = await db.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        res.status(201).json(novoUsuario.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM usuarios WHERE id_usuario = $1', [id]);
        res.json({ mensagem: "Usuário removido com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao deletar usuário" });
    }
});

export default router;