import { Environment } from "../../support/helpers/environs";
import { UserLogin } from "../../support/pageObjects/loginPage";
import {UserRegistration} from "../../support/pageObjects/userRegistration"
const userRegistration = new UserRegistration();
const loginPage = new UserLogin();
const baseUrl = Environment.getBaseUrl();


describe('Reset password for multiple users from fixture', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    loginPage.pageActions.clickLoginLink().click(); // ensures login form is visible
  });

  it('Logs in and resets password to Password1234', () => {
    cy.fixture('userChangePwd').then((users) => {
      users.forEach((user) => {
        const email = user.Email;
        const password = 'red123';

        // Login
        cy.pwdReset(email, password);

        // Navigate and reset password
        userRegistration.pageAction.clickMyAccount().click();
        userRegistration.pageAction.clickChangePassword().click();

        userRegistration.pageAction.enterOldPassword().type(password);
        userRegistration.pageAction.enterNewPassword().type(password);
        userRegistration.pageAction.enterConfirmNewPassword().type(password);
        userRegistration.pageAction.clickChangePasswordButton().click();

        // Verify reset
        userRegistration.pageAction.verifyChangePasswordMessage()
          .should("contain.text", "Password was changed");

        // Log out
        cy.get('.ico-logout').click();

        // Visit homepage again for next user
        cy.visit(baseUrl);
        loginPage.pageActions.clickLoginLink().click();
      });
    });
  });
});
