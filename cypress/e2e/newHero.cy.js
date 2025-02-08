import userData from "../fixtures/userdata.json"
import loginPage from "../pages/loginPage"; 
import newHeroPage from "../pages/newHeroPage";


const Chance = require('chance');

const chance = new Chance();
const LoginPage = new loginPage ()
const NewHeroPage = new newHeroPage () 

describe('New Hero Default User', () => {
    it.skip('New Hero Default User', () => {
      LoginPage.accessPage()
      LoginPage.clickLoginPage()
      LoginPage.loginWithAnyUser(userData.defaultUserSuccess.email, userData.defaultUserSuccess.password)
      NewHeroPage.clickNewHero()
    })
  })  

  describe('New Hero ADM User', () => {
    it('New Hero ADM User', () => {
      LoginPage.accessPage()
      LoginPage.clickLoginPage()
      LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password)  
      NewHeroPage.clickNewHero()
      NewHeroPage.createNewHero(chance.last(),chance.prime({ min: 10, max: 500 }),chance.prime({ min: 10, max: 50 }),chance.prime({ min: 1, max: 20 }))
    })
  })  