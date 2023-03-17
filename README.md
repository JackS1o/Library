## Boas vindas ao repositório do projeto Library!

# O que foi desenvolvido

Esta é uma aplicação Fullstack que permite o gerenciamento de uma biblioteca. Nela é possível pesquisar livros por título, autor, idioma e ano de lançamento.

<details>
  <summary>
    <strong>Como executar o projeto</strong>
  </summary><br>

  1. Clone o repositório 
    `git@github.com:JackS1o/Library.git`
  
  2. Na raíz do projeto, execute o comando `docker-compose up -d` para subir os containeres da aplicação e do banco de dados. Os Serviços estarão disponíveis nos seguintes endereços:
    - Frontend: http://localhost:3000
    - Backend: http://localhost:3001
    - Banco de dados: http://localhost:27017 

</details>

<details>
  <summary>
    <strong>Como executar os testes</strong>
  </summary><br>

  1. No diretório `backend`, execute o comando `npm test` para executar os testes unitários.

  2. Os testes unitários foram desenvolvidos utilizando `Jest`, `mocha`, `sinon` e `chai`.

  3. Os testes foram desenvolvidos para as seguintes rotas:
    - GET
    - GET /:id
    - POST /

  Tendo em vista que a aplicação foi desenvolvida utilizando o padrão MSC, os testes foram desenvolvidos para cada camada da aplicação.
</details>

<details>
  <summary>
    <strong>Endpoints</strong>
  </summary><br>

  - GET /
    - Retorna todos os livros cadastrados no banco de dados.

  - GET /:id
    - Retorna o livro com o id especificado na URL.

  - POST /
    - Executa o seeder para popular o banco de dados com 100 livros.
    - O corpo da requisição deve conter os seguintes campos:
    - author
    -  country
    -  imageLink
    -  language
    -  link
    -  pages
    -  title
    -  year
</details>

<details>
  <summary>
    <strong>Preview</strong>
  </summary><br>

  <p align="center">
    Tela Principal / Detalhes do livro
  </p>
  <p align="center">
    <img src="./preview/home.png" alt="login" width="800"/>
    <img src="./preview/book-detail.png" alt="login" width="800"/>
  </p>
</details>