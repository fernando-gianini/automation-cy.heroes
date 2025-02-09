import loginPage from '../../pages/loginPage'

const LoginPage = new loginPage ()

describe('Login User', () => {
  it('Login Default User Sucess', () => {
    LoginPage.accessPage()
    LoginPage.clickLoginPage()
  })
})