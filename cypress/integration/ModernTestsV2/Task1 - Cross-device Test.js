// URLS
	const homepage = './gridHackathonV2.html'
	const shoeDetailsPage = './gridHackathonProductDetailsV2.html?id='

// DATA
	const shoeWithSpecialOfferId = '1'
	const shoeWithNoOfferId = '4'

// ELEMENTS
	const mainSectionsDivs = '[id^=DIV__collgcolmd__]'

	const burgerMenu = '#DIV__hamburgerb__13'
	const burgerMenuCloseCross = '#I__ticlose__20'

	const searchButtonIconMobile = '#A__btnsearchm__59'

	const openFiltersIcon = '#ti-filter'
	const filtersCloseCross = '#I__ticlose__71'

	const thumbnailMenu = '.grid_item ul'
	const thumbnailItems = '.grid_item ul li'

// FUNCTIONS

// TESTS

describe('Task 1 - Cross-Device Elements Test : HOMEPAGE', function() {
	beforeEach(function() {
		cy.visit(homepage)
	})

	describe('Laptop', function() {
		before(function() {
			cy.eyesOpen({
				batchName: 'UFG-Hackathon-Task1',
				appName: 'AppliFashion',
				testName: 'Task1 - Cross-Device Elements Test : Homepage - Laptop',
				browser: [
				   {width: 1200, height: 700, name: 'chrome'},
				   {width: 1200, height: 700, name: 'firefox'},
				   {width: 1200, height: 700, name: 'edgechromium'}
				]
			})
		})

		after(function() {
			cy.eyesClose()
		})

		it('Laptop : Default displaying', function() {
			cy.eyesCheckWindow({
				tag: 'LAPTOP - Default displaying'
			})
		})

		it('Laptop : Shoe thumbnail menu on Hover', function() {
			cy.get(thumbnailMenu).should('be.hidden').invoke('show')
			cy.get(thumbnailItems).should('be.hidden').invoke('show')

			cy.eyesCheckWindow({
				tag: 'LAPTOP - Shoe Thumbnail on hover',
				ignore: [
					{selector: 'header'},
					{selector: 'footer'}
				]
			})
		})
	})

	describe('Tablet', function() {
		before(function() {
			cy.eyesOpen({
				batchName: 'UFG-Hackathon-Task1',
				appName: 'AppliFashion',
				testName: 'Task1 - Cross-Device Elements Test : Homepage - Tablet',
				browser: [
				   {width: 768, height: 700, name: 'chrome'},
				   {width: 768, height: 700, name: 'firefox'},
				   {width: 768, height: 700, name: 'edgechromium'}
				]
			})
		})

		beforeEach(function() {
			// we have to add a cy.viewport with mobile dimensions
			// otherwise some actions won't be possible (click on a button that does not appear in high size)
			// this is because the change to tablet/mobile size is just applied on applitools side, not during test running
			// hence main sections are only collapsed on tablet/mobile
			// Thus, witout viewport precision for cypress, there is no collapsing in screenshot
			cy.viewport(768, 700)
		})

		after(function() {
			cy.eyesClose()
		})

		it('Tablet : Default displaying', function() {
			cy.eyesCheckWindow({
				tag: 'TABLET - Default displaying',
			})
		})

		it('Tablet : Header - Display Menu', function() {
			// After clicking on burger menu, the list becomes visible
			cy.get(burgerMenu).click({force:true})
			cy.eyesCheckWindow('TABLET : Menu opened')

			// We close the burger menu by clicking on cross and verify the menu is no more visible
			cy.get(burgerMenuCloseCross).click({force:true})
			cy.eyesCheckWindow({
				tag: 'TABLET : Menu closed',
				target: 'region',
				selector: 'header'
			})
		})

		it('Tablet : Display Filters', function() {
			// We click on the Filters icon to open filters
			cy.get(openFiltersIcon).click()
			cy.eyesCheckWindow('TABLET : Filters opened')

			// When we close the filters sidebar, it is no more visible
			cy.get(filtersCloseCross).click()
			cy.eyesCheckWindow('TABLET : Filters closed')
		})
	})

	describe('Mobile', function() {
		before(function() {
			cy.eyesOpen({
				batchName: 'UFG-Hackathon-Task1',
				appName: 'AppliFashion',
				testName: 'Task1 - Cross-Device Elements Test : Homepage - Mobile',
				browser: {deviceName: 'iPhone X', screenOrientation: 'portrait'}
			})
		})

		beforeEach(function() {
			// we have to add a cy.viewport with mobile dimensions
			// otherwise some actions won't be possible (click on a button that does not appear in high size)
			// this is because the change to tablet/mobile size is just applied on applitools side, not during test running
			// hence main sections are only collapsed on tablet/mobile
			// Thus, witout viewport precision for cypress, there is no collapsing in screenshot
			cy.viewport(500, 700)
		})

		after(function() {
			cy.eyesClose()
		})

		it('Mobile : Default displaying', function() {
			cy.eyesCheckWindow('MOBILE - Default displaying')
		})

		it('Mobile : Header - Display Menu', function() {
			// After clicking on burger menu, the list becomes visible
			cy.get(burgerMenu).click({force:true})
			cy.eyesCheckWindow('MOBILE : Menu opened')

			// We close the burger menu by clicking on cross and verify the menu is no more visible
			cy.get(burgerMenuCloseCross).click({force:true})
			cy.eyesCheckWindow('MOBILE : Menu closed')
		})

		it('Mobile : Header - Display Search bar', function() {
			// We click on Search icon and then assert Search bar displays correctly
			cy.get(searchButtonIconMobile).click()
			cy.eyesCheckWindow({
				tag: 'MOBILE - Header : Search bar opened',
				target: 'region',
				selector: 'header'
			})

			// We close the search bar, by clicking once again on Search icon
			cy.get(searchButtonIconMobile).click()
			cy.eyesCheckWindow({
				tag: 'MOBILE - Header : Search bar closed',
				target: 'region',
				selector: 'header'
			})
		})

		it('Mobile : Display Filters', function() {
			// We click on the Filters icon to open filters
			cy.get(openFiltersIcon).click()
			cy.eyesCheckWindow('MOBILE : Filters opened')

			// When we close the filters sidebar, it is no more visible
			cy.get(filtersCloseCross).click()
			cy.eyesCheckWindow('MOBILE : Filters closed')
		})

		it('Mobile : Footer - Display Sections', function() {
			// we first open each section...
			cy.get(mainSectionsDivs).find('h3')
				.click({multiple:true})

			cy.eyesCheckWindow({
				tag: 'MOBILE - Footer : Sections opened',
				target: 'region',
				selector: 'footer'
			})

			// ... then recollapse them
			cy.get(mainSectionsDivs).find('h3')
				.click({multiple:true})

			cy.eyesCheckWindow({
				tag: 'MOBILE - Footer : Sections re-collapsed',
				target: 'region',
				selector: 'footer'
			})
		})
	})
})

describe('Task 1 - Cross-Device Elements Test : SHOE DETAILS PAGE', function() {
	before(function() {
		cy.eyesOpen({
			batchName: 'UFG-Hackathon-Task1',
			appName: 'AppliFashion',
			testName: 'Task1 - Cross-Device Elements Test : Shoe Details page - All devices'
			// in this test, we make no difference between devices, thus we rely on applitools.config.js for browsers
		})
	})

	after(function() {
		cy.eyesClose()
	})

	it('Shoe details page : SPECIAL OFFER', function() {
		cy.visit(shoeDetailsPage+shoeWithSpecialOfferId)
		cy.eyesCheckWindow('Shoe details page - SPECIAL OFFER')
	})

	it('Shoe Details page : NO OFFER', function() {
		cy.visit(shoeDetailsPage+shoeWithNoOfferId)
		cy.eyesCheckWindow('Shoe details page - NO OFFER')
	})
})

