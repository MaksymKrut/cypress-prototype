import GuidesPage from "../pages/GuidesPage"

const guidesPage = new GuidesPage()

describe('Cypress Docs Search function with dialog is operable, assure that', () => {
  beforeEach(() => {
    guidesPage.visit()
  }),
    it('user can perform search on search dialog window', () => {
      // Using custom handleCookiesDialog command defined in /support/commands.js file
      cy.handleCookiesDialog()
      // Using custom searchCypressDocs command defined in /support/commands.js file
      cy.searchCypressDocs("Cypress")
      // Amount of articles in result should be more then 3
      guidesPage.searchDialogResultsList().find('li').its('length').should('be.gte', 3)
    }),
    it('search network calls have success code and returning expected values', () => {
      // Using aliases and interceptor Cypress ability
      cy.handleCookiesDialog()
      // Creating interceptor with alias for search queries
      cy.interceptStoreResponse("POST", "https://*/1/indexes/*/queries?*", "searchQueries")
      // Performing search
      cy.searchCypressDocs("Cypress")
      // Waiting for alias call to finish and assert success and data
      cy.wait('@searchQueries').then((interception) => {
        expect(interception.response.body).to.have.property('results')
        cy.wrap(interception.response.body.results[0].hits.length).should('be.gte', 3)
      })
    })
})