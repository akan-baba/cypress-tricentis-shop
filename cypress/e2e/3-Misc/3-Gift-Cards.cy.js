import { Environment } from "../../support/helpers/environs";
import { GiftCardsPage } from "../../support/pageObjects/giftCardsPage";
const baseUrl = Environment.getBaseUrl();
const giftCardsPage = new GiftCardsPage();
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const name = faker.person.firstName();
const lastName = faker.person.lastName();



describe('Gift Cards', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Gift Cards').click({ force: true })
    });
    it('$5 Virtual Gift Card', () => {
        cy.AddToCartBtn().eq(0).click({ force: true })
        giftCardsPage.pageActions.enterRecipientsName().type(name)
        giftCardsPage.pageActions.enterRecipientsEmail().type(email)
        giftCardsPage.pageActions.enterYourName().type(lastName)
        giftCardsPage.pageActions.enterYourEmail().type(email)
        giftCardsPage.pageActions.enterMessage().type('Happy Birthday!')
        cy.get('#add-to-cart-button-1').click()
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.giftCardCheckout()
    });

    it('$25 Virtual Gift Card', () => {
        cy.AddToCartBtn().eq(1).click({ force: true })
        cy.get('#giftcard_2_RecipientName').type(name)
        cy.get('#giftcard_2_RecipientEmail').type(email)
        cy.get('#giftcard_2_SenderName').type(lastName)
        cy.get('#giftcard_2_SenderEmail').type(email)
        cy.get('#giftcard_2_Message').type('Happy Birthday!')
        cy.get('#add-to-cart-button-2').click()
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.giftCardCheckout()
    });

});