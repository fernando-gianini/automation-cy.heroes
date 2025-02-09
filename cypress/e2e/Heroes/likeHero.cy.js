import userData from '../../fixtures/userdata.json'
import loginPage from '../../pages/loginPage'
import likeHeroPage from '../../pages/likeHeroPage' 

const LikeHeroPage = new likeHeroPage ()
const LoginPage = new loginPage ()

describe('Like Heroes', () => {
  it.skip('Like Heroes Default User', () => {
        LoginPage.accessPage()
        LoginPage.clickLoginPage()
        LoginPage.loginWithAnyUser(userData.defaultUserSuccess.email, userData.defaultUserSuccess.password)
        LikeHeroPage.verificAmountLikes()
        LikeHeroPage.clickLikeButton()
        LikeHeroPage.confirmLike()

  })

  it('Like Heroes ADM User', () => {
        LoginPage.accessPage()
        LoginPage.clickLoginPage()
        LoginPage.loginWithAnyUser(userData.admUserSuccess.email, userData.admUserSuccess.password)  
        LikeHeroPage.verificAmountLikes()
        LikeHeroPage.clickLikeButton()
        LikeHeroPage.confirmLike()
  })
})  