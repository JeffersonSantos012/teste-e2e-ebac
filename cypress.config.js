const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/commands.js",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
