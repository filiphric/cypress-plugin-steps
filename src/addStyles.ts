const STYLE_ID = 'cypress-plugin-steps-styles'

const styles = `
  .reporter .command.command-name-step .command-wrapper {
    background-color: #434861;
  }
  .reporter .command.command-name-section .command-wrapper {
    background-color: #00595D;
  }
  .reporter .command.command-name-todo .command-wrapper {
    background-color: #ee82ee;
  }
  .reporter .command.command-name-step .command-number-column {
    color: #d0d2e0;
  }
  .reporter .command.command-name-section .command-number-column {
    color: #d0d2e0;
  }
  .reporter .command.command-name-todo .command-number-column {
    color: #d0d2e0;
  }
  .reporter .command.command-name-todo:hover .command-number-column {
    color: #ffffff;
  }
  .reporter .command.command-name-step .command-wrapper:hover,
  .reporter .command.command-name-step .command-wrapper.command-is-interactive:hover {
    background-color: #5A5F7A;
  }
  .reporter .command.command-name-section .command-wrapper:hover,
  .reporter .command.command-name-section .command-wrapper.command-is-interactive:hover {
    background-color: #007780;
  }
  .reporter .command.command-name-todo .command-wrapper:hover,
  .reporter .command.command-name-todo .command-wrapper.command-is-interactive:hover {
    background-color: #fe92fe;
  }

  .reporter .command.command-name-step .command-method,
  .reporter .command.command-name-section .command-method,
  .reporter .command.command-name-todo .command-method
  {
    display: none;
  }

  .reporter .command.command-name-step .command-message-text,
  .reporter .command.command-name-section .command-message-text,
  .reporter .command.command-name-todo .command-message-text
  {
    color: #d0d2e0
  }
  .reporter .command.command-name-todo:hover .command-message-text
  {
    color: #ffffff
  }
`

const injectIntoDocument = (doc: Document) => {
  if (doc.getElementById(STYLE_ID)) {
    return
  }

  const styleEl = doc.createElement('style')
  styleEl.id = STYLE_ID
  styleEl.textContent = styles
  doc.head.appendChild(styleEl)
}

export const addStyles = () => {
  const topDoc = top?.document
  if (!topDoc) {
    return
  }

  // Cypress 15.19+ clones head styles into #reporter-frame at mount
  injectIntoDocument(topDoc)

  const reporterFrame = topDoc.querySelector('#reporter-frame') as HTMLIFrameElement | null
  const frameDoc = reporterFrame?.contentDocument
  if (frameDoc) {
    injectIntoDocument(frameDoc)
  }
}
