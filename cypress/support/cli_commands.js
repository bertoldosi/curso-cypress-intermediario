/// <reference types="Cypress" />

Cypress.Commands.add('cloneViaSSH', project => {
    // replace ele subtitui 'http://', por '', 
    const domain = Cypress.config('baseUrl').replace('http://', '').replace('/', '')
    
    // exec execulta um comando
    cy.exec(`cd temp/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
  })