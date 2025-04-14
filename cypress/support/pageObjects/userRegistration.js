
export class UserRegistration {

    webSelectors = {
        registerLink: '.ico-register',
        maleGender: "#gender-male",
        femaleGender: "#gender-female",
        firstName: "#FirstName",
        lastName: "#LastName",
        email: "#Email",
        password: "#Password",
        confirmPassword: "#ConfirmPassword",
        registerButton: "#register-button",
        messageRegComplete: ".result",
        clickMyAccount:".my-account > ul > :nth-child(1) > .account",
        clickChangePassword:":nth-child(7) > .inactive",
        oldPassword:"#OldPassword",
        newPassword:"#NewPassword",
        confirmNewPassword:"#ConfirmNewPassword",
        changePasswordButton:".buttons > .button-1",
        messageChangePassword:".result",
    }

    pageAction = {
    clickRegisterLink: () => cy.get(this.webSelectors.registerLink),
    selectMaleGender: () => cy.get(this.webSelectors.maleGender),
    selectFemaleGender: () => cy.get(this.webSelectors.femaleGender),
    enterFirstName: () => cy.get(this.webSelectors.firstName),
    enterLastName: () => cy.get(this.webSelectors.lastName),
    enterEmail: () => cy.get(this.webSelectors.email),
    enterPassword: () => cy.get(this.webSelectors.password),
    enterConfirmPassword: () => cy.get(this.webSelectors.confirmPassword),
    clickRegisterButton: () => cy.get(this.webSelectors.registerButton),
    verifyRegistrationComplete: () => cy.get(this.webSelectors.messageRegComplete),
    clickMyAccount: () => cy.get(this.webSelectors.clickMyAccount),
    clickChangePassword: () => cy.get(this.webSelectors.clickChangePassword),
    enterOldPassword: () => cy.get(this.webSelectors.oldPassword),
    enterNewPassword: () => cy.get(this.webSelectors.newPassword),
    enterConfirmNewPassword: () => cy.get(this.webSelectors.confirmNewPassword),
    clickChangePasswordButton: () => cy.get(this.webSelectors.changePasswordButton),
    verifyChangePasswordMessage: () => cy.get(this.webSelectors.messageChangePassword),

    }

}