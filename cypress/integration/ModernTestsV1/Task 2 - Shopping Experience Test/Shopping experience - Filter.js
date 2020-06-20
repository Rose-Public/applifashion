describe('Shopping experience : focus on Filter Results', function() {
	beforeEach(function() {
		// We go to the homepage
		cy.visit('./gridHackathonV1.html')
		cy.goOnDevice('laptop')
	})

// ELEMENTS
	const blackColorCheckbox = '#colors__Black'

	const filtersFilterBtn = '#filterBtn'
	const filtersResetBtn = '#resetBtn'

	const shoesList = '#product_grid'
	const shoeItem = '[id^="DIV__colcolmd__"]'

// TESTS

	it('I can filter on black shoes', function() {
		// We first ensure there is no filter at the beginning, by clicking on "Reset" (and force it, to avoid an error in case nothing is checked)
		cy.get(filtersResetBtn)
			.scrollIntoView()
			.click({force:true})

		// We select "Black" in the filters' section "color" and filter on it
		cy.get(blackColorCheckbox).click()
		cy.get(filtersFilterBtn).click()

		// We assert that there are 2 articles
		cy.get(shoesList).find(shoeItem).should('have.length', 2)
	})
})
