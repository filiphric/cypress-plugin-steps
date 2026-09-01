import { findInReporter } from '../support/reporter'

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
    const steps = findInReporter('.command-name-step')
    expect(steps).to.have.length(2)
    expect(steps[0]).to.contain.text('1. BEFOREEACH')
    expect(steps[1]).to.contain.text('2. THREE')
  }

  cy.window()
    .should(testStepCommand)

});