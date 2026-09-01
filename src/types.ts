export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Adds a step log to your test flow.
       * @param message
       * @example
       * cy.step('open home page')
       */
      step(message: string, stepFunction?: () => void): Chainable<null>;

      /**
       * Adds a new section to your test flow.
       * @param message
       * @example
       * cy.section('dashboard section')
       */
      section(message: string, sectionFunction?: () => void): Chainable<null>;

      /**
       * Adds a warning step to your test flow.
       * @param message
       * @example
       * cy.todo('finish the user setup')
       */
      todo(message: string, todoFunction?: () => void): Chainable<null>;
    }
  }
  interface Window {
    logCalls: number;
    testFlow: string[];
  }
}
