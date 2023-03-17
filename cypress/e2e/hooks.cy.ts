before(() => {
  cy.step('before')
});

beforeEach(() => {
  cy.step('beforeEach')
});

it('works in before and beforeEach', () => {

  cy.visit('cypress/index.html')

});


it('counts properly', () => {

  cy.visit('cypress/index.html')

  cy.step('three')

  const testStepCommand = () => {
    expect(Cypress.$("#unified-reporter", top?.document).find('.command-name-step')).to.have.length(2)
    expect(Cypress.$("#unified-reporter", top?.document).find('.command-name-step')[0]).to.contain.text('1. BEFOREEACH')
    expect(Cypress.$("#unified-reporter", top?.document).find('.command-name-step')[1]).to.contain.text('2. THREE')
  }

  cy.window()
    .should(testStepCommand)

});