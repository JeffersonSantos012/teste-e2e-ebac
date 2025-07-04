/// <reference types="cypress" />

import productPage from "../support/page_objects/productPage";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
  })
   
  it.only('Deve fazer um pedido na loja Ebac', () => { 
    productPage.visitarLoja();
    productPage.buscarProduto('Aether Gym Pant');
    productPage.addProdutoCarrinho('34', 'Black', 1);
   // cy.get('.woocommerce-message').should('contain', '  no seu carrinho.');
    
    cy.get('.woocommerce-message > .button').click();
    cy.get('.checkout-button').click(); 
   
  })