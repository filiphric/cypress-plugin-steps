it('numbers test steps', () => {

  cy.visit('cypress/index.html')

  cy.section('Section')
  cy.step('Step')

});
