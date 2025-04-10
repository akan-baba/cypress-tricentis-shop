import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
Cypress.Commands.add("checkoutAsguestwithCC", () => {
   cy.get("input[value='Checkout as Guest']").click()
   cy.get("#BillingNewAddress_FirstName").type(firstname)
   cy.get("#BillingNewAddress_LastName").type(lastname)
   cy.get("#BillingNewAddress_Email").type(email)
   cy.get("#BillingNewAddress_CountryId").select('80')
   cy.get("#BillingNewAddress_City").type('Manchy')
   cy.get("#BillingNewAddress_Address1").type('2 Grange Avenue')
   cy.get("#BillingNewAddress_ZipPostalCode").type('M1 7RJ')
   cy.get("#BillingNewAddress_PhoneNumber").type('0162251085')
   cy.get("input[onclick='Billing.save()']").click() //Continue button
   cy.get("input[onclick='Shipping.save()']").click() //Continue button
   cy.get("input[class='button-1 shipping-method-next-step-button']").click() //Continue button
   cy.get('#paymentmethod_2').click()
   cy.get("input[class='button-1 payment-method-next-step-button']").click() // Continue button
   cy.get("#CardholderName").type('Joe Doe')
   cy.get("#CardNumber").type('5555 5555 5555 4444')
   cy.get("#ExpireMonth").select('5')
   cy.get("#ExpireYear").select('2039')
   cy.get('#CardCode').type('528')
   cy.get("input[class='button-1 payment-info-next-step-button']").click() // Continue button
   cy.get("input[value='Confirm']").click()
   cy.get("div[class='title'] strong").should('have.text', 'Your order has been successfully processed!')
   cy.get("input[value='Continue']").click()
   
  })