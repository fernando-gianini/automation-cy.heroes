class editHero {

    selectorList () {
        const selector = {
            editHeroButton: "[data-cy='pencil']",
            editDetailNameField: '[data-cy="nameInput"]',
            editDetailPriceField: '[data-cy="priceInput"]',
            editDetailFansField: '[data-cy="fansInput"]',
            editDetailSavesField: '[data-cy="savesInput"]',
            editDetailPowerField: '[data-cy="powersSelect"]',
            editDetailAvatarField: '[data-cy="avatarFile"]',
            submitEditButton: '.bg-blue-700',
            deleteHeroButton: '.bg-red-600',
            popUpDeleteHero: '.shadow-lg',
            confirmDeleteHeroButton: '.bg-red-600',
            negativeDeleteHeroButton: '.justify-end .border',
            verificInvalidCharacter: '.shadow-md'
        }

        return selector
    }

    accessEditHeroPage () {
        cy.get(this.selectorList().editHeroButton).eq(0).click()
    }
    editDetailHero (name,price,fans,saves) {
        cy.get(this.selectorList().editDetailNameField).clear('').type(name)
        cy.get(this.selectorList().editDetailPriceField).clear('').type(price)
        cy.get(this.selectorList().editDetailFansField).clear('').type(fans)
        cy.get(this.selectorList().editDetailSavesField).clear('').type(saves)
        cy.get(this.selectorList().editDetailPowerField).select('3')
        cy.get(this.selectorList().editDetailAvatarField).selectFile('avatar2.jpeg', {force : true})
        cy.get(this.selectorList().submitEditButton).eq(1).click({force: true})       
    }
    invalidCharacterFields (name,price,fans,saves) {
        cy.get(this.selectorList().editDetailNameField).clear('').type(name)
        cy.get(this.selectorList().editDetailPriceField).clear('').type(price)
        cy.get(this.selectorList().editDetailFansField).clear('').type(fans)
        cy.get(this.selectorList().editDetailSavesField).clear('').type(saves)
        cy.get(this.selectorList().editDetailAvatarField).selectFile('avatar2bmp.bmp', {force : true})
        cy.get(this.selectorList().submitEditButton).eq(1).click({force: true})        
        cy.get(this.selectorList().verificInvalidCharacter).contains(/Price is required|Fans is required|Saves is required|Powers is required/).should('exist')
    }
    confirmDeleteHeroEditPage () {
        cy.get(this.selectorList().deleteHeroButton).click()
        cy.get(this.selectorList().popUpDeleteHero).should('exist')
        cy.get(this.selectorList().confirmDeleteHeroButton).eq(1).click('')
    }
    negativeDeleteHeroEditPage () {
        cy.get(this.selectorList().deleteHeroButton).click()
        cy.get(this.selectorList().popUpDeleteHero).should('exist')
        cy.get(this.selectorList().negativeDeleteHeroButton).eq(0).click('')
    }
    
}

export default editHero