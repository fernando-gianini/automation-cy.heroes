import userData from '../../fixtures/userdata.json'
import loginPage from '../../pages/loginPage'
import deleteHeroPage from '../../pages/deleteHeroPage'

const LoginPage = new loginPage ()
const DeleteHeroPage = new deleteHeroPage ()
 
describe ('Delete Hero', () => {
   it('Confirm Delete Hero', () => {
        LoginPage.accessPage()
        LoginPage.clickLoginPage()
        LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
        DeleteHeroPage.confirmDeleteHero()
})
    })
   it('Negative Delete Hero', () => {
        LoginPage.accessPage()
        LoginPage.clickLoginPage()
        LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
        DeleteHeroPage.negativeDeleteHero()
})
