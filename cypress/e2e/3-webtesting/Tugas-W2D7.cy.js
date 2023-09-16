describe('Tugas Pekan 2 Day 7', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

  it('Berhasil Login', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('h2').should('contain.text', 'Make Appointment')
  })

  it.skip('Gagal Login - Wrong Credentials', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('PasswordSalah')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain.text', 'Login failed!')
  })

  it.skip('Gagal Login - Empty Username and Password', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain.text', 'Login failed!')
  })

  //Web Testing dari Login - Book Appointment - Logout (PASSED)
  it.only('Book Appointment', () => {
    //Berhasil Login
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('h2').should('contain.text', 'Make Appointment')

    //Input Book Appointment
    //cy.get('#combo_facility').click()
    cy.get('#chk_hospotal_readmission').check()
    cy.get('#radio_program_none').check()
    cy.get('#txt_visit_date').type('09/09/2023')
    //cy.get('#txt_comment').type('Coba Komen')
    cy.get('#btn-book-appointment').click()
    cy.get('h2').should('contain.text', 'Appointment Confirmation')

    //Logout
    cy.get('.text-center > .btn').click()
    cy.get('#menu-toggle').click()
    cy.get(':nth-child(6) > a').click()
    cy.get('h1').should('contain.text', 'CURA Healthcare Service')

  })

})
