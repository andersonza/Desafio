package steps;

import cucumber.api.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import org.junit.Test;

import static pages.Constantes.*;

public class stepsdefs {
    Response response;
    RequestSpecification requestSpecification;

    @Test
    @Given("^que especifiquei minha requisições em Json$")
    public void que_especifiquei_minha_requisições_em_Json() {
        RestAssured.baseURI = APP_BASE_URL;
        RestAssured.port = APP_PORT;
        RestAssured.basePath = APP_BASE_PATH;

        requestSpecification = RestAssured.given();
    }

    @When("^solicito acesso a área de usuários$")
    public void solicito_acesso_a_área_de_usuários() {
        response = requestSpecification.get("/users");
    }

    @Then("^deve retornar status code de sucesso 200$")
    public void deve_retornar_status_code_de_sucesso(){
        Assert.assertEquals(200, response.statusCode());
    }

    @Then("^deve retornar uma lista com 10 usuários$")
    public void deve_retornar_uma_lista_com_usuários() {
        int qtdeItens = response.body().path("id.size()");
        Assert.assertEquals(10,qtdeItens);
    }

    @When("^solicito acesso a área de um usuário inexistente$")
    public void solicito_acesso_a_área_de_um_usuário_inexistente() {
        response = requestSpecification.get("/users/11");
    }

    @Then("^deve retornar status code de erro 404$")
    public void deve_retornar_status_code_de_erro() {
        Assert.assertEquals(404, response.statusCode());
    }

    @Given("^que possuo um post para adicionar sem informar id$")
    public void que_possuo_um_post_para_adicionar_sem_informar_id() {
        requestSpecification = RestAssured.given().body("{\"userId\": 1," +
                "\"title\": \"teste\"," +
                "\"body\": \"Esse é um teste\"}");
    }

    @When("^solicito adicionar o post na área de posts$")
    public void solicito_adicionar_o_post_na_área_de_posts() {
        response = requestSpecification.post("/posts");
    }

    @Then("^deve retornar status code de post com sucesso 201$")
    public void deve_retornar_status_code_de_post_com_sucesso(){
        Assert.assertEquals(201, response.statusCode());
    }

    @Then("^deve retornar o id padrão do post 101$")
    public void deve_retornar_o_id_padrão_do_post() {
        int id = response.body().path("id");
        Assert.assertEquals(101, id);
    }

    @Given("^que possuo um post para adicionar informando id$")
    public void que_possuo_um_post_para_adicionar_informando_id() {
        requestSpecification = RestAssured.given().body("{\"userId\": 3," +
                "\"title\": \"teste2\"," +
                "\"body\": \"Esse é o segundo teste\"," +
                "\"id\": 2}");
    }

    @Given("^que tenho o nome de um post para alterar$")
    public void que_tenho_o_nome_de_um_post_para_alterar() {
        requestSpecification = RestAssured.given().body("{\"title\": \"teste4\"}");
    }

    @When("^solicito alterar um post$")
    public void solicito_alterar_um_post() {
        response = requestSpecification.put("/posts/1");
    }

    @Given("^que tenho name, user e id de um usuário para alterar$")
    public void que_tenho_name_user_e_id_de_um_usuário_para_alterar() {
        requestSpecification = RestAssured.given().body("{\"name\": \"Joaquim\"," +
                "\"user\": \"joa.quim\"," +
                "\"id\": 2}");
    }

    @When("^solicito realizar as alterações no usuário especificado$")
    public void solicito_realizar_as_alterações_no_usuário_especificado() {
        response = requestSpecification.put("/users/1");
    }

    @Then("^deve validar que não alterou id$")
    public void deve_validar_que_não_alterou_id() {
        int id = response.body().path("id");
        Assert.assertEquals(1, id);
    }

    @When("^solicito deletar um post$")
    public void solicito_deletar_um_post() {
        response = requestSpecification.delete("/posts/1");
    }

    @When("^solicito deletar uma lista de posts$")
    public void solicito_deletar_uma_lista_de_posts() {
        response = requestSpecification.delete("/posts");
    }

}
