// ELEMENTS
	const shoeName = '#shoe_name'
	const shoeImageWrapper = '#DIV__rowjustify__68'

	const shoeRating = '[id^="SPAN__rating__"]'
	const shoeDescription = '[id^="P____"]'

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

	let verifyName = (name) => {
		cy.get(shoeName).should('have.text', name)
	}

	let verifyImagePosition = () => {
		cy.get(shoeImageWrapper).should('have.css', 'justify-content', 'center')
	}

	let verifyRating = (rating) => {
		cy.get(shoeRating).find('em').should('have.text', rating)
	}

	let verifyDescription = (extract) => {
		cy.get(shoeDescription).should('contain', extract)
	}

	let verifyNewPrice = (price) => {
		cy.get(shoeNewPrice).should('have.text', price)
	}

	let verifyOldPrice = (price) => {
		cy.get(shoeOldPrice).should('have.text', price)
	}

	let verifyDiscount = (discount) => {
		cy.get(shoeDiscount).should('have.text', discount)
	}

	let verifyDefaultSize = () => {
		cy.get(shoeSizeWrapper).should('contain', 'Small (S)')
	}

	let verifyDefaultQuantity = () => {
		cy.get(shoeQuantityWrapper).within(() => {
			cy.get(shoeQuantity).should('have.attr', 'value', '1')
		})
	}

	let modifySize = () => {
		// We open the size selector and select the third entry
		cy.get(shoeSizeWrapper).within(() => {
			cy.get(sizeSelector).click()
			cy.get('.list > :nth-child(3)').click()
		})

		// We then assert that "L" is displayed in the selection box
		cy.get(shoeSizeWrapper).should('contain', 'L')
	}

	let verifyAddButton = () => {
		cy.get(addToCartBtn).scrollIntoView().should('have.text', 'Add to Cart')

	}


// TESTS

describe('Shoes Details pages : focus on differences between shoes types', function() {
	describe('Shoe with a SPECIAL OFFER Details page (shoe id = 1)', function() {
		beforeEach(function() {
			cy.visit(`./gridHackathonProductDetailsV2.html?id=${specialOfferShoe.id}`)
		})

		describe('On LAPTOP (1200x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('laptop')
			})

			it('Shoe name and image are correct', function() {
				verifyName(specialOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(specialOfferShoe.rating)
				verifyDescription(specialOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(specialOfferShoe.newPrice)
				verifyOldPrice(specialOfferShoe.oldPrice)
				verifyDiscount(specialOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})

		describe('On TABLET (768x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('tablet')
			})

			it('Shoe name and image are correct', function() {
				verifyName(specialOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(specialOfferShoe.rating)
				verifyDescription(specialOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(specialOfferShoe.newPrice)
				verifyOldPrice(specialOfferShoe.oldPrice)
				verifyDiscount(specialOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})

		describe('On MOBILE (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Shoe name and image are correct', function() {
				verifyName(specialOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(specialOfferShoe.rating)
				verifyDescription(specialOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(specialOfferShoe.newPrice)
				verifyOldPrice(specialOfferShoe.oldPrice)
				verifyDiscount(specialOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})
	})

	describe('Shoe with NO OFFER Details page (shoe id = 5)', function() {
		beforeEach(function() {
			cy.visit(`./gridHackathonProductDetailsV2.html?id=${noOfferShoe.id}`)
		})

		describe('On laptop (1200x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('laptop')
			})

			it('Shoe name and image are correct', function() {
				verifyName(noOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(noOfferShoe.rating)
				verifyDescription(noOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(noOfferShoe.newPrice)
				verifyOldPrice(noOfferShoe.oldPrice)
				verifyDiscount(noOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})

		describe('On tablet (768x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('tablet')
			})

			it('Shoe name and image are correct', function() {
				verifyName(noOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(noOfferShoe.rating)
				verifyDescription(noOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(noOfferShoe.newPrice)
				verifyOldPrice(noOfferShoe.oldPrice)
				verifyDiscount(noOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})

		describe('On mobile (500x700)', function() {
			beforeEach(function() {
				cy.goOnDevice('mobile')
			})

			it('Shoe name and image are correct', function() {
				verifyName(noOfferShoe.name)
				verifyImagePosition()
			})

			it('Rating and description are correct', function() {
				verifyRating(noOfferShoe.rating)
				verifyDescription(noOfferShoe.description)
			})

			it('Price and discount are correct', function() {
				verifyNewPrice(noOfferShoe.newPrice)
				verifyOldPrice(noOfferShoe.oldPrice)
				verifyDiscount(noOfferShoe.discount)
			})

			it('Size and Quantity default values are correct', function() {
				verifyDefaultSize()
				verifyDefaultQuantity()
			})

			it('Size can be changed', function() {
				modifySize()
			})

			it('Add to Cart button is correct', function() {
				verifyAddButton()
			})
		})
	})
})
