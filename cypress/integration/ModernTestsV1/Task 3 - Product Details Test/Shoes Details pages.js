// ELEMENTS

	const shoeSizeWrapper = '#DIV__row__88'
	const sizeSelector = '.nice-select'

	const shoeQuantityWrapper = '#DIV__numbersrow__102'
	const shoeQuantity = '#quantity_1'
	const quantityIncrement = '#DIV__numbersrow__102 > :nth-child(4)'
	const quantityDecrement = '#DIV__numbersrow__102 > :nth-child(5)'

	const shoeNewPrice = '#new_price'
	const shoeOldPrice = '#old_price'
	const shoeDiscount = '#discount'

	const addToCartBtn = '#A__btn__114'

// TESTS DATA
	let specialOfferShoe = {
		id: 1,
		name: 'Appli Air x Night',
		rating: '4 reviews',
		description: 'These boots are comfortable enough to wear all day.',
		newPrice: '$33.00',
		oldPrice: '$48.00',
		discount: '-30% discount'
	}

	let noOfferShoe = {
		id: 5,
		name: 'Appli Air Zoom Alpha',
		rating: '4 reviews',
		description: 'These boots are comfortable enough to wear all day.',
		newPrice: '$140.00'
	}

// FUNCTIONS

	let modifySize = () => {
		// We open the size selector and select the third entry
		cy.get(shoeSizeWrapper).within(() => {
			cy.get(sizeSelector).click()
			cy.get('.list > :nth-child(3)').click()
		})
	}

// TESTS

describe('Shoes Details pages', function() {
	// beforeEach(function() {

	// })

	// afterEach(function() {
	// 	cy.eyesClose()
	// })


	it('Shoe with a SPECIAL OFFER', function() {
		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Shoes Details pages',
			browser: [
			   // Add browsers with different viewports
			   {width: 1200, height: 700, name: 'chrome'},
			   // {width: 1200, height: 700, name: 'firefox'},
			   // {width: 1200, height: 700, name: 'edgechromium'},
			   // {width: 768, height: 700, name: 'chrome'},
			   // {width: 768, height: 700, name: 'firefox'},
			   // {width: 768, height: 700, name: 'edgechromium'},
			   // Add mobile emulation devices
			   {deviceName: 'iPhone X', screenOrientation: 'portrait'}
			],
		})

		cy.visit(`./gridHackathonProductDetailsV1.html?id=${specialOfferShoe.id}`)

		cy.eyesCheckWindow({
			tag: 'SPECIAL OFFER Shoe - General view',
			ignore: [
				{ selector: 'header' },
				{ selector: 'footer' }
			]
		})

		cy.eyesClose()
	})

	it('Shoe with NO OFFER', function() {
		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Shoes Details pages',
			browser: [
			   // Add browsers with different viewports
			   {width: 1200, height: 700, name: 'chrome'},
			   // {width: 1200, height: 700, name: 'firefox'},
			   // {width: 1200, height: 700, name: 'edgechromium'},
			   // {width: 768, height: 700, name: 'chrome'},
			   // {width: 768, height: 700, name: 'firefox'},
			   // {width: 768, height: 700, name: 'edgechromium'},
			   // Add mobile emulation devices
			   {deviceName: 'iPhone X', screenOrientation: 'portrait'}
			],
		})

		cy.visit(`./gridHackathonProductDetailsV1.html?id=${noOfferShoe.id}`)

		cy.eyesCheckWindow({
			tag: 'NO OFFER Shoe - General view',
			ignore: [
				{ selector: 'header' },
				{ selector: 'footer' }
			]
		})

		cy.eyesClose()
	})
})
