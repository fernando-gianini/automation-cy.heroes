class newHero {

    selectorList () {
        const selector = {
        newHeroButton : "[href='/heroes/new']", 
        nameField: "[data-cy='nameInput']",
        priceField: "[name='price']",
        fansField: "[data-cy='fansInput']",
        savesField: "[name='saves']",
        powerField: "[data-cy='powersSelect']",
        avatarField: "[type='file']",
        submitButton: ".bg-blue-700",
        verificInvalidCharacter: '.max-w-5xl'


        }

        return selector

    }   

    clickNewHero() {
        cy.get(this.selectorList().newHeroButton).click({force : true})
    }

    createNewHero(name,price,fans,saves) {
        cy.get(this.selectorList().nameField).type(name)
        cy.get(this.selectorList().priceField).type(price)
        cy.get(this.selectorList().fansField).type(fans)
        cy.get(this.selectorList().savesField).type(saves)
        cy.get(this.selectorList().powerField).select('3')
        cy.get(this.selectorList().avatarField).selectFile('avatar2.jpeg', {force : true})
        cy.get(this.selectorList().submitButton).eq(1).click({force: true})
    }
    invalidCharacterFields (name,price,fans,saves) {
        cy.get(this.selectorList().nameField).type(name)
        cy.get(this.selectorList().priceField).type(price)
        cy.get(this.selectorList().fansField).type(fans)
        cy.get(this.selectorList().savesField).type(saves)
        cy.get(this.selectorList().avatarField).selectFile('avatar2bmp.bmp', {force : true})
        cy.get(this.selectorList().submitButton).eq(1).click({force: true})        
        cy.get(this.selectorList().verificInvalidCharacter).contains(/Price is required|Fans is required|Saves is required|Powers is required/).should('exist')
    }
}

export default newHero