export const todo = (message: string) => {

  const logMessage = `${window.logCalls}. ${message}`;

  Cypress.log({
    message: logMessage.toUpperCase(),
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

}

