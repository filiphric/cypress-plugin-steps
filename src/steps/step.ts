export const step = (message: string, stepFunction?: () => void) => {
  const logMessage = `${window.logCalls}. ${message}`;

  Cypress.log({
    message: logMessage.toUpperCase(),
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

  stepFunction?.();
};
