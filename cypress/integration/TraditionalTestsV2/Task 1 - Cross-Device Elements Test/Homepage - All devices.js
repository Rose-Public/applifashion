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
	let verifyCategories = () => {
		let filtersCategories = ['type', 'colors', 'brands', 'price']

		filtersCategories.forEach((filterCategory, index) => {
			cy.get('.filter_type').eq(index)
				.within(() => {
					cy.get('h4').should('contain', filterCategory)
				})
		})
	}

	let verifyFiltersSidebarContentWhenVisible = () => {
		// We assert filters sidebar is displayed
		cy.get(filtersSidebar).should('be.visible')
			.within(() => {
				// We assert categories' order and naming is ok
				verifyCategories()

				// We also assert both buttons for filters are displayed
				cy.get(filtersFilterBtn).scrollIntoView()
				cy.get(filtersFilterBtn).should('be.visible')
				cy.get(filtersResetBtn).should('be.visible')
			})
	}

	let verifyOpenCloseFiltersSidebar = () => {
		// We first assert that sidebar is not displayed by default
		cy.get(filtersSidebar).should('not.be.visible')

		// We click on the icon to open filters
		cy.get(openFiltersIcon).click()

		// We assert that after clicking, the sidebar filters is visible and verify filters' order
		cy.get(filtersSidebar).should('be.visible')
		verifyFiltersSidebarContentWhenVisible()

		// When we close the filters sidebar, it is no more visible
		cy.get(filtersCloseCross).click()
		cy.get(filtersSidebar).should('not.be.visible')
	}

	let verifyThumbnailMenuOnlyOnHover = (shoeType) => {
		// We first assert the thumbnail menu doesn't display if thumbnail is not hovered
		cy.get(shoeType).within(() => {
			cy.get(thumbnailMenu)
				.should('be.hidden')
		})

		// We then assert it displays on the right of the hovered thumbnail
		cy.get(shoeType).within(() => {
			cy.get(thumbnailMenu)
				.should('have.css', 'position', 'absolute')
				.and('have.css', 'top', '10px')
				.and('have.css', 'right', '10px')
		})
	}

	let verifyThumbnailMenuAlwaysDisplayed = (shoeType) => {
		// We first assert the thumbnail menu is always displayed, even if thumbnail is not hovered
		cy.get(shoeType).within(() => {
			cy.get(thumbnailMenu)
				.should('not.be.hidden')
		})

		// We then assert it displays on the right of the hovered thumbnail
		cy.get(shoeType).within(() => {
			cy.get(thumbnailMenu)
				.should('have.css', 'position', 'relative')
				.and('have.css', 'top', '0px')
				.and('have.css', 'right', '0px')
		})
	}

// TESTS

describe('HOMEPAGE : focus on elements which displaying changes from one device to the other', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV2.html')
	})

	describe('FILTERS changing elements', function() {
		describe('Filters elements - on LAPTOP (1200x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('laptop')
			})

			it('Horizontal menu contains icons to chose displaying mode', function() {
				cy.get(displayGridIcon).should('be.visible')
				cy.get(displayListIcon).should('be.visible')
			})

			it('Horizontal menu does NOT contain the icon "Filter"', function() {
				cy.get(openFiltersIcon).should('not.be.visible')
			})

			it('Filters sidebar is directly visible on main page', function() {
				verifyFiltersSidebarContentWhenVisible()
			})
		})

		describe('Filters elements - on TABLET (768x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('tablet')
			})

			it('Horizontal menu does NOT contain icons to chose displaying mode', function() {
				cy.get(displayGridIcon).should('not.be.visible')
				cy.get(displayListIcon).should('not.be.visible')
			})

			it('Horizontal menu contains the icon "Filter". And its title "Filter" is displayed', function() {
				cy.get(openFiltersIcon).should('be.visible')
				cy.get(openFiltersTitle).should('be.visible').and('have.text', 'Filters')
			})

			it('Filters sidebar is not visible until it is accessed through icon "Filter"', function() {
				verifyOpenCloseFiltersSidebar()
			})
		})

		describe('Filters elements - on MOBILE (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Horizontal menu contains the icon "Filter" but NOT its title "Filter"', function() {
				cy.get(openFiltersIcon).should('be.visible')
				cy.get(openFiltersTitle).should('not.be.visible')

			})

			it('Filters sidebar is not visible until it is accessed through icon "Filter"', function() {
				verifyOpenCloseFiltersSidebar()
			})
		})
	})

	describe('Shoes THUMBNAILS changing elements = Thumbnail Menu (favorite, compare, cart)', function() {
		describe('Shoes Thumbnail Menu (both types of shoes) - on LAPTOP (1200x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('laptop')
			})

			it('Thumbnails menu is visible only on hover AND on the right - Shoe with no offer', function() {
				verifyThumbnailMenuOnlyOnHover(shoeWithNoOfferWrapper)
			})

			it('Thumbnails menu is visible only on hover AND on the right - Shoe with Special offer', function() {
				verifyThumbnailMenuOnlyOnHover(shoeWithSpecialOfferWrapper)
			})
		})

		describe('Shoes Thumbnail Menu (both types of shoes) - on TABLET (768x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('tablet')
			})

			it('Thumbnails menu is directly visible AND on the bottom - Shoe with Special offer', function() {
				verifyThumbnailMenuAlwaysDisplayed(shoeWithSpecialOfferWrapper)
			})

			it('Thumbnails menu is directly visible AND on the bottom - Shoe with No offer', function() {
				verifyThumbnailMenuAlwaysDisplayed(shoeWithNoOfferWrapper)
			})
		})

		describe('Shoes Thumbnail Menu (both types of shoes) - on MOBILE (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Thumbnails menu is directly visible AND on the bottom - Shoe with Special offer', function() {
				verifyThumbnailMenuAlwaysDisplayed(shoeWithSpecialOfferWrapper)
			})

			it('Thumbnails menu is directly visible AND on the bottom - Shoe with No offer', function() {
				verifyThumbnailMenuAlwaysDisplayed(shoeWithNoOfferWrapper)
			})
		})
	})
})
