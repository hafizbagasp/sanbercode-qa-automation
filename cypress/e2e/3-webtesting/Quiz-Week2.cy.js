import loginPage from '../../support/pageObject/userPage'
const users = require('../../fixtures/user.json')

describe('Sanbercode49 - Quiz Week 2', () => {
    beforeEach(() => {
        //cy.visit('https://demowebshop.tricentis.com/')
        //cy.visit('/')
        cy.visit(Cypress.env('quizw2_url'))
    })

    it('Register Account', () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').check()
        cy.get('#FirstName').type('Hafiz')
        cy.get('#LastName').type('Test')
        cy.get('#Email').type('hafiztest@email.com')
        cy.get('#Password').type('test123')
        cy.get('#ConfirmPassword').type('test123')
        cy.get('#register-button').click()
        cy.get('.validation-summary-errors > ul > li').should('contain.text', 'The specified email already exists')
      })

      it('Login Berhasil with Custom Command', () => {
        cy.get('.ico-login').click()
        cy.get('#Email').type(Cypress.env('email_quizw2'))
        cy.get('#Password').type(Cypress.env('password_quizw2'))
        cy.get('form > .buttons > .button-1').click()
        cy.get('.topic-html-content-header').should('contain.text', 'Welcome to our store')
        // cy.get('.ico-logout').click()
        // cy.get('.topic-html-content-body > :nth-child(1)').should('contain.text', 'Welcome to the new Tricentis store!')
      })

      it('Login Berhasil with Fixtures', () => {
        cy.fixture('user.json').then((user) => {
          const datauser = user[0];
        cy.login(datauser.email,datauser.password)
        cy.get('.topic-html-content-header').should('contain.text', 'Welcome to our store')
        })
      })

      it.only('Login Berhasil with POM & Fixtures', () => {
        loginPage.clickHomeLoginButton()
        loginPage.inputEmail(users[0].email)
        loginPage.inputPassword(users[0].password)
        loginPage.clickLoginButton()
        cy.get('.topic-html-content-header').should('contain.text', 'Welcome to our store')
      })

      it('Register - Blank', () => {
        cy.get('.ico-register').click()
        cy.get('#register-button').click()
        cy.get('.page-body').should('contain.text', 'required')
      })

      it('Login - Blank Email & Password', () => {
        loginPage.clickHomeLoginButton()
        loginPage.inputEmail(users[3].email)
        loginPage.inputPassword(users[3].password)
        loginPage.clickLoginButton()
        cy.get('.validation-summary-errors > ul > li').should('contain.text','No customer account found')
        })

      it('Login - Wrong Email & Password', () => {
        loginPage.clickHomeLoginButton()
        loginPage.inputEmail(users[1].email)
        loginPage.inputPassword(users[1].password)
        loginPage.clickLoginButton()
        cy.get('.field-validation-error > span').should('contain.text','Please enter a valid email address')
      })

      it('Login - Wrong Password', () => {
        loginPage.clickHomeLoginButton()
        loginPage.inputEmail(users[2].email)
        loginPage.inputPassword(users[2].password)
        loginPage.clickLoginButton()
        cy.get('.validation-summary-errors > ul > li').should('contain.text','The credentials provided are incorrect')
      })

})