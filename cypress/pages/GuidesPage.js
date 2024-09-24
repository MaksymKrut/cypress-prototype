class GuidesPage {

  constructor() {
    this.url = "/guides/"
    this.title = "Comprehensive Cypress Test Automation Guide | Cypress Documentation"
    this.selectors = {
      cookiesDialogSelector: "[role='dialog']",
      acceptAllButtonSelector: "button[class*='osano-cm-accept-all']",
      guidesTopMenuSelector: "a[href*='why-cypress']",
      apiTopMenuSelector: "a[href*='/api/table-of-contents']",
      pluginsTopMenuSelector: "a[href*='plugins']",
      examplesTopMenuSelector: "a[href*='examples/recipes']",
      faqTopMenuSelector: "a[href*='using-cypress-faq']",
      learnTopMenuSelector: "a[href*='learn.cypress.io']",
    }
  }

  visit() {
    cy.visit(this.url)
  }

  // Cookies dialog

  cookiesDialog() {
    return cy.get(this.selectors.cookiesDialogSelector)
  }

  acceptAllButton() {
    return cy.get(this.selectors.acceptAllButtonSelector)
  }
  
  // Top menu

  guidesTopMenu() {
    return cy.get(this.selectors.guidesTopMenuSelector)
  }

  apiTopMenu() {
    return cy.get(this.selectors.apiTopMenuSelector)
  }

  pluginsTopMenu() {
    return cy.get(this.selectors.pluginsTopMenuSelector)
  }

  examplesTopMenu() {
    return cy.get(this.selectors.examplesTopMenuSelector)
  }

  faqTopMenu() {
    return cy.get(this.selectors.faqTopMenuSelector)
  }

  learnTopMenu() {
    return cy.get(this.selectors.learnTopMenuSelector)
  }
}

export default GuidesPage