import { Environment } from "../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Wishlist', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        
    });
    
    it('Add to wish list - 50s Rockabilly Polka Dot Top JR Plus Size', () => {
        cy.linkText().contains('Apparel & Shoes').click({ force: true })
        cy.AddToCartBtn().eq(0).click({ force: true })
        cy.get('#add-to-wishlist-button-5').click()
        cy.get('.content > a').click()
        cy.get('.product > a').should('include.text', 'Rockabilly');
        cy.get('.remove-from-cart').click()
        cy.get('.update-wishlist-button').click()
        cy.get('.wishlist-content').should('include.text', 'The wishlist is empty!')
        
    });

    it('Add to wish list - Blue and green Sneaker', () => {
        cy.linkText().contains('Apparel & Shoes').click({ force: true })
        cy.AddToCartBtn().eq(1).click({ force: true })
        cy.get('#add-to-wishlist-button-28').click()
        cy.get('.content > a').click()
        cy.get('.product > a').should('include.text', 'Blue and green Sneaker');
        cy.get('.remove-from-cart').click()
        cy.get('.update-wishlist-button').click()
        cy.get('.wishlist-content').should('include.text', 'The wishlist is empty!')
    });

    it('Add to wish list - Smartphone', () => {
        cy.get('.top-menu > :nth-child(3)').click({ force: true })
        cy.linkText().contains('Cell phones').click({ force: true })
        cy.get(':nth-child(1) > .product-item > .picture > a > img').click({ force: true })
        cy.get('#add-to-wishlist-button-43').click()
        cy.get('.content > a').click()
        cy.get('.product > a').should('include.text', 'Smartphone');
        cy.get('.remove-from-cart').click()
        cy.get('.update-wishlist-button').click()
        cy.get('.wishlist-content').should('include.text', 'The wishlist is empty!')
    });

    it('Add to wish list - Black & White Diamond Heart', () => {
        cy.linkText().contains('Jewelry').click({ force: true })
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click({ force: true })
        cy.get('#add-to-wishlist-button-14').click()
        cy.get('.content > a').click()
        cy.get('.product > a').should('include.text', 'Black & White Diamond Heart');
        cy.get('.remove-from-cart').click()
        cy.get('.update-wishlist-button').click()
        cy.get('.wishlist-content').should('include.text', 'The wishlist is empty!')
    });

    
}); 