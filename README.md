# Using prototype 

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
https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it  
https://filiphric.com/cypress-basics-xpath-vs-css-selectors  


## TODO
User interceptors and aliases
Other advanced features
