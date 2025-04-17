import { Environment } from "../../support/helpers/environs";
const baseUrl = Environment.getBaseUrl();


describe('Sitemap Link Tests', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Sitemap').click({ force: true })
    });

    it('Checks all sitemap links navigate correctly', () => {
        cy.linkText().contains('Books').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Books')
        cy.go('back');

        //Computers
        cy.linkText().contains('Computers').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Computers')
        cy.go('back');

        //Electronics
        cy.linkText().contains('Electronics').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Electronics')
        cy.go('back');

        //Desktops
        cy.linkText().contains('Desktops').click({ force: true })   
        cy.get("div[class='page-title'] h1").should('have.text', 'Desktops')
        cy.go('back');

        //Notebooks
        cy.linkText().contains('Notebooks').click({ force: true })      
        cy.get("div[class='page-title'] h1").should('have.text', 'Notebooks')
        cy.go('back');

        //apparel-shoes 
        cy.linkText().contains('Apparel & Shoes').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Apparel & Shoes')
        cy.go('back');

       //gift-cards
        cy.linkText().contains('Gift Cards').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Gift Cards')
        cy.go('back');

        //cameras-photo
        cy.linkText().contains('Camera, photo').click({ force: true });
        cy.get("div.page-title h1").should('have.text', 'Camera, photo');
        cy.go('back');

        //cell-phones
        cy.linkText().contains('Cell').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Cell phones')
        cy.go('back');

       //Digital downloads
        cy.linkText().contains('Digital downloads').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Digital downloads')
        cy.go('back');

        //Jewelry
        cy.linkText().contains('Jewelry').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Jewelry')
        cy.go('back')

        //Accessories
        cy.linkText().contains('Accessories').click({ force: true })
        cy.get("div[class='page-title'] h1").should('have.text', 'Accessories')
        cy.go('back')

        





        
    });
    
});