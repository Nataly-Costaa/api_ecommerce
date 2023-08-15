# API E-commerce

Esta é uma API de E-Commerce simples construída com Node.js, Express e SQLite. A API permite gerenciar produtos e usuários para um sistema de comércio eletrônico.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

## Instalação

- Clone este repositório
- Acesse o diretório do projeto
- Instale as dependências
- Inicie o servidor

O servidor estará disponível em http://localhost:4000 por padrão.

## Endpoints

### Usuários

GET /usuarios
Retorna a lista de todos os usuários.

POST /usuarios
Cria um novo usuário.

PUT /usuarios/:id
Atualiza os dados de um usuário existente com base no ID fornecido.

DELETE /usuarios/:id
Exclui um usuário com base no ID fornecido.

### Produtos

GET /produtos
Retorna a lista de todos os produtos.

POST /produtos
Cria um novo produto.

PUT /produtos/:id
Atualiza os detalhes de um produto existente com base no ID fornecido.

DELETE /produtos/:id
Exclui um produto com base no ID fornecido.

## Estrutura do Banco de Dados

### Tabela "usuarios"
- ID (Integer & Chave primária_
- name (varchar)
- email (varchar)
- password (varchar)

### Tabela "produtos"
- ID (Integer & Chave primária)
- title (varchar)
- description (varchar)
- price (float)
- id_user (Integer)
- FOREIGN KEY (id_user) REFERENCES Usuario(ID) ON DELETE CASCADE
