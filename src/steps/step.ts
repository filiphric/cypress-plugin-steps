export const step = (message: string) => {

  const logMessage = `${window.logCalls}. ${message}`;

  Cypress.log({
    displayName: logMessage.toUpperCase(),
    message: '\n',
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

}

