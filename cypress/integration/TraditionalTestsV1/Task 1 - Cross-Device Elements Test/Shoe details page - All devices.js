// ELEMENTS
	const bottomWrapper = '#DIV__rowjustify__73'

// FUNCTIONS
	let verifyBottomDisplayWrap = function() {
		cy.get(bottomWrapper).should('have.css', 'flex-wrap', 'wrap')
	}

// TESTS

describe('Shoe DETAILS PAGE : focus on elements which displaying changes from one device to the other', function() {
	it('Bottom part must always display wrap on all devices', function() {
		// We visit a shoe details page taken randomly
		cy.visit('./gridHackathonProductDetailsV1.html?id=3')

		cy.goOnDevice('laptop')
		cy.screenshot('Shoe Details page on Laptop')
		verifyBottomDisplayWrap()

		cy.goOnDevice('tablet')
		cy.screenshot('Shoe Details page on Tablet')
		verifyBottomDisplayWrap()

		cy.goOnDevice('mobile')
		cy.screenshot('Shoe Details page on Mobile')
		verifyBottomDisplayWrap()
	})
})
