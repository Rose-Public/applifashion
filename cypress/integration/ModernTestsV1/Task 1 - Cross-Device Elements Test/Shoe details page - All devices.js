// ELEMENTS

// FUNCTIONS

// TESTS

describe('Shoe DETAILS PAGE', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonProductDetailsV1.html?id=3')
		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Shoe details page'
		})
	})

	afterEach(function() {
		cy.eyesClose()
	})

	it('Shoe details page', function() {
		// We visit a shoe details page taken randomly

		cy.eyesCheckWindow({
			tag: 'Shoe details page'
		})
	})
})
