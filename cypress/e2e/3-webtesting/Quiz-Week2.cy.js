describe('Quiz Week 2', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/')
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

      it('Login Berhasil', () => {
        cy.get('.ico-login').click()
        cy.get('#Email').type('hafiztest@email.com')
        cy.get('#Password').type('test123')
        cy.get('form > .buttons > .button-1').click()
        cy.get('.topic-html-content-header').should('contain.text', 'Welcome to our store')
        // cy.get('.ico-logout').click()
        // cy.get('.topic-html-content-body > :nth-child(1)').should('contain.text', 'Welcome to the new Tricentis store!')
      })

      it.only('Register - Blank', () => {
        cy.get('.ico-register').click()
        cy.get('#register-button').click()
        cy.get('.page-body').should('contain.text', 'required')
      })

      it('Login- Blank', () => {
        
      })

      it('Login - Password Salah', () => {
        
      })

})