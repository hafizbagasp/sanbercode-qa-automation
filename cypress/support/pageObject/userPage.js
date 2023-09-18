class LoginPage {
    
    email = '#Email'
    password = '#Password'
    homeloginBtn = '.ico-login'
    loginBtn = 'form > .buttons > .button-1'
  
    inputEmail(email) {
      cy.get(this.email).type(email)
    }
  
    inputPassword(password) {
      cy.get(this.password).type(password)
    }

    clickHomeLoginButton() {
        cy.get(this.homeloginBtn).click()
    }
  
    clickLoginButton() {
      cy.get(this.loginBtn).click()
    }

}
  
  export default new LoginPage()