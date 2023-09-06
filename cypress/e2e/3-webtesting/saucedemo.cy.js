describe('Test Saucedemo', () => {
  it('Login', () => {
    cy.visit('https://www.saucedemo.com/')
    })
})



/*describe('My First Test', () => {
  it('Visits Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    // cy.wait(5000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    //cy.get('.oxd-userdropdown-tab').click()
    //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    //cy.get('.title').should('contain.text', 'Login')
  })
})
*/

