// ELEMENTS
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
	let verifyOpenAndCloseBurgerMenu = () => {
		// We click on burgerMenu...
		cy.get(burgerMenu)
			.should('be.visible')
			.click()

		// ... and assert main menu div and all 5 submenus elements are visible
		cy.eyesCheckWindow({
			app: 'AppliFashion',
			testName: 'Verify Filters in Burger Menu'
		})

		// We close the burger menu by clicking on cross and verify the menu is no more visible
		cy.get(burgerMenuCloseCross).click()
		cy.get(mainMenuDiv).should('not.be.visible')
	}

// TESTS

describe('HEADER on Shoe Details page', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonProductDetailsV1.html?id=1')

		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Task1 - HEADER on Shoe Details page'
		})
	})

	afterEach(function() {
		cy.eyesClose()
	})

	it('Header elements default displaying', function() {
		cy.eyesCheckWindow({
			tag: 'Default displaying',
			target : 'region',
			selector: 'header'
		})
	})

	it('Main menu is not visible until accessed via burger menu', function() {
		// These tests concern only Tablet and Mobile
		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Task1 - HEADER on Shoe Details page',
			browser: [
				// Tablet
				{width: 768, height: 700, name: 'chrome'},
				{width: 768, height: 700, name: 'firefox'},
				{width: 768, height: 700, name: 'edgechromium'},
				// Mobile
				{deviceName: 'iPhone X', screenOrientation: 'portrait'}
			]
		})

		cy.eyesCheckWindow('Main menu before clicking on Burger Menu')

		// After clicking on burger menu, the list becomes visible
		cy.get(burgerMenu).click({force:true})

		cy.eyesCheckWindow('Main menu after clicking on Burger Menu')

		// We close the burger menu by clicking on cross and verify the menu is no more visible
		cy.get(burgerMenuCloseCross).click({force:true})
		cy.eyesCheckWindow('Main menu no more visible after closing')
	})
})
