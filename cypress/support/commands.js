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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("goOnDevice", (device) => {
	if (device === 'laptop') {
		cy.viewport(1200, 700);
	} else if (device === 'tablet') {
		cy.viewport(768, 700);
	} else if (device === 'mobile') {
		cy.viewport(500, 700);
	} else {
		cy.log('WARNING : ERROR --> incorrect viewport')
	}
});
