import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const query = 'SELECT * FROM usuarios';
        const { rows } = await BD.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao listar os usuários:', error.message);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

// Endpoint para adicionar um novo usuário
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const comando = `INSERT INTO usuarios(nome, email, senha) VALUES ($1, $2, $3)`;
        const valores = [nome, email, senha];

        await BD.query(comando, valores);

        res.status(201).json({ message: "Usuário criado com sucesso" });
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Atualizar usuário completo
router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const verificarUsuario = await BD.query(
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const comando = `
            UPDATE usuarios
            SET nome = $1, email = $2, senha = $3
            WHERE id_usuario = $4
        `;

        const valores = [nome, email, senha, id_usuario];

        await BD.query(comando, valores);

        res.status(200).json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Atualização parcial
router.patch('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const verificarUsuario = await BD.query(
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }

        if (email !== undefined) {
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }

        if (senha !== undefined) {
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo para atualizar" });
        }

        valores.push(id_usuario);

        const comando = `
            UPDATE usuarios
            SET ${campos.join(', ')}
            WHERE id_usuario = $${contador}
        `;

        await BD.query(comando, valores);

        return res.status(200).json({ message: "Usuário atualizado com sucesso" });

    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Deletar usuário
router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const verificarUsuario = await BD.query(
            'SELECT * FROM usuarios WHERE id_usuario = $1',
            [id_usuario]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const comando = `DELETE FROM usuarios WHERE id_usuario = $1`;
        await BD.query(comando, [id_usuario]);

        return res.status(200).json({ message: 'Usuário deletado com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar usuário:', error.message);
        return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

export default router;