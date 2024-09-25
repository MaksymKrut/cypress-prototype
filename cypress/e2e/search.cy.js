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
    })
})