class loginPage {

    selectorList()  {
        const selector = {
        loginButton : 'li > .undefined',
        confirmLoginCamp : '.shadow-lg',
        emailField: '[type="email"]',
        passwordField:'[type="password"]',
        signInButton: 'button.bg-blue-700', 
        loginFieldNotFilled: '.text-red-500',
        }

        return selector
    }

    accessPage() {
        cy.visit('/')
    }

    clickLoginPage() {
        cy.get(this.selectorList().loginButton).click({force : true})
        cy.get(this.selectorList().confirmLoginCamp).contains(/Login|Email|Password| Sign In/).should('exist')
    }

    loginWithAnyUser(email,password) {
        cy.get(this.selectorList().emailField).type(email)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().signInButton).click({force : true})
        cy.get(this.selectorList().loginButton).contains(/Logout/).should('exist')
    }

    loginWithAnyUser(email,password) {
        cy.get(this.selectorList().emailField).type(email)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().signInButton).click({force : true})      
    }

    alertLoginError () {
        cy.get(this.selectorList().loginFieldNotFilled).contains(/Email is required|Password is required|Invalid email or password|Email is not valid/).should('exist')
    }
}

 export default loginPage