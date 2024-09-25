// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import GuidesPage from "../pages/GuidesPage"

const guidesPage = new GuidesPage()

// -- Search on Cypress Documentation Website --
Cypress.Commands.add('searchCypressDocs', (searchQuery) => {
    guidesPage.searchInput().dblclick()
    guidesPage.searchDialogInput().type(searchQuery)
})

// -- Handle cookies dialog --
Cypress.Commands.add('handleCookiesDialog', () => {
    guidesPage.cookiesDialog().then(($cookiesDialog) => {
        // Check is button exist WITHOUT failing test, if missing
        if ($cookiesDialog.find(guidesPage.selectors.acceptAllButtonSelector, { timeout: 5000 }).length) {
            // Note: here clicking jQuery object not Cypress
            $cookiesDialog.find(guidesPage.selectors.acceptAllButtonSelector).click() 
            cy.log("Accept all button found and clicked!")
        } else {
            $cookiesDialog.find(guidesPage.selectors.cookiesDialogCloseSelector).click() 
        }
    })
    cy.waitUntil(() => cy.get(guidesPage.selectors.cookiesDialogSelector).invoke('attr', 'class').should('contain', 'hidden'))
})