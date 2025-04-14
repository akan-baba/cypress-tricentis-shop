import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Registered User Checkout - Money order', () => {

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.userLogin()
    cy.linkText().contains('Computers').click({ force: true })
    cy.linkText().contains('Desktops').click({ force: true })
  });

  it('Build your own cheap computer', () => {
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.radioBtn().eq(0).click({ force: true })
    cy.radioBtn().eq(3).click({ force: true })
    cy.radioBtn().eq(7).click({ force: true })
    cy.checkBox().eq(0).click({ force: true })
    cy.get('#add-to-cart-button-72').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });

  it('Build your own computer', () => {
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.radioBtn().eq(0).click({ force: true })
    cy.radioBtn().eq(3).click({ force: true })
    cy.get('#add-to-cart-button-16').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()

});

it('Build your own expensive computer', () => {
    cy.AddToCartBtn().eq(2).click({ force: true })
    cy.checkBox().eq(0).click({ force: true })
    cy.get('#add-to-cart-button-74').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
});

    
});