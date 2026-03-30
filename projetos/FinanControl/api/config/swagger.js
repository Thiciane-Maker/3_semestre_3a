const documentacao = {
    openapi: "3.0.3",
    info: {
        title: "API Financeira",
        description: "API para gerenciamento de empresas, usuários e finanças",
        version: "1.0.0"
    },

    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local"
        }
    ],

    tags: [
        { name: "Empresas", description: "Gerenciamento de empresas" },
        { name: "Usuarios", description: "Gerenciamento de usuários" },
        { name: "Categorias", description: "Gerenciamento de categorias" }
    ],

    paths: {

        "/empresas": {
            get: {
                tags: ["Empresas"],
                summary: "Listar empresas ativas",
                responses: {
                    200: {
                        description: "Lista de empresas"
                    }
                }
            },
            post: {
                tags: ["Empresas"],
                summary: "Criar empresa",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: {
                                nome: "Empresa X",
                                cnpj: "12345678901234",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Empresa criada" }
                }
            }
        },

        "/empresas/{id}": {
            put: {
                tags: ["Empresas"],
                summary: "Atualizar empresa",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            example: {
                                nome: "Empresa Atualizada",
                                cnpj: "99999999999999",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizada" }
                }
            },
            delete: {
                tags: ["Empresas"],
                summary: "Desativar empresa",
                description: "Soft delete (ativo = false)",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Desativada" }
                }
            }
        },

        // ================= USUARIOS =================
        "/usuarios": {
            get: {
                tags: ["Usuarios"],
                summary: "Listar usuários ativos",
                responses: {
                    200: { description: "Lista de usuários" }
                }
            },
            post: {
                tags: ["Usuarios"],
                summary: "Criar usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: {
                                nome: "João",
                                email: "joao@email.com",
                                senha: "123456",
                                id_empresa: 1
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário criado" }
                }
            }
        },

        "/usuarios/{id}": {
            put: {
                tags: ["Usuarios"],
                summary: "Atualizar usuário",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            example: {
                                nome: "João Atualizado",
                                email: "novo@email.com",
                                senha: "654321",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizado" }
                }
            },
            delete: {
                tags: ["Usuarios"],
                summary: "Desativar usuário",
                description: "Soft delete (ativo = false)",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Desativado" }
                }
            }
        },

        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar categorias",
                responses: {
                    200: { description: "Lista de categorias" }
                }
            },
            post: {
                tags: ["Categorias"],
                summary: "Criar categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: {
                                nome: "Alimentação",
                                descricao: "Gastos com comida",
                                cor: "#FF0000",
                                tipo: "D",
                                icone: "food",
                                id_empresa: 1
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Categoria criada" }
                }
            }
        },

        "/categorias/{id}": {
            put: {
                tags: ["Categorias"],
                summary: "Atualizar categoria",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            example: {
                                nome: "Lazer",
                                descricao: "Entretenimento",
                                cor: "#00FF00",
                                tipo: "D",
                                icone: "game",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizada" }
                }
            },
            delete: {
                tags: ["Categorias"],
                summary: "Desativar categoria",
                description: "Soft delete",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Desativada" }
                }
            }
        }

    }
};

export default documentacao;