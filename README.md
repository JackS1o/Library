## Boas vindas ao repositório do projeto Library!

# O que foi desenvolvido

Esta é uma aplicação Fullstack que permite o gerenciamento de uma biblioteca. Nela é possível pesquisar livros por título, autor, idioma e ano de lançamento.

<details>
  <summary>
    <strong>Como executar o projeto</strong>
  </summary><br>

  1. Clone o repositório 
    `git@github.com:JackS1o/Library.git`
  
  2. Na raíz do projeto, execute o comando `docker-compose up -d` para subir os containers da aplicação e do banco de dados. Os Serviços estarão disponíveis nos seguintes endereços:
    - Frontend: http://localhost:3000
    - Backend: http://localhost:3001
    - Banco de dados na porta: 27017 

</details>

<details>
  <summary>
    <strong>Como executar os testes</strong>
  </summary><br>

  1. No diretório `backend`, execute o comando `npm run test:dev` para executar os testes.

  2. Os testes foram desenvolvidos utilizando `Jest`, `mocha`, `sinon` e `chai`.

  3. Os testes foram desenvolvidos para as seguintes rotas:
    - GET /
    - GET /:id
    - POST /

  Tendo em vista que a aplicação foi desenvolvida utilizando a arquitetura MSC, os testes foram desenvolvidos para cada camada da aplicação.
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
    <strong>Tecnologias</strong>
  </summary><br>

  - [Node.js](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [MongoDB](https://www.mongodb.com/)
  - [Docker](https://www.docker.com/)
  - [React](https://pt-br.reactjs.org/)
  - [Material UI](https://material-ui.com/pt/)
  - [Jest](https://jestjs.io/)
  - [Mocha](https://mochajs.org/)
  - [Sinon](https://sinonjs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Axios]()
  - [React Router](https://reactrouter.com/)
</details>

<details>
  <summary>
    <strong>Preview</strong>
  </summary><br>

  <p align="center">
    Tela Principal / Detalhes do livro
  </p>
  <p align="center">
    <img src=".//src/preview/home.png" alt="home" width="800"/>
    <img src="./src/preview/book-detail.png" alt="book detail" width="600"/>
  </p>
  <hr />
</details>