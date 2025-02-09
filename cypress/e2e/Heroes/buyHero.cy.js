import userData from '../../fixtures/userdata.json'
import loginPage from '../../pages/loginPage'
import buyHeroPage from '../../pages/buyHeroPage'

const LoginPage = new loginPage ()
const BuyHeroPage = new buyHeroPage ()
 
describe ('Buy Hero - ADM User', () => {
        it('Confirm Buy Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
                BuyHeroPage.confirmBuyHero()
        })
    
        it('Negative Buy Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
                BuyHeroPage.negativeBuyHero()
        })
})


describe ('Buy Hero - Default User', () => {
        it('Confirm Buy Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.defaultUserSuccess.email, userData.defaultUserSuccess.password) 
                BuyHeroPage.confirmBuyHero()
        })
         
        it('Negative Buy Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.defaultUserSuccess.email, userData.defaultUserSuccess.password) 
                BuyHeroPage.negativeBuyHero()
     })
})