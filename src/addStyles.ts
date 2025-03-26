export const addStyles = () => {

  // append styles
  const reporterEl = top?.document.querySelector('#unified-reporter') || top?.document.querySelector('#app')
  const reporterStyleEl = document.createElement('style')
  reporterEl?.appendChild(reporterStyleEl)
  reporterStyleEl.innerHTML = `
  .command.command-name-step .command-wrapper {
    background-color: #434861;
  }
  .command.command-name-section .command-wrapper {
    background-color: #00595D;
  }
  .command.command-name-todo .command-wrapper {
    background-color: #ee82ee;
  }
  .command.command-name-step .command-number-column {
    color: #d0d2e0;
  }
  .command.command-name-section .command-number-column {
    color: #d0d2e0;
  }
  .command.command-name-todo .command-number-column {
    color: #d0d2e0;
  }
  .command.command-name-todo:hover .command-number-column {
    color: #ffffff;
  }
  .command.command-name-step:hover .command-wrapper {
    background-color: #5A5F7A;
  }
  .command.command-name-section:hover .command-wrapper {
    background-color: #007780;
  }
  .command.command-name-todo:hover .command-wrapper {
    background-color: #fe92fe;
  }

  .command.command-name-step .command-method,
  .command.command-name-section .command-method,
  .command.command-name-todo .command-method
  {
    display: none;
  }

  .command.command-name-step .command-message-text,
  .command.command-name-section .command-message-text,
  .command.command-name-todo .command-message-text
  {
    color: #d0d2e0
  }
  .command.command-name-todo:hover .command-message-text
  {
    color: #ffffff
  }
  `;

}
