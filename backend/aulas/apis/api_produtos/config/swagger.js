const documentacao = {
  openapi: '3.0.0',
  info: {
    title: 'API de Produtos',
    description: 'Documentação da API de produtos e usuários sincronizada com Banco de Dados',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor Local'
    }
  ],
  tags: [
    { name: 'usuarios', description: 'Gerenciamento de Usuários' },
    { name: 'produtos', description: 'Gerenciamento do Catálogo de Produtos' }
  ],
  paths: {
    '/usuarios': {
      get: {
        tags: ['usuarios'],
        summary: 'Lista todos os usuários',
        responses: {
          200: { 
            description: 'Sucesso ao retornar lista',
            content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Usuario' } } } }
          }
        }
      },
      post: {
        tags: ['usuarios'],
        summary: 'Cria um novo usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Usuario' }
            }
          }
        },
        responses: {
          201: { description: 'Usuário criado com sucesso' }
        }
      }
    },
    '/produtos': {
      get: {
        tags: ['produtos'],
        summary: 'Lista todos os produtos',
        responses: {
          200: { 
            description: 'Sucesso ao retornar lista',
            content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Produto' } } } }
          }
        }
      },
      post: {
        tags: ['produtos'],
        summary: 'Adiciona um novo produto (Interface de Cadastro)',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Produto' }
            }
          }
        },
        responses: {
          201: { description: 'Produto cadastrado com sucesso' }
        }
      }
    },
    '/produtos/{id}': {
      put: {
        tags: ['produtos'],
        summary: 'Atualiza um produto pelo ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID do produto (id_produto no banco)',
            schema: { type: 'integer' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Produto' }
            }
          }
        },
        responses: {
          200: { description: 'Produto atualizado' }
        }
      },
      delete: {
        tags: ['produtos'],
        summary: 'Remove um produto',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: {
          200: { description: 'Produto deletado com sucesso' }
        }
      }
    }
  },

  components: {
    schemas: {
      Usuario: {
        type: 'object',
        properties: {
          id_usuario: { type: 'integer', description: 'Gerado automaticamente pelo banco' },
          nome: { type: 'string', example: 'thiciane' },
          email: { type: 'string', example: 'thicii@email.com' },
          senha: { type: 'string', example: 'senha123' }
        }
      },
      Produto: {
        type: 'object',
        properties: {
          id_produto: { type: 'integer', description: 'Gerado automaticamente pelo banco' },
          nome: { type: 'string', example: 'Iphone 15' },
          preco: { type: 'number', example: 4098.80 },
          url_imagem: { type: 'string', example: 'https://m.media-amazon.com/images/I/41RpmPYWXLL._AC_SX679_.jpg' },
          link_produto: { type: 'string', example: 'https://www.amazon.com.br/Apple-iPhone-15-128-GB/dp/B0CP69NT2N/' },
          frete_gratis: { type: 'boolean', example: false }
        }
      }
    }
  }
};

export default documentacao;