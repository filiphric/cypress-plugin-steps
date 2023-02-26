export const section = (message: string) => {

  let logMessage = `${window.logCalls}. ${message}`;

  window.logCalls = 0;
  logMessage = `\n--- ${message} ---\n`;

  Cypress.log({
    message: logMessage.toUpperCase(),
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

}