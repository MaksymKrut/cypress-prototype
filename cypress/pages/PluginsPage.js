class PluginsPage {

  constructor() {
    this.url = "/plugins/"
    this.title = "Plugins | Cypress Documentation"
    this.selectors = {
      pluginsSubmissionLinkSelector: "a[href*='adding-plugins']",
      pluginsListSelector: "ul[class*='pluginsList']",
    }
  }

  visit() {
    cy.visit(this.url)
  }

  pageHeader() {
    return cy.get("h1")
  }

  pagePreprocessorsHeader() {
    return cy.get("h2")
  }

  pluginsSubmissionLink() {
    return cy.get(this.selectors.pluginsSubmissionLinkSelector)
  }

  pluginsList() {
    return cy.get(this.selectors.pluginsListSelector)
  }
}

export default PluginsPage