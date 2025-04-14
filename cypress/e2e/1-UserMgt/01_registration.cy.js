
import {Environment} from "../../support/helpers/environs"
import {UserRegistration} from "../../support/pageObjects/userRegistration"
import { faker } from "@faker-js/faker";

const userRegistration = new UserRegistration();
const baseUrl = Environment.getBaseUrl();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

describe('User Registration Form', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
        userRegistration.pageAction.clickRegisterLink().click()
        
    });
    it('Register a new user with valid credentials', () => {
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type(email)
        userRegistration.pageAction.enterPassword('Password123').type('Password123')
        userRegistration.pageAction.enterConfirmPassword('Password123').type('Password123')
        userRegistration.pageAction.clickRegisterButton().click()
        userRegistration.pageAction.verifyRegistrationComplete().should("contain.text", "Your registration completed")
    });

    it('Register with an existing email (expect error)', () => {
        userRegistration.pageAction.clickRegisterLink().click();
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type('Lauretta_Sporer@yahoo.com')
        userRegistration.pageAction.enterPassword().type('red1234')
        userRegistration.pageAction.enterConfirmPassword().type('red1234')
        userRegistration.pageAction.clickRegisterButton().click()
        cy.assertAnyValidationMessage("The specified email already exists");
    });

    it('Register with invalid email format', () => {
        userRegistration.pageAction.clickRegisterLink().click();
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type('Lauretta_Sporer')
        userRegistration.pageAction.enterPassword().type('red1234')
        userRegistration.pageAction.enterConfirmPassword().type('red1234')
        userRegistration.pageAction.clickRegisterButton().click()
        cy.assertAnyValidationMessage("Wrong email");
    });

    it('Register with weak password ', () => {
        userRegistration.pageAction.clickRegisterLink().click();
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type('Lauretta_Sporer')
        userRegistration.pageAction.enterPassword().type('red1')
        userRegistration.pageAction.enterConfirmPassword().type('red1234')
        cy.assertAnyValidationMessage("The password should have at least 6 characters.");
    });

    it('Password and confirm password mismatch', () => {
        userRegistration.pageAction.clickRegisterLink().click();
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type('Lauretta_Sporer@aol.com')
        userRegistration.pageAction.enterPassword().type('red1')
        userRegistration.pageAction.enterConfirmPassword().type('red1234')
        //cy.assertAnyValidationMessage("The password and confirmation password do not match.");
    });

    it('Register with a blank password', () => {
        userRegistration.pageAction.clickRegisterLink().click();
        userRegistration.pageAction.selectMaleGender().click()
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type('Lauretta_Sporer@aol.com')
        userRegistration.pageAction.clickRegisterButton().click()
        cy.assertAnyValidationMessage("Password is required.");
    });

    it('Register with a blank email', () => {
        userRegistration.pageAction.selectMaleGender().click().should('be.checked');
        userRegistration.pageAction.selectFemaleGender().should('not.be.checked');
        userRegistration.pageAction.enterFirstName().type(firstname)
        userRegistration.pageAction.enterLastName().type(lastname)
        userRegistration.pageAction.enterEmail().type().clear()
        userRegistration.pageAction.enterPassword('Password123').type('Password123')
        userRegistration.pageAction.enterConfirmPassword('Password123').type('Password123')
        userRegistration.pageAction.clickRegisterButton().click()
        cy.assertAnyValidationMessage("Email is required.");
    });


});