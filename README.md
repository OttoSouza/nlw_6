# Next Level Week 6
Aplicação em NodeJs para criar um sistema de elogios.

# Conceito Aprendidos

* Rotas
* Rest
* Repository
* Service
* Middlewares
* Autenticação JWT


# Um pouco do conhecimento

## Rotas

Toda rota recebe uma requisição do cliente e devolve uma resposta para o cliente.

## Rest 

Transferencia de dados é simbolica, figurativa de maneira didatica. Essa transferencia é feita a partir do protocolo Http.
O protocolo Http é composto por alguns metodos, o quatros mais usados: 

    * Get - Reccebe os dados de uma entendidade
    * Post - Responsavel por enviar os dados e fazer a criacao dos dados informados na requisição
    * Put - Alterar os dados enviadas na requisição.
    * Delete - Deletar os dados.

# Repository 

Camada responsavel por fazer a comunicacao alguma ação com o banco de dados.
Essa camada pode realizar o CRUD no banco.

# Service

Camada responsavel por tratar as regras de negocios da aplicação. 
Os dados sao enviados de uma requisicao, as rotas recebem esses dados, passam para o service, com isso o mesmo ira fazer as validações necessarias
para o repositorio realiza alguma ação no banco e com isso o service devolve uma resposta para a rota.

# Middleware

Camada que realiza alguma ação antes da rota ser chamada.
Quando o usuario precisa de autenticar para entrar em alguma aplicação, a chamada para essa autenticação é feita antes de entrar na rota.
