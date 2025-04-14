import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();



describe('Create Your Own Jewelry', () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
   });

  it('Guest Checkout - Credit Card', () => {
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_71_9_15').select('45')
    cy.get('#product_attribute_71_10_16').type('10')
    cy.radioBtn().eq(0).click({ force: true })
    cy.get('#add-to-cart-button-71').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithCC()

  });

  it('Registered User Checkout - Credit Card', () => {
    cy.userLogin()
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_71_9_15').select('46')
    cy.get('#product_attribute_71_10_16').type('12')
    cy.radioBtn().eq(1).click({ force: true })
    cy.get('#add-to-cart-button-71').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserCreditCard()
  });

  it('Guest Checkout - Money Order', () => {
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_71_9_15').select('47')
    cy.get('#product_attribute_71_10_16').type('13')
    cy.radioBtn().eq(3).click({ force: true })
    cy.get('#add-to-cart-button-71').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithMoneyOrder()
  });

  it('Registered User Checkout - Money order', () => {
    cy.userLogin()
    cy.linkText().contains('Jewelry').click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_71_9_15').select('45')
    cy.get('#product_attribute_71_10_16').type('14')
    cy.radioBtn().eq(2).click({ force: true })
    cy.get('#add-to-cart-button-71').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });



});