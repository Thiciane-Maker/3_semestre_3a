import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { rows } = await BD.query(
            `SELECT id_servico, nome, preco, descricao 
             FROM SERVICOS 
             ORDER BY nome ASC`
        );
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao listar serviços:', error.message);
        return res.status(500).json({ message: 'Erro ao listar serviços' });
    }
});

router.post('/', async (req, res) => {
    const { nome, preco, descricao } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome e preco" 
        });
    }

    try {
        const { rows } = await BD.query(`
            INSERT INTO SERVICOS (nome, preco, descricao) 
            VALUES ($1, $2, $3) 
            RETURNING id_servico, nome, preco, descricao
        `, [nome, preco, descricao]);

        return res.status(201).json({
            message: "Serviço criado com sucesso!",
            servico: rows[0]
        });
    } catch (error) {
        console.error('Erro ao criar serviço:', error.message);
        return res.status(500).json({ message: 'Erro ao criar serviço' });
    }
});

router.put('/:id_servico', async (req, res) => {
    const { id_servico } = req.params;
    const { nome, preco, descricao } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome e preco" 
        });
    }

    try {
        const { rows, rowCount } = await BD.query(`
            UPDATE SERVICOS 
            SET nome = $1, preco = $2, descricao = $3
            WHERE id_servico = $4
            RETURNING id_servico, nome, preco, descricao
        `, [nome, preco, descricao, id_servico]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Serviço não encontrado" });
        }

        return res.status(200).json({
            message: "Serviço atualizado com sucesso!",
            servico: rows[0]
        });
    } catch (error) {
        console.error('Erro ao atualizar serviço:', error.message);
        return res.status(500).json({ message: 'Erro ao atualizar serviço' });
    }
});

router.delete('/:id_servico', async (req, res) => {
    const { id_servico } = req.params;

    try {
        const { rows, rowCount } = await BD.query(`
            DELETE FROM SERVICOS 
            WHERE id_servico = $1 
            RETURNING id_servico, nome
        `, [id_servico]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Serviço não encontrado" });
        }

        return res.status(200).json({
            message: "Serviço removido com sucesso!",
            servico: rows[0]
        });
    } catch (error) {
        console.error('Erro ao deletar serviço:', error.message);
        return res.status(500).json({ message: 'Erro ao deletar serviço' });
    }
});

export default router;
