export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Adds a step log to your test flow.
       * @param message 
       * @example
       * cy.step('open home page')
       */
      step(message: string): Chainable<null>;

      /**
       * Adds a new section to your test flow.
       * @param message 
       * @example
       * cy.section('dashboard section')
       */
      section(message: string): Chainable<null>;
    }
  }
  interface Window {
    logCalls: number;
    testFlow: string[];
  }
}