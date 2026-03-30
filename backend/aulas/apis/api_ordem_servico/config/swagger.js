const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Ordem de Serviços',
        description: 'Documentação da API de ordens de serviço',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'Localhost' }
    ],
    tags: [
        { name: 'usuarios', description: 'Operações relacionadas a usuários' },
        { name: 'departamentos', description: 'Operações relacionadas a departamentos' },
        { name: 'ordens', description: 'Operações relacionadas a ordens de serviço' }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["usuarios"],
                summary: "Listar todos usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["usuarios"],
                summary: "Cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastrar_Usuario" }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário cadastrado com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["usuarios"],
                summary: "Atualizar usuário",
                parameters: [
                    { name: "id_usuario", in: "path", required: true, schema: { type: "integer", example: 1 } }
                ],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/Atualizar_Usuario" } } }
                },
                responses: { 200: { description: "Usuário atualizado" } }
            },
            delete: {
                tags: ["usuarios"],
                summary: "Remover usuário",
                parameters: [
                    { name: "id_usuario", in: "path", required: true, schema: { type: "integer" } }
                ],
                responses: { 200: { description: "Usuário removido" } }
            }
        },
        "/departamentos": {
            get: {
                tags: ["departamentos"],
                summary: "Listar departamentos",
                responses: {
                    200: {
                        description: "Lista de departamentos",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Departamentos' } }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["departamentos"],
                summary: "Criar departamento",
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/Criar_Departamento" } } }
                },
                responses: { 201: { description: "Criado" } }
            }
        },
        "/ordens": {
            get: {
                tags: ["ordens"],
                summary: "Listar ordens",
                responses: {
                    200: {
                        description: "Sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Ordem' } }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["ordens"],
                summary: "Criar ordem",
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/Criar_Ordem" } } }
                },
                responses: { 201: { description: "Ordem criada" } }
            }
        },
        "/ordens/{id_ordem}": {
            put: {
                tags: ["ordens"],
                summary: "Atualizar ordem",
                parameters: [{ name: "id_ordem", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: "#/components/schemas/Criar_Ordem" } } }
                },
                responses: { 200: { description: "Atualizada" } }
            },
            delete: {
                tags: ["ordens"],
                summary: "Remover ordem",
                parameters: [{ name: "id_ordem", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 200: { description: "Removida" } }
            }
        }
    },
    components: {
        schemas: {
            Listar_Usuarios: {
                type: "object",
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" }
                }
            },
            Cadastrar_Usuario: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123456" }
                }
            },
            Atualizar_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123456" }
                }
            },
            Listar_Departamentos: {
                type: "object",
                properties: {
                    id_departamento: { type: "integer", example: 1 },
                    nome: { type: "string", example: "TI" },
                    descricao: { type: "string", example: "Tecnologia" }
                }
            },
            Criar_Departamento: {
                type: "object",
                required: ["nome", "descricao"],
                properties: {
                    nome: { type: "string", example: "Financeiro" },
                    descricao: { type: "string", example: "Departamento financeiro" }
                }
            },
            Criar_Ordem: {
                type: "object",
                required: ["titulo", "descricao", "id_departamento", "numero_ordem", "id_usuario"],
                properties: {
                    numero_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: "Manutenção servidor" },
                    descricao: { type: "string", example: "Servidor instável" },
                    id_departamento: { type: "integer", example: 1 },
                    prioridade: { type: "string", example: "Alta" },
                    status: { type: "string", example: "Aberto" },
                    id_usuario: { type: "integer", example: 1 }
                }
            },
            Listar_Ordem: {
                type: "object",
                properties: {
                    id_ordem: { type: "integer", example: 1 },
                    numero_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: "Manutenção" },
                    descricao: { type: "string", example: "Desc..." },
                    prioridade: { type: "string", example: "Alta" },
                    status: { type: "string", example: "Aberto" },
                    data: { type: "string", format: "date", example: "2026-03-16" },
                    id_departamento: { type: "integer", example: 1 },
                    nome_departamento: { type: "string", example: "TI" },
                    id_usuario: { type: "integer", example: 1 },
                    nome_usuario: { type: "string", example: "Ana Laura" }
                }
            }
        }
    }
};

export default documentacao;