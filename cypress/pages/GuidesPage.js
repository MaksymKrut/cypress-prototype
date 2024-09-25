class GuidesPage {

  constructor() {
    this.url = "/guides/"
    this.title = "Comprehensive Cypress Test Automation Guide | Cypress Documentation"
    this.selectors = {
      cookiesDialogSelector: "[role='dialog']",
      acceptAllButtonSelector: "button[class*='osano-cm-accept-all']",
      cookiesDialogCloseSelector: "button[class*='osano-cm-close']",
      guidesTopMenuSelector: "a[href*='why-cypress']",
      apiTopMenuSelector: "a[href*='/api/table-of-contents']",
      pluginsTopMenuSelector: "a[href*='plugins']",
      examplesTopMenuSelector: "a[href*='examples/recipes']",
      faqTopMenuSelector: "a[href*='using-cypress-faq']",
      learnTopMenuSelector: "a[href*='learn.cypress.io']",
      searchInputSelector: "//div[contains(@class, 'searchBox')]/button",
      searchDialogInputSelector: "input[class*='DocSearch']",
      searchDialogResultsListSelector: "#docsearch-list",
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
  
  cookiesDialogClose() {
    return cy.get(this.selectors.cookiesDialogCloseSelector)
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

  // Search dialog

  searchInput() {
    return cy.xpath(this.selectors.searchInputSelector)
  }
  searchDialogInput() {
    return cy.get(this.selectors.searchDialogInputSelector)
  }
  searchDialogResultsList() {
    return cy.get(this.selectors.searchDialogResultsListSelector)
  }

}

export default GuidesPage