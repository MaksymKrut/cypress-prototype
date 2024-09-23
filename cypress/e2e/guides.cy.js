import { GuidesPage } from "../pages/GuidesPage"

const guidesPage = new GuidesPage()

describe('Cypress Docs Guides page elements are visible and operable, assure that', () => {
  beforeEach(() => {
    guidesPage.visit()
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
      guidesPage.cookiesDialog().then(($cookiesDialog) => {
        // Check is button exist WITHOUT failing test, if missing
        if ($cookiesDialog.find(guidesPage.selectors.acceptAllButtonSelector, { timeout: 5000 }).length) {
          $cookiesDialog.find(guidesPage.selectors.acceptAllButtonSelector).click()
          cy.log("Accept all button found and clicked!")
        }
      })
      cy.waitUntil(() => cy.get(guidesPage.selectors.cookiesDialogSelector).invoke('attr', 'class').should('contain', 'hidden'))
      // cy.wait(5000)
    }),
    it.only('verifying top menu on the guides page', () => {
      guidesPage.guidesTopMenu().should('exist')
      guidesPage.apiTopMenu().should('exist')
      guidesPage.pluginsTopMenu().should('exist')
      guidesPage.examplesTopMenu().should('exist')
      guidesPage.faqTopMenu().should('exist')
      guidesPage.learnTopMenu().should('exist')
    }),
    it('verifying left menu on the guides page', () => {
      cy.get('button').contains('Overview')
      cy.get('button').contains('Getting Started')
      cy.get('button').contains('End-to-End Testing')
      cy.get('button').contains('Component Testing')
      cy.get('button').contains('Core Concepts')
      cy.get('button').contains('Cypress Cloud')
      cy.get('button').contains('Guides')
      cy.get('button').contains('Continuous Integration')
      cy.get('button').contains('Tooling')
      cy.get('button').contains('References')
    }),

    it('verifying right contents on the guides page', () => {
      cy.xpath("//li/a[contains(@href, 'youll-learn')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'nutshell')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'uses-Cypress')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Cypress-ecosystem')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Our-mission')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Features')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Test-types')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Cypress-in-the-Real-World')]").should('exist')
      cy.xpath("//li/a[contains(@href, 'Cypress-in-the-Real-World')]").then((element) => {
        expect(element).to.have.text('Cypress in the Real World');
      });
    }),

    it('verifying main content on the guides page', () => {
      cy.get('h1').contains('Why Cypress?')
      cy.get('#In-a-nutshell').contains('In a nutshell')
      cy.get('#Who-uses-Cypress').contains('Who uses Cypress?')
    })
})