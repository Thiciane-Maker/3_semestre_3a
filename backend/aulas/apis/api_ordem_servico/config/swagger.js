const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Financeira',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000' }
    ],
    tags: [
        { name: 'usuarios' },
        { name: 'categorias' },
        { name: 'subcategorias' }
    ],
    paths: {
        // ================= USUARIOS =================
        "/usuarios": {
            get: {
                tags: ["usuarios"],
                summary: "Listar usuários",
                responses: {
                    200: {
                        description: "Lista de usuários retornada com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Usuario' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["usuarios"],
                summary: "Criar usuário",
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/UsuarioInput" } } }
                },
                responses: { 
                    201: { description: "Usuário criado com sucesso" },
                    400: { description: "Erro na requisição" }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["usuarios"],
                summary: "Atualizar usuário",
                parameters: [{ name: "id_usuario", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/UsuarioInput" } } }
                },
                responses: { 
                    200: { description: "Atualizado com sucesso" },
                    404: { description: "Usuário não encontrado" }
                }
            },
            delete: {
                tags: ["usuarios"],
                summary: "Deletar usuário",
                parameters: [{ name: "id_usuario", in: "path", required: true, schema: { type: "integer" } }],
                responses: {
                    200: { description: "Deletado com sucesso" },
                    404: { description: "Usuário não encontrado" }
                }
            }
        },

        // ================= CATEGORIAS =================
        "/categorias": {
            get: {
                tags: ["categorias"],
                summary: "Listar categorias",
                responses: {
                    200: {
                        description: "Lista de categorias",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Categoria' } }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["categorias"],
                summary: "Criar categoria",
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/CategoriaInput" } } }
                },
                responses: { 201: { description: "Criada com sucesso" } }
            }
        },
        "/categorias/{id_categoria}": {
            put: {
                tags: ["categorias"],
                summary: "Atualizar categoria",
                parameters: [{ name: "id_categoria", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/CategoriaInput" } } }
                },
                responses: { 
                    200: { description: "Atualizada com sucesso" },
                    404: { description: "Categoria não encontrada" }
                }
            },
            delete: {
                tags: ["categorias"],
                summary: "Deletar categoria",
                parameters: [{ name: "id_categoria", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 
                    200: { description: "Deletada com sucesso" },
                    404: { description: "Categoria não encontrada" }
                }
            }
        },

        // ================= SUBCATEGORIAS =================
        "/subcategorias": {
            get: {
                tags: ["subcategorias"],
                summary: "Listar subcategorias",
                responses: {
                    200: {
                        description: "Lista de subcategorias com nome da categoria pai",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Subcategoria' } }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["subcategorias"],
                summary: "Criar subcategoria",
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/SubcategoriaInput" } } }
                },
                responses: { 
                    201: { description: "Criada com sucesso" },
                    400: { description: "ID da Categoria inválido ou campos faltando" }
                }
            }
        },
        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ["subcategorias"],
                summary: "Atualizar subcategoria",
                parameters: [{ name: "id_subcategoria", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/SubcategoriaInput" } } }
                },
                responses: { 
                    200: { description: "Atualizada com sucesso" },
                    404: { description: "Subcategoria não encontrada" }
                }
            },
            delete: {
                tags: ["subcategorias"],
                summary: "Deletar subcategoria",
                parameters: [{ name: "id_subcategoria", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 
                    200: { description: "Deletada com sucesso" },
                    404: { description: "Subcategoria não encontrada" }
                }
            }
        }
    },
    components: {
        schemas: {
            Usuario: {
                type: "object",
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Fulano de Tal" },
                    email: { type: "string", example: "fulano@email.com" },
                    tipo_acesso: { type: "string", example: "usuario" },
                    ativo: { type: "boolean", example: true }
                }
            },
            UsuarioInput: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Fulano de Tal" },
                    email: { type: "string", example: "fulano@email.com" },
                    senha: { type: "string", example: "senha123" },
                    tipo_acesso: { type: "string", example: "usuario" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Categoria: {
                type: "object",
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Alimentação" },
                    tipo: { type: "string", example: "D" },
                    ativo: { type: "boolean", example: true }
                }
            },
            CategoriaInput: {
                type: "object",
                required: ["nome", "tipo"],
                properties: {
                    nome: { type: "string", example: "Educação" },
                    tipo: { type: "string", example: "D" },
                    descricao: { type: "string", example: "Livros e cursos" },
                    cor: { type: "string", example: "#4A90E2" },
                    icone: { type: "string", example: "book" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Subcategoria: {
                type: "object",
                properties: {
                    id_subcategoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Mercado" },
                    id_categoria: { type: "integer", example: 1 },
                    nome_categoria: { type: "string", example: "Alimentação" },
                    ativo: { type: "boolean", example: true }
                }
            },
            SubcategoriaInput: {
                type: "object",
                required: ["nome", "id_categoria"],
                properties: {
                    nome: { type: "string", example: "Mensalidade Faculdade" },
                    id_categoria: { type: "integer", example: 1 },
                    ativo: { type: "boolean", example: true }
                }
            }
        }
    }
};

export default documentacao;