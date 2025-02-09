import userData from '../../fixtures/userdata.json'
import loginPage from '../../pages/loginPage'
import deleteHeroPage from '../../pages/deleteHeroPage'
import editHeroPage from '../../pages/editHeroPage'     

const EditHeroPage = new editHeroPage ()
const LoginPage = new loginPage ()
const DeleteHeroPage = new deleteHeroPage ()
 
describe ('Delete Hero Front Page', () => {
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
describe ('Delete Hero Edit Page', () => {
        it('Confirm Delete Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
                EditHeroPage.accessEditHeroPage()
                EditHeroPage.confirmDeleteHeroEditPage()
        })
        it('Negative Delete Hero', () => {
                LoginPage.accessPage()
                LoginPage.clickLoginPage()
                LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
                EditHeroPage.accessEditHeroPage()
                EditHeroPage.negativeDeleteHeroEditPage()
        })        
})
