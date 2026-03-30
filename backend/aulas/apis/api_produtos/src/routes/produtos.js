import express from 'express';
import { db } from '../../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resultado = await db.query('SELECT * FROM produtos ORDER BY id_produto ASC'); 
        res.json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar produtos", detalhe: error.message });
    }
});

router.post('/', async (req, res) => {
    const { nome, preco, url_imagem, link_produto, frete_gratis } = req.body;
    try {
        const novoProduto = await db.query(
            'INSERT INTO produtos (nome, preco, url_imagem, link_produto, frete_gratis) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, preco, url_imagem, link_produto, frete_gratis]
        );
        res.status(201).json(novoProduto.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao cadastrar produto", detalhe: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, preco, url_imagem, link_produto, frete_gratis } = req.body;
    try {
        const atualizado = await db.query(
            'UPDATE produtos SET nome = $1, preco = $2, url_imagem = $3, link_produto = $4, frete_gratis = $5 WHERE id_produto = $6 RETURNING *',
            [nome, preco, url_imagem, link_produto, frete_gratis, id]
        );
        res.json(atualizado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao atualizar produto", detalhe: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM produtos WHERE id_produto = $1', [id]);
        res.json({ mensagem: "Produto removido com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao deletar produto", detalhe: error.message });
    }
});

export default router;