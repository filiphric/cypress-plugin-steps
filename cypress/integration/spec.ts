/// <reference path="../../src/index.d.ts" />
require('../../src')

it('numbers test steps', () => {

  cy.visit('cypress/index.html')

  cy.section('check primary colors')

  cy.step('find all primary colors')
  cy.get('.primary')

  cy.step('check blue')
  cy.get('.blue')

  cy.step('check red')
  cy.get('.red')

  cy.step('check green')
  cy.get('.green')

  cy.section('Check secondary colors')

  cy.step('check orange')
  cy.get('.orange')

  cy.step('check yellow')
  cy.get('.yellow')

  cy.step('check indigo')
  cy.get('.indigo')

  cy.step('check violet')
  cy.get('.violet')

});
