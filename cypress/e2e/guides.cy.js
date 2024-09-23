describe('Cypress Docs Guides page elements are visible and operable, assure that', () => {
  beforeEach(() => {
    cy.visit('https://docs.cypress.io/guides/')
  }),
    it('visiting direct link redirects to overview page', () => {
      cy.url().should('include', '/overview/why-cypress/')
      cy.url().then((url) => {
        cy.log('Current URL is: ' + url)
      })
    }),
    it('handling cookies dialog', () => {
      // Popup is conditional per region (VPN), need to cover both scenarios:
      // 1. Dialog with buttons is shown
      // 2. Just info dialog is shown
      const cookiesDialogSelector = "[role='dialog']"
      const acceptAllButtonSelector = "button[class*='osano-cm-accept-all']"
      cy.get(cookiesDialogSelector).then(($cookiesDialog) => {
        // Check is button exist WITHOUT failing test, if missing
        if ($cookiesDialog.find(acceptAllButtonSelector, { timeout: 5000 }).length) {
          $cookiesDialog.find(acceptAllButtonSelector).click()
          cy.log("Accept all button found and clicked!")
        }
      })
      cy.get("[role='dialog']").invoke('attr', 'class').should('contain', 'hidden')
      // cy.wait(5000)
    }),
    it('verifying left menu on the guides page', () => {
      const guidesTopMenuSelector = "a[href*='why-cypress']"
      const apiTopMenuSelector = "a[href*='/api/table-of-contents']"
      const pluginsTopMenuSelector = "a[href*='plugins']"
      const examplesTopMenuSelector = "a[href*='examples/recipes']"
      const faqTopMenuSelector = "a[href*='using-cypress-faq']"
      const learnTopMenuSelector = "a[href*='learn.cypress.io']"
      cy.get(guidesTopMenuSelector).should('exist')
      cy.get(apiTopMenuSelector).should('exist')
      cy.get(pluginsTopMenuSelector).should('exist')
      cy.get(examplesTopMenuSelector).should('exist')
      cy.get(faqTopMenuSelector).should('exist')
      cy.get(learnTopMenuSelector).should('exist')
    }),
    it.only('verifying top menu on the guides page', () => {
      cy.get('button').contains('Overview')
    }),

    it.only('verifying right contents on the guides page', () => {
      cy.get('button').contains('Overview')
    }),

    it.only('verifying main content on the guides page', () => {
      cy.get('button').contains('Overview')
    })
})