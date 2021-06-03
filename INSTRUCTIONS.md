## Instruções de configuração

Siga os passos abaixo para poder utilizar os scripts criados em ambiente de desenvolvimento:

- crie no Mysql um banco de dados vazio
- Faça o clone do repositório
- Configure o arquivo ./env com os dados de conexão ao banco de dados MySql
- execute no prompt a linha: npm install
- crie os scripts de banco de dados pelo prompt com a linha: npm run db:migrate
- crie os dados de testes de banco de dados pelo prompt com a linha: npm run db:seed
- rode a aplicação no prompt com a linha: npm run dev
- abra o navegador com a url: http://localhost:8087
- Abuse do playgroung :)

## Como você decidiu quais tecnologias usar como parte de sua solução?

Por falta de conhecimento de outras tecnologias, não fiquei com muitas escolhas :).
Eu poderia ter usado o Apollo-server-express ao invés do Apollo-server, mas foi uma exigência de projeto.

As tecnologias utilizadas foram:

- typescript: por exigência do projeto (iria usar de qualquer forma, porque gosto de "tipar" tudo.)
- jest: para realizar testes de casos de uso.
- eslint: para padronizar os códigos desenvolvidos.
- Apollo-server: por exigência do projeto e por ser o único que eu conheço para graphql.
- babel: para gerar o código de produção
- sequelize: para intermediário entre o código fonte e o banco de dados.
- mysql2: para comunicação direta com o banco de dados.
- ts-node-dev: para manter o ambiente online em desenvolvimento e funcionar de forma mais fácil os testes para o typescript.

## Você poderia fazer alguma melhoria em seu envio?

Poderia trabalhar mais os tratamentos de erro e verificar mais tipos corretos de variáveis ao invés de usar tantos "any".

## O que você faria de diferente se tivesse mais tempo

- Repensar nas declarações de variáveis "any".
- Criar mais casos de uso nos "tests".
- melhorar a documentação de uso.
