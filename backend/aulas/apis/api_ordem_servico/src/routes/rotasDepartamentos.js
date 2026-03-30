import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/departamentos", async (req, res) => {
    try {
        const query = "SELECT * FROM departamentos";
        const resultado = await BD.query(query);

        res.status(200).json(resultado.rows);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.post("/departamentos", async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        const query = `
            INSERT INTO departamentos (nome, descricao)
            VALUES ($1, $2)
            RETURNING *;
        `;

        const valores = [nome, descricao];
        const resultado = await BD.query(query, valores);

        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.put("/departamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        const query = `
            UPDATE departamentos
            SET nome = $1, descricao = $2
            WHERE id_departamento = $3
            RETURNING *;
        `;

        const valores = [nome, descricao, id];
        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.patch("/departamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        let campos = [];
        let valores = [];
        let contador = 1;

        if (nome) {
            campos.push(`nome = $${contador++}`);
            valores.push(nome);
        }

        if (descricao) {
            campos.push(`descricao = $${contador++}`);
            valores.push(descricao);
        }

        valores.push(id);

        const query = `
            UPDATE departamentos
            SET ${campos.join(", ")}
            WHERE id_departamento = $${contador}
            RETURNING *;
        `;

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.delete("/departamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const query = `
            DELETE FROM departamentos
            WHERE id_departamento = $1
            RETURNING *;
        `;

        const resultado = await BD.query(query, [id]);

        res.status(200).json({
            mensagem: "Departamento removido",
            departamento: resultado.rows[0]
        });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

export default router;