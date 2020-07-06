// ELEMENTS
	const filtersSidebar = '#filter_col'
	const openFiltersIcon = '#ti-filter'
	const openFiltersTitle = '#SPAN____209'
	const filtersFilterBtn = '#filterBtn'
	const filtersResetBtn = '#resetBtn'
	const filtersCloseCross = '#I__ticlose__71'

	const displayGridIcon = '#I__tiviewgrid__203'
	const displayListIcon = '#I__tiviewlist__205'

	const thumbnailMenu = '.grid_item ul'
	const thumbnailItems = '.grid_item ul li'

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

	let verifyThumbnailMenuOnlyOnHover = () => {
		cy.get(thumbnailMenu).should('be.hidden').invoke('show')
		cy.get(thumbnailItems).should('be.hidden').invoke('show').should('be.visible')
		cy.screenshot('Homepage on Laptop - Shoes Thumbnails on hover')
	}

	let verifyThumbnailMenuAlwaysDisplayed = () => {
		cy.get(thumbnailMenu).should('be.visible')
		cy.get(thumbnailItems).should('be.visible')
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
				cy.screenshot('Homepage on Laptop')
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
				cy.screenshot('Homepage on Tablet - Default displaying')
				cy.get(displayGridIcon).should('not.be.visible')
				cy.get(displayListIcon).should('not.be.visible')
			})

			it('Horizontal menu contains the icon "Filter". And its title "Filter" is displayed', function() {
				cy.get(openFiltersIcon).should('be.visible')
				cy.get(openFiltersTitle).should('be.visible').and('have.text', 'Filters')
			})

			it('Filters sidebar is not visible until it is accessed through icon "Filter"', function() {
				// We first assert that sidebar is not displayed by default
				cy.get(filtersSidebar).should('not.be.visible')

				// We click on the icon to open filters
				cy.get(openFiltersIcon).click()

				// We assert that after clicking, the sidebar filters is visible and verify filters' order
				cy.screenshot('Homepage on Tablet - Opened filters')
				cy.get(filtersSidebar).should('be.visible')
				verifyFiltersSidebarContentWhenVisible()

				// When we close the filters sidebar, it is no more visible
				cy.get(filtersCloseCross).click()
				cy.screenshot('Homepage on Tablet - Closed filters')
				cy.get(filtersSidebar).should('not.be.visible')
			})
		})

		describe('Filters elements - on MOBILE (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Horizontal menu contains the icon "Filter" but NOT its title "Filter"', function() {
				cy.screenshot('Homepage on Mobile - Default displaying')
				cy.get(openFiltersIcon).should('be.visible')
				cy.get(openFiltersTitle).should('not.be.visible')
			})

			it('Filters sidebar is not visible until it is accessed through icon "Filter"', function() {
				// We first assert that sidebar is not displayed by default
				cy.get(filtersSidebar).should('not.be.visible')

				// We click on the icon to open filters
				cy.get(openFiltersIcon).click()

				// We assert that after clicking, the sidebar filters is visible and verify filters' order
				cy.screenshot('Homepage on Mobile - Opened filters')
				cy.get(filtersSidebar).should('be.visible')
				verifyFiltersSidebarContentWhenVisible()

				// When we close the filters sidebar, it is no more visible
				cy.get(filtersCloseCross).click()
				cy.screenshot('Homepage on Mobile - Closed filters')
				cy.get(filtersSidebar).should('not.be.visible')
			})
		})
	})

	describe('Shoes THUMBNAILS changing elements = Thumbnail Menu (favorite, compare, cart)', function() {
		describe('Shoes Thumbnail Menu - on LAPTOP (1200x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('laptop')
			})

			it('Thumbnails menu are visible only on hover AND on the right', function() {
				verifyThumbnailMenuOnlyOnHover()
			})

		})

		describe('Shoes Thumbnail Menu - on TABLET (768x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('tablet')
			})

			it('Thumbnails menu are directly visible AND on the bottom', function() {
				cy.screenshot('Homepage Shoes Thumbnails on Tablet')
				verifyThumbnailMenuAlwaysDisplayed()
			})
		})

		describe('Shoes Thumbnail Menu - on MOBILE (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Thumbnails menu are directly visible AND on the bottom', function() {
				cy.screenshot('Homepage Shoes Thumbnails on Mobile')
				verifyThumbnailMenuAlwaysDisplayed()
			})
		})
	})
})
