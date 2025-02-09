class buyHeroPage {

    selectorList () {
        const selector = {
            buyHeroButton: "[data-cy='money']",
            buyConfirmationScreen:".shadow-lg",
            confirmBuyHeroButton: ".bg-red-600",
            negativeBuyHeroButton: ".gap-4 > .gap-2 > .text-gray-800"
    }

    return selector

    }

    confirmBuyHero () {
        cy.get(this.selectorList().buyHeroButton).eq(0).click()
        cy.get(this.selectorList().buyConfirmationScreen).should('exist')
        cy.get(this.selectorList().confirmBuyHeroButton).click()
    }
    negativeBuyHero () {
        cy.get(this.selectorList().buyHeroButton).eq(0).click()
        cy.get(this.selectorList().buyConfirmationScreen).should('exist')
        cy.get(this.selectorList().negativeBuyHeroButton).click()

    }
}

export default buyHeroPage