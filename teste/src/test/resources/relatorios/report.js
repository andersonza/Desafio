$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/JsonTest.feature");
formatter.feature({
  "line": 1,
  "name": "JsonPlaceHolder",
  "description": "",
  "id": "jsonplaceholder",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Acessar lista de usuários com sucesso",
  "description": "",
  "id": "jsonplaceholder;acessar-lista-de-usuários-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@GET+"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "que especifiquei minha requisições em Json",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "solicito acesso a área de usuários",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deve retornar status code de sucesso 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "deve retornar uma lista com 10 usuários",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefs.que_especifiquei_minha_requisições_em_Json()"
});
formatter.result({
  "duration": 1027065900,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_acesso_a_área_de_usuários()"
});
formatter.result({
  "duration": 3130656600,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_sucesso()"
});
formatter.result({
  "duration": 3090000,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_uma_lista_com_usuários()"
});
formatter.result({
  "duration": 1150322200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Retornar erro quando tento acessar usuário inexistente",
  "description": "",
  "id": "jsonplaceholder;retornar-erro-quando-tento-acessar-usuário-inexistente",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@GET-"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "que especifiquei minha requisições em Json",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "solicito acesso a área de um usuário inexistente",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "deve retornar status code de erro 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefs.que_especifiquei_minha_requisições_em_Json()"
});
formatter.result({
  "duration": 780200,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_acesso_a_área_de_um_usuário_inexistente()"
});
formatter.result({
  "duration": 1068627900,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_erro()"
});
formatter.result({
  "duration": 850800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Adicionar post de usuário com sucesso sem informar id",
  "description": "",
  "id": "jsonplaceholder;adicionar-post-de-usuário-com-sucesso-sem-informar-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@POST+"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que possuo um post para adicionar sem informar id",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "solicito adicionar o post na área de posts",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "deve retornar status code de post com sucesso 201",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "deve retornar o id padrão do post 101",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefs.que_possuo_um_post_para_adicionar_sem_informar_id()"
});
formatter.result({
  "duration": 515500,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_adicionar_o_post_na_área_de_posts()"
});
formatter.result({
  "duration": 1040668300,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_post_com_sucesso()"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_o_id_padrão_do_post()"
});
formatter.result({
  "duration": 28335500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Adicionar post de usuário com sucesso informando id e o alterando automaticamente para o padrão",
  "description": "",
  "id": "jsonplaceholder;adicionar-post-de-usuário-com-sucesso-informando-id-e-o-alterando-automaticamente-para-o-padrão",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@POST+"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que possuo um post para adicionar informando id",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "solicito adicionar o post na área de posts",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "deve retornar status code de post com sucesso 201",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "deve retornar o id padrão do post 101",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefs.que_possuo_um_post_para_adicionar_informando_id()"
});
formatter.result({
  "duration": 281400,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_adicionar_o_post_na_área_de_posts()"
});
formatter.result({
  "duration": 1106274200,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_post_com_sucesso()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_o_id_padrão_do_post()"
});
formatter.result({
  "duration": 14011100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Alterar nome de um post",
  "description": "",
  "id": "jsonplaceholder;alterar-nome-de-um-post",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@PUT+"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "que tenho o nome de um post para alterar",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "solicito alterar um post",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "deve retornar status code de sucesso 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefs.que_tenho_o_nome_de_um_post_para_alterar()"
});
formatter.result({
  "duration": 265600,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_alterar_um_post()"
});
formatter.result({
  "duration": 991428800,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_sucesso()"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Não alterar id de usuário",
  "description": "",
  "id": "jsonplaceholder;não-alterar-id-de-usuário",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@PUT-"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "que tenho name, user e id de um usuário para alterar",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "solicito realizar as alterações no usuário especificado",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "deve retornar status code de sucesso 200",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "deve validar que não alterou id",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefs.que_tenho_name_user_e_id_de_um_usuário_para_alterar()"
});
formatter.result({
  "duration": 548600,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_realizar_as_alterações_no_usuário_especificado()"
});
formatter.result({
  "duration": 961084700,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_sucesso()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_validar_que_não_alterou_id()"
});
formatter.result({
  "duration": 16136000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Deletar post",
  "description": "",
  "id": "jsonplaceholder;deletar-post",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@DELETE+"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "que especifiquei minha requisições em Json",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "solicito deletar um post",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "deve retornar status code de sucesso 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefs.que_especifiquei_minha_requisições_em_Json()"
});
formatter.result({
  "duration": 252200,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_deletar_um_post()"
});
formatter.result({
  "duration": 980281300,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_sucesso()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Retornar erro quando solicito deletar lista de posts",
  "description": "",
  "id": "jsonplaceholder;retornar-erro-quando-solicito-deletar-lista-de-posts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@DELETE-"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "que especifiquei minha requisições em Json",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "solicito deletar uma lista de posts",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "deve retornar status code de erro 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefs.que_especifiquei_minha_requisições_em_Json()"
});
formatter.result({
  "duration": 612200,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.solicito_deletar_uma_lista_de_posts()"
});
formatter.result({
  "duration": 917134500,
  "status": "passed"
});
formatter.match({
  "location": "stepsdefs.deve_retornar_status_code_de_erro()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
});