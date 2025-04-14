import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();



describe('Blue and green Sneaker', () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
   });

  it('Guest Checkout - Credit Card', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.get('#product_attribute_28_7_10').select('8')
    cy.get('#add-to-cart-button-28').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithCC()

  });

  it('Registered User Checkout - Credit Card', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.get('#product_attribute_28_7_10').select('9')
    cy.get('#add-to-cart-button-28').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserCreditCard()
  });

  it('Guest Checkout - Money Order', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.get('#product_attribute_28_7_10').select('10')
    cy.get('#add-to-cart-button-28').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithMoneyOrder()
  });

  it('Registered User Checkout - Money order', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(1).click({ force: true })
    cy.get('#product_attribute_28_7_10').select('11')
    cy.get('#add-to-cart-button-28').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });



});