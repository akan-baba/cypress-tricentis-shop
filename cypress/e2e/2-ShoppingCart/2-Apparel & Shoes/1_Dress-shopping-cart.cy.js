import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();



describe('Rockabilly Polka Dot Top JR Plus Size basket', () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
   });

  it('Guest Checkout - Credit Card', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_5_7_1').select('3')
    cy.get('#add-to-cart-button-5').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithCC()

  });

  it('Registered User Checkout - Credit Card', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_5_7_1').select('4')
    cy.get('#add-to-cart-button-5').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserCreditCard()
  });

  it('Guest Checkout - Money Order', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_5_7_1').select('5')
    cy.get('#add-to-cart-button-5').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithMoneyOrder()
  });

  it('Registered User Checkout - Money order', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_5_7_1').select('6')
    cy.get('#add-to-cart-button-5').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });



});