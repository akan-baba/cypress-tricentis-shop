import { Environment } from "../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Contact Us Form Automation', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.linkText().contains('Contact us').click({ force: true })
  });

  it('Submits form with valid data', () => {
    cy.get('#FullName').type('Joe Doe');
    cy.get('#Email').type('akan@example.com');
    cy.get('#Enquiry').type('This is a valid test enquiry.');
    cy.get('form > .buttons > .button-1').click();
    cy.contains('Your enquiry has been successfully sent').should('be.visible');
  });

  it('Shows validation errors when fields are blank', () => {
    cy.get('form > .buttons > .button-1').click();
    cy.get('.field-validation-error').should('have.length.at.least', 1);
  });

  it('Shows error for invalid email', () => {
    cy.get('#FullName').type('joe doe');
    cy.get('#Email').type('invalid-email');
    cy.get('#Enquiry').type('Testing invalid email format');
    cy.get('form > .buttons > .button-1').click();
    cy.contains('Wrong email').should('exist');
  });

  it('Submits with a long enquiry message', () => {
    const longMessage = 'A'.repeat(600);
    cy.get('#FullName').type('Long User');
    cy.get('#Email').type('long@example.com');
    cy.get('#Enquiry').type(longMessage);
    cy.get('form > .buttons > .button-1').click();
    cy.contains('Your enquiry has been successfully sent').should('be.visible');
  });
});
