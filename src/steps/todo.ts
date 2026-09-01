export const todo = (message: string, todoFunction?: () => void) => {
  const logMessage = `${window.logCalls}. ${message}`;

  Cypress.log({
    message: logMessage.toUpperCase(),
  });

  window.testFlow.push(logMessage);
  window.logCalls++;

  todoFunction?.();
};
