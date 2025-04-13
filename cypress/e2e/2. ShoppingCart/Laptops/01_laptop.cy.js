import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Laptop Shopping baskets', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        });

    it('14.1-inch Laptop - checkout-as-guest-with-credit-card', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Notebooks').click({ force: true })
        cy.AddToCartBtn().eq(0).click({ force: true })
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.checkoutAsguestwithCC()
    });

    it('14.1-inch Laptop - checkout-as-registeredUser-with-credit-card ', () => {
        cy.userLogin()
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Notebooks').click({ force: true })
        cy.AddToCartBtn().eq(0).click({ force: true })
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.registerUserCreditCard()
    });

    it('14.1-inch Laptop - checkout_guest_money_order', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Notebooks').click({ force: true })
        cy.AddToCartBtn().eq(0).click({ force: true })
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.checkoutAsguestwithMoneyOrder()
    });

    it('14.1-inch Laptop - checkout_registeredUser_money_order', () => {
        cy.userLogin()
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Notebooks').click({ force: true })
        cy.AddToCartBtn().eq(0).click({ force: true })
        cy.shoppingCart()
        cy.termsofservice()
        cy.checkOutBtn()
        cy.registerUserMoneyOrder()
    });
});