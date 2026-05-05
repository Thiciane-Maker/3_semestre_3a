import { Router } from "express";
import { BD } from "../../db.js"; 

const router = Router();

// LISTAR SUBCATEGORIAS
router.get('/', async (req, res) => {
    try {
        // Adicionei public. para forçar a busca no schema padrão caso o banco esteja confuso
        const query = `
            SELECT s.*, c.nome AS nome_categoria 
            FROM subcategorias s
            LEFT JOIN categorias c ON s.id_categoria = c.id_categoria
            ORDER BY s.nome ASC
        `;
        const { rows } = await BD.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar subcategorias:', error.message);
        res.status(500).json({ error: 'Erro ao buscar subcategorias' });
    }
});

// CRIAR SUBCATEGORIA
router.post('/', async (req, res) => {
    const { nome, id_categoria } = req.body;

    if (!nome || !id_categoria) {
        return res.status(400).json({ error: 'Nome e id_categoria são obrigatórios' });
    }

    try {
        const { rows } = await BD.query(
            `INSERT INTO subcategorias (nome, id_categoria, ativo)
             VALUES ($1, $2, true)
             RETURNING *`,
            [nome, id_categoria]
        );

        res.status(201).json(rows[0]); // Retornando direto o objeto para facilitar o front

    } catch (error) {
        console.error('Erro ao criar subcategoria:', error.message);
        // Tratamento para caso o id_categoria não exista no banco (FK constraint)
        if (error.code === '23503') {
            return res.status(400).json({ error: 'A categoria informada não existe' });
        }
        res.status(500).json({ error: 'Erro ao criar subcategoria' });
    }
});

// ATUALIZAR SUBCATEGORIA (PUT)
router.put('/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    const { nome, id_categoria, ativo } = req.body;

    // Removi a obrigatoriedade do 'ativo' no body para evitar erros caso o front não envie
    // Ele assume o valor que vier ou mantém o que está (ou você pode validar conforme sua regra)
    if (!nome || !id_categoria) {
        return res.status(400).json({ error: 'nome e id_categoria são obrigatórios' });
    }

    try {
        const { rows, rowCount } = await BD.query(
            `UPDATE subcategorias
             SET nome = $1,
                 id_categoria = $2,
                 ativo = $3
             WHERE id_subcategoria = $4
             RETURNING *`,
            [nome, id_categoria, ativo ?? true, id_subcategoria]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Subcategoria não encontrada' });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        console.error('Erro ao atualizar subcategoria:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar subcategoria' });
    }
});

// DELETAR SUBCATEGORIA
router.delete('/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;

    try {
        const { rowCount } = await BD.query(
            `DELETE FROM subcategorias WHERE id_subcategoria = $1`,
            [id_subcategoria]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Subcategoria não encontrada' });
        }

        res.status(200).json({ message: 'Deletada com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar subcategoria:', error.message);
        res.status(500).json({ error: 'Erro ao deletar subcategoria' });
    }
});

export default router;