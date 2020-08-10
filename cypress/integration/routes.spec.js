/// <reference types="Cypress" />

describe('should access the routes.', () => {
  it('Accessing routes', () => {
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/season/engine')
    cy.visit('http://localhost:3000/dispute/month')
    })
})