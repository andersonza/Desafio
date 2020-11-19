Feature: JsonPlaceHolder

  @GET+
  Scenario: Acessar lista de usuários com sucesso
    Given que especifiquei minha requisições em Json
    When solicito acesso a área de usuários
    Then deve retornar status code de sucesso 200
    And deve retornar uma lista com 10 usuários

  @GET-
  Scenario: Retornar erro quando tento acessar usuário inexistente
    Given que especifiquei minha requisições em Json
    When solicito acesso a área de um usuário inexistente
    Then deve retornar status code de erro 404

   @POST+
  Scenario: Adicionar post de usuário com sucesso sem informar id
    Given que possuo um post para adicionar sem informar id
    When solicito adicionar o post na área de posts
    Then deve retornar status code de post com sucesso 201
    And deve retornar o id padrão do post 101

  @POST+
  Scenario: Adicionar post de usuário com sucesso informando id e o alterando automaticamente para o padrão
    Given que possuo um post para adicionar informando id
    When solicito adicionar o post na área de posts
    Then deve retornar status code de post com sucesso 201
    And deve retornar o id padrão do post 101

  @PUT+
  Scenario: Alterar nome de um post
    Given que tenho o nome de um post para alterar
    When solicito alterar um post
    Then deve retornar status code de sucesso 200

  @PUT-
  Scenario: Não alterar id de usuário
    Given que tenho name, user e id de um usuário para alterar
    When solicito realizar as alterações no usuário especificado
    Then deve retornar status code de sucesso 200
    And deve validar que não alterou id

  @DELETE+
  Scenario: Deletar post
    Given que especifiquei minha requisições em Json
    When solicito deletar um post
    Then deve retornar status code de sucesso 200

  @DELETE-
  Scenario: Retornar erro quando solicito deletar lista de posts
    Given que especifiquei minha requisições em Json
    When solicito deletar uma lista de posts
    Then deve retornar status code de erro 404



