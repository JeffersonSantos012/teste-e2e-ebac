class productPage {

    visitarLoja(){
        cy.visit('produtos')
    }

 buscarProduto(nomeProduto) {
  cy.get('.products .row')
    .contains(nomeProduto)
    .click();
}

addProdutoCarrinho() {
  cy.get('.button-variable-item-33').click();
  cy.get('.button-variable-item-Brown').click();
  cy.get('.input-text').clear().type(2);
  cy.get('.single_add_to_cart_button').click();
}
}
export default new productPage()