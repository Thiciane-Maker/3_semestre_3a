import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/ordens", async (req, res) => {
    try {
        const query = `
            SELECT o.*, d.nome as nome_departamento, u.nome as nome_usuario
            FROM ordem_servico o
            LEFT JOIN departamentos d ON o.id_departamento = d.id_departamento
            LEFT JOIN usuarios u ON o.id_usuario = u.id_usuario
        `;
        const resultado = await BD.query(query);
        res.status(200).json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.post("/ordens", async (req, res) => {
    try {
        const { titulo, descricao, id_departamento, numero_ordem, prioridade, status, id_usuario } = req.body;

        const query = `
            INSERT INTO ordem_servico (titulo, descricao, id_departamento, numero_ordem, prioridade, status, id_usuario)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `;

        const valores = [
            titulo, 
            descricao, 
            id_departamento, 
            numero_ordem, 
            prioridade || 'Média', 
            status || 'Aberto',
            id_usuario
        ];

        const resultado = await BD.query(query, valores);
        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.put("/ordens/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, id_departamento, numero_ordem, prioridade, status, id_usuario } = req.body;

        const query = `
            UPDATE ordem_servico
            SET titulo = $1, descricao = $2, id_departamento = $3, numero_ordem = $4, prioridade = $5, status = $6, id_usuario = $7
            WHERE id_ordem = $8
            RETURNING *;
        `;

        const resultado = await BD.query(query, [titulo, descricao, id_departamento, numero_ordem, prioridade, status, id_usuario, id]);
        
        if (resultado.rowCount === 0) return res.status(404).json({ mensagem: "Ordem não encontrada" });
        
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.delete("/ordens/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM ordem_servico WHERE id_ordem = $1 RETURNING *`;
        const resultado = await BD.query(query, [id]);
        
        if (resultado.rowCount === 0) {
            return res.status(404).json({ mensagem: "Ordem não encontrada" });
        }

        res.status(200).json({ mensagem: "Ordem removida" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

export default router;