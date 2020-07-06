// URLS
	const homepage = './gridHackathonV1.html'

// ELEMENTS
	const openFiltersIcon = '#ti-filter'

	const blackColorCheckbox = '#colors__Black'

	const filtersFilterBtn = '#filterBtn'
	const filtersResetBtn = '#resetBtn'

	const shoesList = '#product_grid'
	const shoeItem = '[id^="DIV__colcolmd__"]'

// FUNCTIONS

// TESTS

describe('Task 2 - Shopping experience : focus on Filter Results', function() {
	beforeEach(function() {
		cy.visit(homepage)
	})

	afterEach(function() {
		cy.eyesClose()
	})


	it('On laptop : I can filter on black shoes', function() {
		// On laptop, nothing special to do, since filters are directly displayed
		cy.eyesOpen({
			batchName: 'UFG-Hackathon-Task2',
			appName: 'AppliFashion',
			testName: 'Task2 - Filter on Black Shoes - Laptop',
			ignore: [
				{selector: 'header'},
				{selector: 'footer'}
			],
			browser: [
			   {width: 1200, height: 700, name: 'chrome'},
			   {width: 1200, height: 700, name: 'firefox'},
			   {width: 1200, height: 700, name: 'edgechromium'}
			]
		})

		cy.eyesCheckWindow('Filters by default')

		// We select "Black" in the filters' section "color" and filter on it
		cy.get(blackColorCheckbox).click()
		cy.eyesCheckWindow('"Black" filter is selected')

		cy.get(filtersFilterBtn).click()

		// We assert that there are 2 articles
		cy.eyesCheckWindow('Results displayed')
	})

	it('On Tablet : I can filter on black shoes', function() {
		// On Tablet and Mobile, we have to make a special action before filters display.
		// The CTA displays only if the viewports correspond to Tablet and to Mobile in Cypress.
		cy.eyesOpen({
			batchName: 'UFG-Hackathon-Task2',
			appName: 'AppliFashion',
			testName: 'Task2 - Filter on Black Shoes - Tablet',
			ignore: [
				{selector: 'header'},
				{selector: 'footer'}
			],
			browser: [
				{width: 768, height: 700, name: 'chrome'},
				{width: 768, height: 700, name: 'firefox'},
				{width: 768, height: 700, name: 'edgechromium'},
			]
		})

		cy.viewport(768, 700)

		// We first ensure filters are not already displayed
		cy.eyesCheckWindow('Before opening Filters')

		// We click on the icon "Filter" to display filters sidebar
		cy.get(openFiltersIcon).click()
		cy.eyesCheckWindow('After opening : Filters by default')

		// We select "Black" in the filters' section "color" and filter on it
		cy.get(blackColorCheckbox).click()
		cy.eyesCheckWindow('"Black" filter is selected')

		cy.get(filtersFilterBtn).click()

		// We assert that Filters have closed automatically and that there are 2 articles as results
		cy.eyesCheckWindow('Results displayed')
	})

	it('On Mobile : I can filter on black shoes', function() {
		// On Mobile and Mobile, we have to make a special action before filters display.
		// The CTA displays only if the viewports correspond to Mobile and to Mobile in Cypress.
		cy.eyesOpen({
			batchName: 'UFG-Hackathon-Task2',
			appName: 'AppliFashion',
			testName: 'Task2 - Filter on Black Shoes - Mobile',
			ignore: [
				{selector: 'header'},
				{selector: 'footer'}
			],
			browser: {deviceName: 'iPhone X', screenOrientation: 'portrait'}
		})

		cy.viewport(500, 700)

		// We first ensure filters are not already displayed
		cy.eyesCheckWindow('Before opening Filters')

		// We click on the icon "Filter" to display filters sidebar
		cy.get(openFiltersIcon).click()
		cy.eyesCheckWindow('After opening : Filters by default')

		// We select "Black" in the filters' section "color" and filter on it
		cy.get(blackColorCheckbox).click()
		cy.eyesCheckWindow('"Black" filter is selected')

		cy.get(filtersFilterBtn).click()

		// We assert that Filters have closed automatically and that there are 2 articles as results
		cy.eyesCheckWindow('Results displayed')
	})
})
