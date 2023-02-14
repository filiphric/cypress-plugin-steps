import { addStyles } from "./addStyles";

beforeEach(function () {
  addStyles()
  window.logCalls = 1;
  window.testFlow = [];
});

Cypress.on('fail', (err) => {
  console.log(err)
  err.message += `${'\n\n' + 'Test steps were:\n\n'}${window.testFlow.join('\n')}`;
  throw err;
});