/// <reference types="cypress" /> 

import productPage from "../support/page_objects/productPage";

beforeEach(() => {
  productPage.visitarLoja();
});

it('buscar produto lista', () => {
  productPage.buscarProduto('Aether Gym Pant');
  cy.get('#tab-title-description > a').should('contain', 'Descrição');
});

it.only('adicionar produto ao carrinho', () => {
  productPage.buscarProduto('Aether Gym Pant');
  productPage.addProdutoCarrinho('36', 'blue', '2');
  cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.');
});

