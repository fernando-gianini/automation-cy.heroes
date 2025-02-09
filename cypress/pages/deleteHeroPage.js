class deleteHeroPage {

    selectorList () {
       const selector = {
        deleteButton: "[data-cy='trash']",
        deleteConfirmationScreen: ".text-gray-900",
        confirmDeleteButton: ".bg-red-600",
        negativeDeleteButton: ".gap-4 > .gap-2 > .text-gray-800"
       }

       return selector

    }
    confirmDeleteHero () {
        cy.get(this.selectorList().deleteButton).eq(0).click('')
        cy.get(this.selectorList().deleteConfirmationScreen).should('exist')
        cy.get(this.selectorList().confirmDeleteButton).click('')
    }
    negativeDeleteHero () {
        cy.get(this.selectorList().deleteButton).eq(0).click('')
        cy.get(this.selectorList().deleteConfirmationScreen).should('exist')
        cy.get(this.selectorList().negativeDeleteButton).click('')
    }
}

export default deleteHeroPage