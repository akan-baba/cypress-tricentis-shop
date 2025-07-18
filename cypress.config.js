import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: 'https://demowebshop.tricentis.com',
    experimentalRunAllSpecs: true,
    pageLoadTimeout: 60000,
    video: true,
  },
});

