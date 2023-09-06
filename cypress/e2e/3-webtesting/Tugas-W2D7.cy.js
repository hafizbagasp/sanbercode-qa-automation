describe('Tugas Pekan 2 Day 7', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })
// test 1
  it('Berhasil Login', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('h2').should('contain.text', 'Make Appointment')
  })

  it('Gagal Login - Wrong Credentials', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('PasswordSalah')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain.text', 'Login failed!')
  })

  //Misalkan fitur baru sedang tahap dev
  it.only('Gagal Login - Empty Username and Password', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain.text', 'Login failed!')
  })

})
