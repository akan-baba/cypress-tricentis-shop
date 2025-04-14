const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    pageLoadTimeout: 690000,
    video: true,
  },
  reporter: 'cypress-mochawesome-reporter', // optional fallback
  reporterOptions: {
    reportDir: 'allure-results',
    overwrite: true,
    html: false,
    json: true
  },
});
