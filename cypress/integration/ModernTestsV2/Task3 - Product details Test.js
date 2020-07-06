// URLS
	const shoeDetailsPage = './gridHackathonProductDetailsV2.html?id='

// DATA
	const shoeWithSpecialOfferId = '1'
	const shoeWithNoOfferId = '5'

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

// FUNCTIONS

// TESTS

describe('Task 3 - Shoes Details pages', function() {
	before(function() {
		cy.eyesOpen({
			batchName: 'UFG-Hackathon-Task3',
			appName: 'AppliFashion',
			testName: 'Task3 - Shoes Details pages - All devices'
		})
	})

	after(function() {
		cy.eyesClose()
	})

	it('Shoe with a SPECIAL OFFER', function() {
		cy.visit(shoeDetailsPage+shoeWithSpecialOfferId)

		cy.eyesCheckWindow({
			tag: 'SPECIAL OFFER Shoe Page',
			ignore: [
				{ selector: 'header' },
				{ selector: 'footer' }
			]
		})
	})

	it('Shoe with NO OFFER', function() {
		cy.visit(shoeDetailsPage+shoeWithNoOfferId)

		cy.eyesCheckWindow({
			tag: 'NO OFFER Shoe Page',
			ignore: [
				{ selector: 'header' },
				{ selector: 'footer' }
			]
		})
	})
})
