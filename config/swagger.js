const documentacao = {
    openapi: "3.0.3",
    info: {
        title: "API Barbearia",
        description: "API para gerenciamento de barbearia, serviços e agendamentos",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local"
        }
    ],
    tags: [
        { name: "Usuarios", description: "Gerenciamento de usuários Clientes e Barbeiros" },
        { name: "Servicos", description: "Gerenciamento de serviços oferecidos" },
        { name: "Agendamentos", description: "Gerenciamento de horários e reservas" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuarios"],
                summary: "Listar todos os usuários",
                responses: {
                    200: { description: "Lista de usuários feita com sucesso" }
                }
            },
            post: {
                tags: ["Usuarios"],
                summary: "Criar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: {
                                nome: "Ricardo Angelos",
                                email: "Ricardo@email.com",
                                senha: "123",
                                tipo: "C"
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário criado" }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuarios"],
                summary: "Atualizar usuário",
                parameters: [{ name: "id_usuario", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    content: {
                        "application/json": {
                            example: { nome: "Ricardo Angelos Editado", email: "Ricardo@email.com", senha: "456", tipo: "B" }
                        }
                    }
                },
                responses: { 200: { description: "Usuário atualizado" } }
            },
            delete: {
                tags: ["Usuarios"],
                summary: "Remover usuário",
                parameters: [{ name: "id_usuario", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 200: { description: "Usuário removido" } }
            }
        },

        "/servicos": {
            get: {
                tags: ["Servicos"],
                summary: "Listar todos os serviços",
                responses: { 200: { description: "Lista de serviços" } }
            },
            post: {
                tags: ["Servicos"],
                summary: "Criar novo serviço",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: { nome: "Corte de Cabelo", preco: 100.00, descricao: "Modern Mullet " }
                        }
                    }
                },
                responses: { 201: { description: "Serviço criado" } }
            }
        },
        "/servicos/{id_servico}": {
            put: {
                tags: ["Servicos"],
                summary: "Atualizar serviço",
                parameters: [{ name: "id_servico", in: "path", required: true, schema: { type: "integer" } }],
                requestBody: {
                    content: {
                        "application/json": {
                            example: { nome: "Corte e Barba", preco: 200.00, descricao: "Combo completo" }
                        }
                    }
                },
                responses: { 200: { description: "Serviço atualizado" } }
            },
            delete: {
                tags: ["Servicos"],
                summary: "Remover serviço",
                parameters: [{ name: "id_servico", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 200: { description: "Serviço removido" } }
            }
        },

        "/agendamentos": {
            get: {
                tags: ["Agendamentos"],
                summary: "Listar todos os agendamentos",
                responses: { 200: { description: "Lista de agendamentos" } }
            },
            post: {
                tags: ["Agendamentos"],
                summary: "Realizar novo agendamento",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            example: {
                                data_hora: "2026-05-05 14:00:00",
                                id_cliente: 1,
                                id_servico: 2
                            }
                        }
                    }
                },
                responses: { 201: { description: "Agendamento realizado" } }
            }
        },
        "/agendamentos/{id_agendamento}": {
            delete: {
                tags: ["Agendamentos"],
                summary: "Cancelar agendamento",
                parameters: [{ name: "id_agendamento", in: "path", required: true, schema: { type: "integer" } }],
                responses: { 200: { description: "Agendamento cancelado" } }
            }
        }
    }
};

export default documentacao;
