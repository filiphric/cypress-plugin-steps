beforeEach(function () {
  window.logCalls = 1;
  window.testFlow = [];
});

Cypress.on('fail', (err) => {
  console.log(err)
  err.message += `${'\n\n' + 'Test steps were:\n\n'}${window.testFlow.join('\n')}`;
  throw err;
});

Cypress.Commands.add('step', (msg, options) => {

  let logMessage = `${window.logCalls}. ${msg}`;

  if (options && options.section) {
    window.logCalls = 0;
    logMessage = `\n--- ${msg} ---\n`;
  }

  Cypress.log({
    displayName: logMessage.toUpperCase(),
    message: '\n',
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

});

Cypress.Commands.add('section', (msg) => {

  let logMessage = `${window.logCalls}. ${msg}`;

  window.logCalls = 0;
  logMessage = `\n--- ${msg} ---\n`;

  Cypress.log({
    displayName: logMessage.toUpperCase(),
    message: '\n',
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

});