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
      
  });
it('deve fazer login com sucesso', () => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
  cy.login('jefs@gmail.com', 'jef151511')
  cy.get(':nth-child(4) > .button').click()
  cy.get('.page-title').should('contain', 'Minha conta')
})

})