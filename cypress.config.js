const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    //baseUrl: '',
    env: {
      quizw2_url: 'https://demowebshop.tricentis.com/',
      email_quizw2: 'hafiztest@email.com',
      password_quizw2: 'test123',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
