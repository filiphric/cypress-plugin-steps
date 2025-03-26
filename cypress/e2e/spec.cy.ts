it('numbers test steps', () => {

  cy.step('open a page')
  cy.visit('cypress/index.html')

  cy.section('find all primary colors')
  cy.step('check red color')
  cy.get('.red')
  cy.step('check green color')
  cy.get('.green')
  cy.step('check blue color')
  cy.get('.blue')

  cy.section('find all secondary colors')
  cy.step('select orange')
  cy.get('.orange')
  cy.step('select yellow')
  cy.get('.yellow')
  cy.step('select indigo')
  cy.get('.indigo')

  cy.todo('Finish the test')


  const findStepCommand = () => {
    return Cypress.$("#unified-reporter", top?.document).find('.command-name-step')
  }

  const findSectionCommand = () => {
    return Cypress.$("#unified-reporter", top?.document).find('.command-name-section')
  }

  cy.window()
    .then(findStepCommand)
    .should('have.length', 7)
    .spread(items => {
      cy.wrap(items)
        .find('.command-wrapper')
        .should('have.css', 'background-color', 'rgb(67, 72, 97)')
    })

  cy.window()
    .then(findSectionCommand)
    .should('have.length', 2)
    .spread(items => {
      cy.wrap(items)
        .find('.command-wrapper')
        .should('have.css', 'background-color', 'rgb(0, 89, 93)')
    })



});
