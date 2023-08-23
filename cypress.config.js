const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app/', //cuando se repite la misma página se agrega acá y en los casos de prueba al dejar el visit vacío asume que es esta
    watchForFileChanges: false, //para que no se ejecuten los casos cada vez q se guarde en el ide
  },
});
