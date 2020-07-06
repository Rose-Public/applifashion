// ELEMENTS
	const logo = '#logo'

	const mainMenuDiv = '#DIV__mainmenu__15'
	const submenusList = '#UL____21'
	const burgerMenu = '#DIV__hamburgerb__13'
	const burgerMenuCloseCross = '#I__ticlose__20'

	const searchBarWrapper = '#DIV__customsear__41'
	const searchBarBigView = '#INPUTtext____42'
	const searchBarLittleView = '#INPUTtext__formcontro__62'
	const searchButtonIcon = '#BUTTONsubmit____43'
	const searchButtonIconMobile = '#A__btnsearchm__59'
	const searchButtonMobile = '#INPUTsubmit__btnfullwid__63'

	const profileIcon = '#A__accesslink__56'
	const favoriteIcon = '#A__wishlist__52'
	const cartIcon = '#A__cartbt__49'
	const cartItemsCounter = '#STRONG____50'


// FUNCTIONS
	let verifySubmenus = () => {
		cy.get(submenusList).within(() => {

			let submenus = ['HOME', 'MEN', 'WOMEN', 'RUNNING', 'TRAINING']

			submenus.forEach((submenu, index) => {
				cy.get('li').eq(index)
					.should('be.visible')
					.and('contain', submenu)
			})
		})
	}

	let verifySearchbarBigView = () => {
		cy.get(searchBarWrapper)
			.should('be.visible')
			.within(() => {
				cy.get(searchBarBigView).should('have.attr', 'placeholder', 'Search over 10,000 shoes!')
				cy.get(searchButtonIcon).should('be.visible')
		})
	}

// TESTS

describe('HEADER on Homepage : focus on elements which displaying changes from one device to the other', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV2.html')
	})

	describe('Header elements - on LAPTOP (1200x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('laptop')
		})

		it('Logo is visible', function() {
			cy.screenshot('Header-Homepage on Laptop')
			cy.get(logo).should('be.visible')
		})

		it('Main menu is visible and has correct content', function() {
			cy.get(mainMenuDiv).should('be.visible')
			verifySubmenus()
		})

		it('Searchbar is visible and has correct content', function() {
			verifySearchbarBigView()
		})

		it('Profile icon is visible', function() {
		 	cy.get(profileIcon).should('be.visible')
		})

		it('Favorite icon is visible', function() {
			cy.get(favoriteIcon).should('be.visible')
		})

		it('Cart icon is visible', function() {
			cy.get(cartIcon).should('be.visible')
		})

		it('Cart item counter is visible', function() {
			cy.get(cartItemsCounter).should('be.visible')
		})
	})

	describe('Header elements - on TABLET (768x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('tablet')
		})

		it('Logo is visible', function() {
			cy.screenshot('Header-Homepage on Tablet - Default displaying')
			cy.get(logo).should('be.visible')
		})

		it('Main menu is not visible until accessed via burger menu', function() {
			// We first check main menu and submenus are not directly visible on main page
			cy.get(mainMenuDiv).should('not.be.visible')
			cy.get(submenusList).should('not.be.visible')

			// After clicking on burger menu, the list becomes visible
			cy.get(burgerMenu)
				.should('be.visible')
				.click()

			// We assert main menu div and all 5 submenus elements are visible
			cy.screenshot('Header-Homepage on Tablet - After opening Menu')
			cy.get(mainMenuDiv).should('be.visible')
			verifySubmenus()

			// We close the burger menu by clicking on cross and verify the menu is no more visible
			cy.get(burgerMenuCloseCross).click()
			cy.screenshot('Header-Homepage on Tablet - After closing Menu')
			cy.get(mainMenuDiv).should('not.be.visible')
		})

		it('Searchbar is visible and has correct content', function() {
			verifySearchbarBigView()
		})

		it('Profile icon is visible', function() {
		 	cy.get(profileIcon).should('be.visible')
		})

		it('Favorite icon is not visible', function() {
			cy.get(favoriteIcon).should('not.be.visible')
		})

		it('Cart icon is visible', function() {
			cy.get(cartIcon).should('be.visible')
		})

		it('Cart item counter is visible', function() {
			cy.get(cartItemsCounter).should('be.visible')
		})
	})

	describe('Header elements - on MOBILE (500x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('mobile')
		})

		it('Logo is visible', function() {
			cy.screenshot('Header-Homepage on Mobile - Default displaying')
			cy.get(logo).should('be.visible')
		})

		it('Main menu is not visible until accessed via burger menu', function() {
			// We first check main menu and submenus are not directly visible on main page
			cy.get(mainMenuDiv).should('not.be.visible')
			cy.get(submenusList).should('not.be.visible')

			// After clicking on burger menu, the list becomes visible
			cy.get(burgerMenu)
				.should('be.visible')
				.click()

			// We assert main menu div and all 5 submenus elements are visible
			cy.screenshot('Header-Homepage on Mobile - After opening Menu')
			cy.get(mainMenuDiv).should('be.visible')
			verifySubmenus()

			// We close the burger menu by clicking on cross and verify the menu is no more visible
			cy.get(burgerMenuCloseCross).click()
			cy.screenshot('Header-Homepage on Mobile - After closing Menu')
			cy.get(mainMenuDiv).should('not.be.visible')
		})

		it('A Search icon is visible', function() {
			cy.get(searchButtonIconMobile).should('be.visible')
		})

		it('Search bar is not visible until accessed via Search icon', function() {
			// We assert Search bar is not visible (neither big nor little view)
			cy.get(searchBarBigView).should('not.be.visible')
			cy.get(searchBarLittleView).should('not.be.visible')

			// We click on Search button and then assert Search bar displays correctly
			cy.get(searchButtonIconMobile).click()
			cy.screenshot('Header-Homepage on Mobile - After opening Searchbar')
			cy.get(searchBarLittleView)
				.should('be.visible')
				.and('have.attr', 'placeholder', 'Search over 10,000 shoes!')
			cy.get(searchButtonMobile).should('be.visible')

			// We close the search bar, by clicking once again on Search button
			cy.get(searchButtonIconMobile).click()

			// We assert again that Search bar is not visible (neither big nor little view)
			cy.screenshot('Header-Homepage on Mobile - After closing Searchbar')
			cy.get(searchBarBigView).should('not.be.visible')
			cy.get(searchBarLittleView).should('not.be.visible')
		})

		it('Profile icon is visible', function() {
			cy.get(profileIcon).should('be.visible')
		})

		it('Favorite icon is not visible', function() {
			cy.get(favoriteIcon).should('not.be.visible')
		})

		it('Cart icon is visible', function() {
			// We assert Cart icon is visible
			cy.get(cartIcon).should('be.visible')
		})

		it('Cart items counter is not visible', function() {
			cy.get(cartItemsCounter).should('not.be.visible')
		})
	})
})
