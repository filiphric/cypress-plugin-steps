export const section = (message: string) => {

  let logMessage = `${window.logCalls}. ${message}`;

  window.logCalls = 0;
  logMessage = `\n--- ${message} ---\n`;

  Cypress.log({
    displayName: logMessage.toUpperCase(),
    message: '\n',
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

}