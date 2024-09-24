import PluginsPage from "../pages/PluginsPage"

const pluginsPage = new PluginsPage()

describe('Cypress Docs Plugins page elements are visible and operable, assure that', () => {
  beforeEach(() => {
    pluginsPage.visit()

  }),
    it('headers contain expected copy', () => {
      pluginsPage.pageHeader().contains('Plugins')
      pluginsPage.pagePreprocessorsHeader().contains('Preprocessors')
    }),
    it('plugin submission link leads to GitHub page', () => {
      pluginsPage.pluginsSubmissionLink().invoke('removeAttr', 'target').click()
      // cy.wait(5000)      
      cy.origin('https://github.com/cypress-io/', () => {
        // declare cy.origin command on expected domain
        cy.url().then((url) => {
          cy.url().should('include', 'github')
          cy.url().should('include', 'CONTRIBUTING')
          cy.log('Current URL is: ' + url)
        })
      })
    }),
    it('plugins amount is more then 5', () => {
      pluginsPage.pluginsList().find('li').its('length').should('be.gte', 5)
    })
})