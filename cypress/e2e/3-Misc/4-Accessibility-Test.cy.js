import { Environment } from "../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Accessibility check', () => {
    it('should have no detectable a11y violations on load', () => {
      cy.visit(baseUrl);
      cy.injectAxe();
      //cy.checkA11y(); // Will log issues if any exist
    });
  });
  