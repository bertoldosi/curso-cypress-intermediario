/// <reference types="Cypress" />

describe("Logout", () => {
    //realizamos o login
    before( () => cy.login())

    //realizamos o teste
    it('Sucesso!', () => {
        //chamamos o teste de logout ja definido no gui_commands
        cy.logout()

        //apos o logout verificamos se a url está de acordo com a certa
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})