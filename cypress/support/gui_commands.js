/// <reference types="Cypress" />

//funcionalidade de login
Cypress.Commands.add("login", () => {
    //acessamos a url de login
    cy.visit('users/sign_in')

    //selecionamos o campo de user e colocamos nosso usario definido no cypress.env..json
    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    //selecionamos o campo de password e colocamos nosso usario definido no cypress.env.json
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'))
    //selecionamos o botão e realizamos um click nele
    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add("logout", () => {
    //selecionamos o botão cujo atributo está definido como paramnetro e realizamos um click nele
    cy.get('[data-qa-selector="user_menu"]').click()
    //selecionamos o botão cujo conteudo dele está em parametro e realizamos um click nele.
    cy.contains("Sign out").click()
})

Cypress.Commands.add("gui_createProject", (project) => {
    cy.visit('projects/new')
    // selecionando e clicano no botão de criar novo projeto
    cy.get('#project_name').type(project.name)
    // selecionando o campo de descrição e adicionando valor a ele 
    cy.get('#project_description').type(project.description)
    // marcando o check de Readmer
    cy.get('#project_initialize_with_readme').check()
    // criando o projeto
    cy.get('#blank-project-pane > #new_project > .btn-success').click()

})

Cypress.Commands.add("gui_createIssue", (issue) => {
    //indo para a rota de criação e issue
    cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
    // add o titulo no campo titulo
    cy.get('.qa-issuable-form-title').type(issue.title)
    // add o titulo no campo titulo
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains("Submit issue").click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
})