// CommonJS => require
// ESModules => import/export
import http from "node:http";

//  Criar um usuário (name, email, password)

// Rotas
// Criar usuários
// Listagem de usuários
// Edição de usuários
// Remoção de usuários

// - HTTP
//  - Método HTTP
//  - URL

// GET, POST PUT, PATCH, DELETE

// GET => Buscar uma informação (recurso) do back-end => Utilizamos o método GET quando queremos consultar dados no servidor. Por exemplo, ao buscar uma lista de usuários, o front-end envia uma requisição GET para obter essas informações do back-end.

// POST => Criar uma informação (recurso) no back-end => Utilizamos o método POST sempre que queremos criar um novo recurso no servidor. Por exemplo, ao cadastrar um novo usuário, enviamos os dados com uma requisição POST para que o back-end salve essas informações no banco de dados.

// PUT => Atulizar um recurso no back-end => Usamos o PUT quando queremos atualizar todas as informações de um recurso existente. Por exemplo, ao editar completamente os dados de um usuário, enviamos todos os campos novamente, mesmo os que não foram alterados.

// PATCH => Atualizar uma informação única ou específica de um recurso no back-end => Usamos o PATCH quando queremos modificar apenas um campo ou parte de um recurso. Por exemplo, se eu quiser atualizar apenas a preferência de receber notificações de um usuário, sem alterar os outros dados dele, o PATCH é o método ideal.

// DELETE => Deletar um recurso do back-end => Utilizamos o DELETE quando queremos remover um recurso do sistema de forma permanente. Por exemplo, ao excluir um usuário do banco de dados, enviamos uma requisição com o método DELETE para a rota correspondente.

// GET /users => Buscando usuários do back-end
// POST /users => Criando um usuário no back-end

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log("Requisição recebida:", method, url);
  if (method === "GET" && url === "/users") {
    // Early return
    return res.end("Listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Criação de usuário");
  }

  return res.end("Hello World");
});

server.listen(3333);
// localhost:3333
