Cypress.Commands.add('login', (_usuario, _senha) => {
  cy.get('#username').type(_usuario)
  cy.get('#password').type(_senha)

})  
