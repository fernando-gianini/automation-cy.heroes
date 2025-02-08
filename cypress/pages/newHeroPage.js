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
        submitButton: ".bg-blue-700"


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
        

    }
}

export default newHero