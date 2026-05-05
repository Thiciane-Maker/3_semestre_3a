import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { rows } = await BD.query(`
            SELECT a.id_agendamento, a.data_hora, a.status, 
                   u.nome as cliente, s.nome as servico
            FROM AGENDAMENTOS a
            INNER JOIN USUARIOS u ON a.id_cliente = u.id_usuario
            INNER JOIN SERVICOS s ON a.id_servico = s.id_servico
            ORDER BY a.data_hora DESC`
        );
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao listar agendamentos:', error.message);
        return res.status(500).json({ message: 'Erro ao listar agendamentos' });
    }
});

router.post('/', async (req, res) => {
    const { data_hora, id_cliente, id_servico } = req.body;

    if (!data_hora || !id_cliente || !id_servico) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: data_hora, id_cliente e id_servico" 
        });
    }

    try {
        const { rows } = await BD.query(`
            INSERT INTO AGENDAMENTOS (data_hora, id_cliente, id_servico) 
            VALUES ($1, $2, $3) 
            RETURNING id_agendamento, data_hora, status
        `, [data_hora, id_cliente, id_servico]);

        return res.status(201).json({
            message: "Agendamento realizado com sucesso!",
            agendamento: rows[0]
        });
    } catch (error) {
        console.error('Erro ao criar agendamento:', error.message);
        return res.status(500).json({ message: 'Erro ao criar agendamento' });
    }
});

router.delete('/:id_agendamento', async (req, res) => {
    const { id_agendamento } = req.params;

    try {
        const { rows, rowCount } = await BD.query(`
            DELETE FROM AGENDAMENTOS 
            WHERE id_agendamento = $1 
            RETURNING id_agendamento
        `, [id_agendamento]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Agendamento não encontrado" });
        }

        return res.status(200).json({
            message: "Agendamento cancelado com sucesso!",
            agendamento: rows[0]
        });
    } catch (error) {
        console.error('Erro ao cancelar agendamento:', error.message);
        return res.status(500).json({ message: 'Erro ao cancelar agendamento' });
    }
});

export default router;
