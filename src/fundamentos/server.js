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

// Stateful vs Stateless

// A principal diferença entre uma aplicação Stateful e uma Stateless está na forma como lidam com o estado (informações em memória).

// Uma aplicação Stateful mantém dados em memória durante sua execução. Isso significa que ela depende dessas informações para funcionar corretamente. Se a aplicação for reiniciada ou cair, os dados que estavam na memória são perdidos, o que pode afetar seu funcionamento ou comportamento após ser reiniciada.

// Já uma aplicação Stateless não armazena nenhum dado em memória entre as execuções. Ela salva qualquer informação necessária em fontes externas, como bancos de dados, arquivos ou serviços de cache persistente. Isso garante que, mesmo se a aplicação for interrompida e reiniciada, tudo continuará funcionando normalmente, pois o estado não depende da memória da aplicação em si.

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    // Early return
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });

    return res.end("Criação de usuário");
  }

  return res.end("Hello World");
});

server.listen(3333);
// localhost:3333
