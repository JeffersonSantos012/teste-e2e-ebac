/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
 cy.get('.icon-user-unfollow').click()
     cy.login('jefvc@gmail.com', 'jef1514')
     cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').clear().type('Jefferson')
      cy.get('#account_last_name').clear().type('Vasconcelos')
      cy.get('.woocommerce-Button').click()
     // cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
     cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').eq(1).click()
      cy.get('.button-variable-item-XS').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.input-text').clear().type('2')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho')
      cy.get('.woocommerce-message > .button').click()
     
  });

})