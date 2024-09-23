# Cypress Prototype (@WIP September 23-25, 2024)

## Libraries and techniques used
Used DOM parent/child hierarchy.
Assertion that element in exact place of the DOM with ability to add condition WITHOUT failing the test.

Used XPATH library. 
Advantage to ability to write more versatile, unique and shorter selectors.
https://www.npmjs.com/package/cypress-xpath

Used waitUntil library. 
One liner convenient way to extend existing wait cypress capabilities.
https://www.npmjs.com/package/cypress-wait-until

Used assertions API like 'expect' and 'should'.

## Useful gists
Asserting attribute of element contains value
`cy.get("[role='dialog']").invoke('attr', 'class').should('contain', 'hidden')`  
`cy.get('#firstName').parents('form').find('button').should('contain', 'Submit');`  

## Useful links 

Cypress docs:  
https://docs.cypress.io/guides/overview/why-cypress  
https://docs.cypress.io/api/table-of-contents  

Filip Hric Blog:  
https://filiphric.com/cypress-basics-check-attributes-value-and-text  
https://filiphric.com/use-session-instead-of-login-page-object-in-cypress
https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it  
https://filiphric.com/cypress-basics-xpath-vs-css-selectors  


## TODO
Add PageObject model - DONE
User interceptors and aliases - TODO
