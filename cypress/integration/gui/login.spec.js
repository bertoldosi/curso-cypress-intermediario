/// <reference types="Cypress" />

describe("Login", () => {
    it("Sucesso!", () => {
        cy.login();
        cy.get(".qa-user-avatar").should('exist');
        
    })
})