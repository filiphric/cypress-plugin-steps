export const findInReporter = (selector: string) => {
  const reporterFrame = top?.document.querySelector('#reporter-frame') as HTMLIFrameElement | null
  if (reporterFrame?.contentDocument) {
    return Cypress.$(selector, reporterFrame.contentDocument)
  }

  return Cypress.$('#unified-reporter, #app', top?.document).find(selector)
}
