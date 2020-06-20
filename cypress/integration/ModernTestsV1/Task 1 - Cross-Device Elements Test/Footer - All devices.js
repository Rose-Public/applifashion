// ELEMENTS
	const mainSectionsDivs = '[id^=DIV__collgcolmd__]'

// FUNCTIONS
	let hoverElement = (element) => {
		cy.get(element).then($el=>{
          	cy.wrap($el).invoke('show')
          	// cy.wrap($el).contains('Family').click()
        	})
	}

// TESTS
describe('Task 1 : FOOTER', function() {
	beforeEach(function() {
		cy.visit('./gridHackathonV1.html')

		cy.eyesOpen({
			appName: 'AppliFashion',
			testName: 'Task1 - FOOTER'
		})
	})

	afterEach(function() {
		cy.eyesClose()
	})

	it('Footer displaying on each device', function() {
		cy.eyesCheckWindow({
			tag: 'Footer Default displaying',
			target: 'region',
			selector: 'footer'
		})
	})

	it.only('Links have an arrow when hovered', function() {
		cy.get(mainSectionsDivs).find('#A____425').as('link')
		hoverElement(link).then(() => {
			cy.eyesCheckWindow({
				tag : 'On hover, links have an arrow and move right',
				target: 'region',
				selector: 'footer'
			})
		})
	})

	it('On mobile, all 3 main sections can be opened and collapsed again', function() {
		// This test concerns only the mobile
		cy.eyesOpen({
			browser: {deviceName: 'iPhone X', screenOrientation: 'portrait'},
			appName: 'AppliFashion',
			testName: 'Task1 - FOOTER specific Mobile tests'
		})
		// we have to add a cy.viewport with mobile dimensions
		// otherwise the mobile aspect is just applied on applitools side, not during test running
		// hence main sections are only collapsed on mobile
		// Thus, witout viewport precision for cypress, there is no collapsing in screenshot
		cy.viewport(500, 700)

		// We first assert that subsections are collapsed by default
		cy.eyesCheckWindow({
			tag: 'On Mobile : Main sections are collapsed by default',
			target: 'region',
			selector: 'footer'
		})

		// Then, when we click on all sections' titles so that they open
		cy.get(mainSectionsDivs).find('h3')
			.click({multiple:true})

		// We assert the subsections are opened
		cy.eyesCheckWindow({
			tag: 'On Mobile : Main sections can be opened',
			target: 'region',
			selector: 'footer'
		})

		// Then we re-collapse them...
		cy.get(mainSectionsDivs).find('h3')
			.click({multiple:true})

		// ... And assert they're collapsed again
		cy.eyesCheckWindow({
			tag: 'On Mobile : Main sections can be collapsed again',
			target: 'region',
			selector: 'footer'
		})
	})
})
