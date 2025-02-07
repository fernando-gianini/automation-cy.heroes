import userData from '../fixtures/userdata.json'
import loginPage from '../pages/loginPage'

const LoginPage = new loginPage ()

describe('Login User', () => {
  it('Login Default User Sucess', () => {
    LoginPage.accessPage()
    LoginPage.clickLoginPage()
    LoginPage.loginWithAnyUser(userData.defaultUserSuccess.email, userData.defaultUserSuccess.password)  
  })
})  

describe('Login User', () => {
  it('Login ADM User Sucess', () => {
    LoginPage.accessPage()
    LoginPage.clickLoginPage()
    LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password)  
  })
})  