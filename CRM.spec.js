/// <reference types = "Cypress" />
describe('CRM', () => {

 it('Navigate to URL', () => {
     cy.visit('https://fintrakcrm.azurewebsites.net/')

 })
 it('Login',() => {
    cy.get('#loginusername').type('fintrak')
    cy.get('#loginpassword').type('password@fintrak')
    cy.get('#btnSignin').click()
 })


})