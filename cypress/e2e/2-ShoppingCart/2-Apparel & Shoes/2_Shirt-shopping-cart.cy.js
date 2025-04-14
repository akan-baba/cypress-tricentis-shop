import { Environment } from "../../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();



describe('Mens Wrinkle Free Long Sleeve shirt', () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
   });

  it('Guest Checkout - Credit Card', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.get("li[class='individual-page'] a").click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_10_7_36').select('109')
    cy.get('#add-to-cart-button-10').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithCC()

  });

  it('Registered User Checkout - Credit Card', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.get("li[class='individual-page'] a").click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_10_7_36').select('110')
    cy.get('#add-to-cart-button-10').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserCreditCard()
  });

  it('Guest Checkout - Money Order', () => {
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.get("li[class='individual-page'] a").click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_10_7_36').select('111')
    cy.get('#add-to-cart-button-10').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.checkoutAsguestwithMoneyOrder()
  });

  it('Registered User Checkout - Money order', () => {
    cy.userLogin()
    cy.linkText().contains('Apparel & Shoes').click({ force: true })
    cy.get("li[class='individual-page'] a").click({ force: true })
    cy.AddToCartBtn().eq(0).click({ force: true })
    cy.get('#product_attribute_10_7_36').select('110')
    cy.get('#add-to-cart-button-10').click()
    cy.shoppingCart()
    cy.termsofservice()
    cy.checkOutBtn()
    cy.registerUserMoneyOrder()
    
  });



});