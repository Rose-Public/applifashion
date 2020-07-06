// ELEMENTS
	const mainSectionsWrapper = '#DIV__row__419'
	const mainSectionsDivs = '[id^=DIV__collgcolmd__]'
	const subsectionsDivs = '[id^=collapse_]'

	const additionnalSectionsWrapper = '#DIV__rowaddbott__455'

// FUNCTIONS
	let verifyDisplayWrap = function(div) {
		cy.get(div).should('have.css', 'flex-wrap', 'wrap')
	}

	let verifyDisplayOpened = function(div) {
		cy.get(div).should('have.css', 'display', 'block')
	}

// TESTS

describe('FOOTER : focus on elements which displaying changes from one device to the other', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV1.html')
	})

	describe('Main sections displaying - All devices', function() {
		it('Main sections display according to the available space - All devices', function() {
			cy.goOnDevice('laptop')
			verifyDisplayWrap(mainSectionsWrapper)

			cy.goOnDevice('tablet')
			verifyDisplayWrap(mainSectionsWrapper)

			cy.goOnDevice('mobile')
			verifyDisplayWrap(mainSectionsWrapper)
		})
	})
	describe('Main sections changing elements - on LAPTOP (1200x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('laptop')
		})

		it('All 3 main sections are always opened', function() {
			cy.screenshot('Footer Main sections on Laptop')
			verifyDisplayOpened(subsectionsDivs)
		})
	})

	describe('Main sections changing elements - on TABLET (768x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('tablet')
		})

		it('All 3 main sections are always opened', function() {
			cy.screenshot('Footer Main sections on Tablet')
			verifyDisplayOpened(subsectionsDivs)
		})
	})

	describe('Main sections changing elements - on MOBILE (500x700)', function() {
		beforeEach(function() {
			cy.goOnDevice('mobile')
		})

		it('All 3 main sections are collapsed by default', function() {
			cy.screenshot('Footer Main sections on Mobile - Default displaying')
			cy.get(subsectionsDivs).should('have.css', 'display', 'none')
		})

		it('All 3 main sections can be opened to display subsections', function() {
			// We first assert that subsections are collapsed by default
			cy.get(subsectionsDivs)
				.should('not.have.class', 'show')

			// Then, when we click on all sections' titles so that they open
			cy.get(mainSectionsDivs).find('h3')
				.click({multiple:true})

			// We assert the subsections are opened
			cy.screenshot('Footer Main sections on Mobile - After opening')
			cy.get(subsectionsDivs)
				.should('have.class', 'show')

			// Then we re-collapse them...
			cy.get(mainSectionsDivs).find('h3')
				.click({multiple:true})

			// ... And assert they're collapsed again
			cy.screenshot('Footer Main sections on Mobile - After recollapsing')
			cy.get(subsectionsDivs)
				.should('not.have.class', 'show')
		})
	})

	describe('Additionnal sections displaying - All devices', function() {
		it('Additionnal sections display according to the available space - All devices', function() {
			cy.goOnDevice('laptop')
			verifyDisplayWrap(additionnalSectionsWrapper)

			cy.goOnDevice('tablet')
			verifyDisplayWrap(additionnalSectionsWrapper)

			cy.goOnDevice('mobile')
			verifyDisplayWrap(additionnalSectionsWrapper)
		})
	})
})
