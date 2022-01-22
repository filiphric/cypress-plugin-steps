/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Adds a step log to your test flow.
     * @param message 
     * @param options 
     * @example
     * cy.step('open home page')
     * cy.section('dashboard section', { section: true })
     */
    step(message: string, options?: { section: boolean }): Chainable<null>;   

    /**
     * Adds a new section to your test flow.
     * @param message 
     * @param options 
     * @example
     * cy.section('dashboard section')
     */
    section(message: string, options?: { section: boolean }): Chainable<null>;      
  }
}

interface Window {
  logCalls: number;
  testFlow: string[];
}