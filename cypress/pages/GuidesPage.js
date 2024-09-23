class GuidesPage {
  constructor() {
    this.url = "/guides/"
    this.title = "Comprehensive Cypress Test Automation Guide | Cypress Documentation"
  }

  visit() {
    cy.visit(this.url)
  }

  searchInput(text) {
    return cy.get('input[name="search"]').first().type(text)
  }

  getSearchButton() {
    return cy.get("#search > div.search-button > button").first()
  }

  getHomeButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span"
    )
  }

  getSpecialButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(2) > a > div > span"
    )
  }

  getBlogButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
    )
  }

  getMegaMenuButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li.nav-item.dropdown.dropdown-hoverable.mega-menu.position-static > a > div > span"
    )
  }

  getAddOnsButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
    )
  }

  getMyAccountLink() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span"
    )
  }
}

module.exports = GuidesPage