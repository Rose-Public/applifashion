// ELEMENTS
	const filtersSidebar = '#filter_col'
	const openFiltersIcon = '#ti-filter'
	const openFiltersTitle = '#SPAN____208'
	const filtersFilterBtn = '#filterBtn'
	const filtersResetBtn = '#resetBtn'
	const filtersCloseCross = '#I__ticlose__71'

	const displayGridIcon = '#I__tiviewgrid__202'
	const displayListIcon = '#I__tiviewlist__204'

	const thumbnailMenu = '[id^="UL____"]'

	// shoes examples (with and without special offer)
	const shoeWithNoOfferWrapper = '#DIV__griditem__261'
	const shoeWithSpecialOfferWrapper = '#DIV__griditem__211'

// FUNCTIONS
	let hoverElement = (element) => {
		cy.get(element).then($el=>{
          	cy.wrap($el).invoke('show')
          	// cy.wrap($el).contains('Family').click()
        	})
	}

// TESTS

describe('HOMEPAGE', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV1.html')

		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Task1 - HOMEPAGE'
		})
	})

	afterEach(function() {
		cy.eyesClose()
	})

	describe('HOMEPAGE Default displaying', function() {
		it('Homepage default displaying', function() {
			cy.eyesCheckWindow({
				tag: 'Default displaying',
				ignore: [
					{selector: 'header'},
					{selector: 'footer'}
				]
			})
		})

		it('On Tablet and Mobile : Filters menu is not visible until accessed via Filter icon', function() {
			// These tests concern only on Tablet and Mobile
			cy.eyesOpen({
				appName: 'AppliFashion',
				testName: 'Task1 - HOMEPAGE',
				browser: [
					// Tablet
					{width: 768, height: 700, name: 'chrome'},
					{width: 768, height: 700, name: 'firefox'},
					{width: 768, height: 700, name: 'edgechromium'},
					// Mobile
					{deviceName: 'iPhone X', screenOrientation: 'portrait'}
				]
			})

			// we have to add a cypress viewport so that the Filter element displays
			cy.viewport(768, 700)

			// We first assert that sidebar is not displayed by default
			cy.eyesCheckWindow('Filters are not visible by default')

			// We click on the icon to open filters
			cy.get(openFiltersIcon).click()

			// We assert that after clicking, the sidebar filters is visible and verify filters' order
			cy.eyesCheckWindow('Filters when displayed')

			// When we close the filters sidebar, it is no more visible
			cy.get(filtersCloseCross).click()
			cy.eyesCheckWindow('Filters when closed')
		})
	})

	describe('Shoes THUMBNAILS Menu', function() {

		it('Default displaying', function() {
			cy.eyesCheckWindow('Default displaying')
		})

		it('On Laptop : Thumbnail Menu is displayed on hover', function() {
			// These tests concern only Laptop
			cy.eyesOpen({
				appName: 'AppliFashion',
				testName: 'Task1 - HOMEPAGE Thumbnail',
				browser: [
					// only laptop
					{width: 1200, height: 700, name: 'chrome'},
					{width: 1200, height: 700, name: 'firefox'},
					{width: 1200, height: 700, name: 'edgechromium'}
				]
			})
			cy.eyesCheckWindow('Before hover')

			hoverElement(shoeWithNoOfferWrapper)
			cy.eyesCheckWindow('After hover')
		})
	})
})
