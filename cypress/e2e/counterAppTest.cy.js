describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').should('have.text', 'My Counter')
  })

  it('should have the counter: 0', () => {
    cy.visit('http://localhost:3000/')

    cy.get('p').should('have.text', '0')
  })
})