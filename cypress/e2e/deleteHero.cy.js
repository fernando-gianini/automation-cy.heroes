import userData from '../fixtures/userdata.json'
import loginPage from '../pages/loginPage'
import editHero from '../pages/editHeroPage'

const Chance = require('chance');

const chance = new Chance();
const EditHero = new editHero ()
const LoginPage = new loginPage ()
 
describe ('Edit Hero', () => {
   it('Edit Hero', () => {
    LoginPage.accessPage()
    LoginPage.clickLoginPage()
    LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password) 
    EditHero.accessEditHeroPage()
    EditHero.editDetailHero(chance.last(),chance.prime({ min: 10, max: 500 }),chance.prime({ min: 10, max: 50 }),chance.prime({ min: 1, max: 20 }))
    })
})
