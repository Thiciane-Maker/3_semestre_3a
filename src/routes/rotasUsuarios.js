import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

const camposPermitidos = ['nome', 'email', 'senha', 'tipo'];

router.get('/', async (req, res) => {
    try {
        const { rows } = await BD.query(
            `SELECT id_usuario, nome, email, tipo 
             FROM USUARIOS 
             ORDER BY nome ASC`
        );

        return res.status(200).json(rows);

    } catch (error) {
        console.error('Erro ao listar usuários:', error.message);
        return res.status(500).json({ message: 'Erro ao listar usuários' });
    }
});


router.post('/', async (req, res) => {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome, email, senha e tipo" 
        });
    }

    if (tipo.length !== 1) {
        return res.status(400).json({ 
            message: "O campo 'tipo' deve ter apenas 1 caractere (ex: B ou C)" 
        });
    }

    try {
        const { rows } = await BD.query(`
            INSERT INTO USUARIOS (nome, email, senha, tipo) 
            VALUES ($1, $2, $3, $4) 
            RETURNING id_usuario, nome, email, tipo
        `, [nome, email, senha, tipo]);

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            usuario: rows[0]
        });

    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);
        return res.status(500).json({ message: 'Erro ao criar usuário' });
    }
});


router.put('/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome, email, senha e tipo" 
        });
    }

    if (tipo.length !== 1) {
        return res.status(400).json({ 
            message: "O campo 'tipo' deve ter 1 caractere" 
        });
    }

    try {
        const { rows, rowCount } = await BD.query(`
            UPDATE USUARIOS 
            SET nome = $1,
                email = $2,
                senha = $3,
                tipo = $4
            WHERE id_usuario = $5
            RETURNING id_usuario, nome, email, tipo
        `, [nome, email, senha, tipo, id_usuario]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        return res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            usuario: rows[0]
        });

    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
});


router.delete('/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const { rows, rowCount } = await BD.query(`
            DELETE FROM USUARIOS 
            WHERE id_usuario = $1 
            RETURNING id_usuario, nome, email, tipo
        `, [id_usuario]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        return res.status(200).json({
            message: "Usuário removido com sucesso!",
            usuario: rows[0]
        });

    } catch (error) {
        console.error('Erro ao deletar:', error.message);
        return res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
});

export default router;