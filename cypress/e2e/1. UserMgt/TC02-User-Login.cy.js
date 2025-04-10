import { Environment } from "../../support/helpers/environs";
import { UserLogin } from "../../support/pageObjects/loginPage";

const baseUrl = Environment.getBaseUrl();
const loginPage = new UserLogin();

describe("User Login", () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      loginPage.pageActions.clickLoginLink().click(); // or the correct login route
    });
  
    it("TC01 - Login with valid credentials", () => {
      loginPage.pageActions.enterEmail().type("colleen@aol.com");
      loginPage.pageActions.enterPassword().type("red123");
      loginPage.pageActions.clickLoginButton().click();
      cy.get(".header-links > ul > :nth-child(1) > .account").should("have.text","colleen@aol.com");
    });
  
    it("TC02 - Login with empty fields", () => {
      loginPage.pageActions.enterEmail().clear(); // optional, ensures the field is empty
      loginPage.pageActions.enterPassword().clear();
      loginPage.pageActions.clickLoginButton().click();
      cy.assertAnyValidationMessage("Login was unsuccessful. Please correct the errors and try again.");
    });
  
    it("TC3 - Login with invalid credentials", () => {
      loginPage.pageActions.enterEmail().type("colleen@aol.com");
      loginPage.pageActions.enterPassword().type("red12344");
      loginPage.pageActions.clickLoginButton().click(); 
      cy.assertAnyValidationMessage("The credentials provided are incorrect")
    });
  
    it('TC4 - Forgot password', () => {
      loginPage.pageActions.clickForgotPwdLink().click()
      loginPage.pageActions.enterEmail().type('antia@live.co.uk')
      loginPage.pageActions.clickRecoverButton().click()
      loginPage.pageActions.verifyRecoveryMessage().should("contain.text", 'Email with instructions has been sent to you.')
    })
  
    it('TC5 - Verify successful logout', () => {
      loginPage.pageActions.enterEmail().type("colleen@aol.com");
      loginPage.pageActions.enterPassword().type("red123");
      loginPage.pageActions.clickLoginButton().click();
      cy.get(".header-links > ul > :nth-child(1) > .account").should("have.text","colleen@aol.com");
      cy.get('.ico-logout').click()
      loginPage.pageActions.clickLoginLink().should("have.text","Log in");
    });
  
  });