import { addStyles } from "./addStyles";

Cypress.on('test:before:run', () => {

  addStyles()
  window.logCalls = 1;
  window.testFlow = [];

})

Cypress.on('fail', (err) => {
  console.log(err)
  if (window.testFlow.length) {
    err.message += `${'\n\n' + 'Test steps were:\n\n'}${window.testFlow.join('\n')}`;
  }
  throw err;
});