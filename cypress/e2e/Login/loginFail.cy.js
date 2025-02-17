import userData from '../../fixtures/userdata.json'
import loginPage from '../../pages/loginPage'

const LoginPage = new loginPage ()

describe('Login User Fail', () => {
  it('Login Default User Sucess', () => {
      LoginPage.accessPage()
      LoginPage.clickLoginPage()
      LoginPage.loginWithAnyUser(userData.defaultUserFail.email, userData.defaultUserFail.password)  
      LoginPage.alertLoginError()
  })  

  it('Login ADM User Sucess', () => {
      LoginPage.accessPage()
      LoginPage.clickLoginPage()
      LoginPage.loginWithAnyUser(userData.admUserFail.email, userData.admUserFail.password) 
      LoginPage.alertLoginError() 
  })

  it('Email is not valid Fail', () => {
      LoginPage.accessPage()
      LoginPage.clickLoginPage()
      LoginPage.loginWithAnyUser(userData.invalidEmailFail.email, userData.defaultUserFail.password)  
      LoginPage.alertLoginError()
  })
})  