
export class GiftCardsPage {

    webSelectors ={

        recipientsName:'#giftcard_1_RecipientName',
        recipientsEmail:'#giftcard_1_RecipientEmail',
        yourName:'#giftcard_1_SenderName',
        yourEmail: '#giftcard_1_SenderEmail',
        message:'#giftcard_1_Message'


    }

    pageActions = {
        enterRecipientsName: () => cy.get(this.webSelectors.recipientsName),
        enterRecipientsEmail: () => cy.get(this.webSelectors.recipientsEmail),
        enterYourName: () => cy.get(this.webSelectors.yourName),
        enterYourEmail: () => cy.get(this.webSelectors.yourEmail),
        enterMessage: () => cy.get(this.webSelectors.message)

    }
}