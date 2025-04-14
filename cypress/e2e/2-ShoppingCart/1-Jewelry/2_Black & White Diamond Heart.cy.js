import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();



describe('Black & White Diamond Heart', () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
   });

  it('Guest Checkout - Credit Card', () => {
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithCC()

  });

  it('Registered User Checkout - Credit Card', () => {
    cy.userLogin()
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserCreditCard()
  });

  it('Guest Checkout - Money Order', () => {
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithMoneyOrder()
  });

  it('Registered User Checkout - Money order', () => {
    cy.userLogin()
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });



});