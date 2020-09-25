/// <reference types="Cypress" />

//utilizamos para enserir no teste valores dinamicos e aleatorios.
const faker = require('faker')

describe('Criando projeto', () => {

    //realizamos o login na aplicação antes para poder prosseguir
    before(() => cy.login())
    
    it('sucesso!', () => {    
        
        //criando um projeto
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }

        //criando um projeto
        cy.gui_createProject(project)
        
        //verificando se a url da pagina está de acordo com a correta
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)

        //verificar se o nome do projetos está visivel na tela.
        cy.contains(`${project.name}`).should('be.visible')

        //verificar se descrição do projetos está visivel na tela.
        cy.contains(`${project.description}`).should('be.visible')
    })
})