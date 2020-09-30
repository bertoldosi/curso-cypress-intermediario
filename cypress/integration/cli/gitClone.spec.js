/// <reference types="Cypress" />

const faker = require('faker')

describe('git clone', () => {
    const project = {
        name: `project-${faker.random.uuid()}`,
        description: faker.random.words(5)
    }

    beforeEach(() => {
        return cy.api_createProject(project)
    })

    it('successfully', () => {
        cy.cloneViaSSH(project)

        // readFile acessar um determinado arquivo e ler ele, e verificar se tem o valor descrito
        cy.readFile(`temp/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
            .and('contain', project.description)
    })
})