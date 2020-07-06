// ELEMENTS
	const openFiltersIcon = '#ti-filter'

	const blackColorCheckbox = '#colors__Black'

	const filtersFilterBtn = '#filterBtn'
	const filtersResetBtn = '#resetBtn'

	const shoesList = '#product_grid'
	const shoeItem = '[id^="DIV__colcolmd__"]'

// FUNCTIONS
	let filterOnBlackColor = () => {
		// We first ensure there is no filter at the beginning, by clicking on "Reset" (and force it, to avoid an error in case nothing is checked)
		cy.get(filtersResetBtn)
			.scrollIntoView()
			.click({force:true})

		// We select "Black" in the filters' section "color" and filter on it
		cy.get(blackColorCheckbox).click()
		cy.get(filtersFilterBtn).click()
	}

	let verifyNumberOfShoesDisplayed = (expectedNumber) => {
		cy.get(shoesList).find(shoeItem).should('have.length', expectedNumber)
	}

// TESTS

describe('Shopping experience : focus on Filter Results', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV1.html')
	})

	it('I can filter on black shoes - On LAPTOP (1200x700)', function() {
		cy.goOnDevice('laptop')

		cy.screenshot('Filter on Laptop - Before filtering')
		filterOnBlackColor()

		// We assert that there are 2 articles
		cy.screenshot('Filter on Laptop - After filtering')
		verifyNumberOfShoesDisplayed(2)
	})

	it('I can filter on black shoes - On TABLET (768x700)', function() {
		cy.goOnDevice('tablet')

		cy.screenshot('Filter on Tablet - Before filtering')

		// We click on the filter icon to display filters sidebar
		cy.get(openFiltersIcon).click()

		filterOnBlackColor()

		// We assert that there are 2 articles
		cy.screenshot('Filter on Tablet - After filtering')
		verifyNumberOfShoesDisplayed(2)
	})

	it('I can filter on black shoes - On MOBILE (500x700)', function() {
		cy.goOnDevice('mobile')

		cy.screenshot('Filter on Mobile - Before filtering')

		// We click on the filter icon to display filters sidebar
		cy.get(openFiltersIcon).click()

		filterOnBlackColor()

		// We assert that there are 2 articles
		cy.screenshot('Filter on Mobile - After filtering')
		verifyNumberOfShoesDisplayed(2)
	})
})
