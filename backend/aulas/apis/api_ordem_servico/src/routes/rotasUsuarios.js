import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// ================= GET =================
router.get('/', async (req, res) => {
    try {
        const { rows } = await BD.query('SELECT * FROM usuarios');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao listar:', error.message);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

// ================= POST =================
router.post('/', async (req, res) => {
    const { nome, email, senha, tipo_acesso } = req.body;

    try {
        await BD.query(
            `INSERT INTO usuarios (nome, email, senha, tipo_acesso) 
             VALUES ($1, $2, $3, $4)`,
            [nome, email, senha, tipo_acesso]
        );

        res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
        console.error('Erro ao criar:', error.message);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// ================= PUT =================
router.put('/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo_acesso } = req.body;

    try {
        const { rowCount } = await BD.query(
            `UPDATE usuarios
             SET nome=$1, email=$2, senha=$3, tipo_acesso=$4
             WHERE id_usuario=$5`,
            [nome, email, senha, tipo_acesso, id_usuario]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
        console.error('Erro ao atualizar:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// ================= PATCH =================
router.patch('/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const dados = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        for (let campo in dados) {
            campos.push(`${campo} = $${i++}`);
            valores.push(dados[campo]);
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nada para atualizar" });
        }

        valores.push(id_usuario);

        const { rowCount } = await BD.query(
            `UPDATE usuarios SET ${campos.join(', ')} WHERE id_usuario = $${i}`,
            valores
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({ message: "Atualizado parcialmente" });

    } catch (error) {
        console.error('Erro no patch:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// ================= DELETE =================
router.delete('/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const { rowCount } = await BD.query(
            `DELETE FROM usuarios WHERE id_usuario = $1`,
            [id_usuario]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({ message: "Deletado com sucesso" });

    } catch (error) {
        console.error('Erro ao deletar:', error.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

export default router;