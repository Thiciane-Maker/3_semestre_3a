import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

const camposPermitidos = ['nome', 'descricao', 'cor', 'tipo', 'icone', 'ativo'];

router.get('/', async (req, res) => {
    try {
        const { rows } = await BD.query(
            `SELECT * FROM categorias ORDER BY nome ASC`
        );
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao listar categorias:', error.message);
        return res.status(500).json({ message: 'Erro ao listar categorias' });
    }
});


router.post('/', async (req, res) => {
    const { nome, descricao, cor, tipo, icone } = req.body;

    if (!nome || !tipo) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome e tipo" 
        });
    }

    if (tipo.length !== 1) {
        return res.status(400).json({ 
            message: "O campo 'tipo' deve ter apenas 1 caractere (ex: D ou R)" 
        });
    }

    try {
        const { rows } = await BD.query(`
            INSERT INTO categorias (nome, descricao, cor, tipo, icone) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING *
        `, [nome, descricao || null, cor || null, tipo, icone || null]);

        return res.status(201).json({
            message: "Categoria criada com sucesso!",
            categoria: rows[0]
        });

    } catch (error) {
        console.error('Erro ao criar categoria:', error.message);
        return res.status(500).json({ message: 'Erro ao criar categoria' });
    }
});

router.put('/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const { nome, descricao, cor, tipo, icone, ativo } = req.body;

    if (!nome || !tipo) {
        return res.status(400).json({ 
            message: "Campos obrigatórios: nome e tipo" 
        });
    }

    try {
        const { rows, rowCount } = await BD.query(`
            UPDATE categorias 
            SET nome = $1,
                descricao = $2,
                cor = $3,
                tipo = $4,
                icone = $5,
                ativo = $6
            WHERE id_categoria = $7
            RETURNING *
        `, [
            nome,
            descricao || null,
            cor || null,
            tipo,
            icone || null,
            ativo ?? true,
            id_categoria
        ]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.status(200).json({
            message: "Categoria atualizada com sucesso!",
            categoria: rows[0]
        });

    } catch (error) {
        console.error('Erro ao atualizar categoria:', error.message);
        return res.status(500).json({ message: 'Erro ao atualizar categoria' });
    }
});

router.patch('/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const dados = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        for (let campo in dados) {
            if (camposPermitidos.includes(campo)) {

                // valida tipo
                if (campo === 'tipo' && dados[campo].length !== 1) {
                    return res.status(400).json({
                        message: "O campo 'tipo' deve ter 1 caractere"
                    });
                }

                campos.push(`${campo} = $${i++}`);
                valores.push(dados[campo]);
            }
        }

        if (campos.length === 0) {
            return res.status(400).json({
                message: "Nenhum campo válido enviado"
            });
        }

        valores.push(id_categoria);

        const { rows, rowCount } = await BD.query(`
            UPDATE categorias
            SET ${campos.join(', ')}
            WHERE id_categoria = $${i}
            RETURNING *
        `, valores);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.status(200).json({
            message: "Atualizada parcialmente!",
            categoria: rows[0]
        });

    } catch (error) {
        console.error('Erro no PATCH:', error.message);
        return res.status(500).json({ message: 'Erro ao atualizar categoria' });
    }
});

router.delete('/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;

    try {
        const { rows, rowCount } = await BD.query(`
            DELETE FROM categorias 
            WHERE id_categoria = $1 
            RETURNING *
        `, [id_categoria]);

        if (rowCount === 0) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.status(200).json({
            message: "Categoria removida!",
            categoria: rows[0]
        });

    } catch (error) {
        console.error('Erro ao deletar:', error.message);
        return res.status(500).json({ message: 'Erro ao deletar categoria' });
    }
});

export default router;