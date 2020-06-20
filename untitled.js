	// Those are wrappers...
	const randomShoeWrapper = '.grid_item'
	const reducedPriceShoeExample = '#DIV__griditem__211';
	const normalPriceShoeExample = '#DIV__griditem__261';

	// ... for those elements, use a "within..." with former wrapper
	const thumbnailImage = '[id^="IMG__imgfluid"]';
	const thumbnailTitle = 'h3';
	const thumbnailCurrentPrice = '[id^="SPAN__newprice__"]';
	const thumbnailOldPrice = '[id^="SPAN__oldprice__"]';
	const thumbnailReduction = '[id^="SPAN__ribbonoff__"]';
	const thumbnailTimeLeft = '[id^="DIV__countdown__"]';
	const thumbnailMenu = '[id^="UL____"]';



	let verifyNoOfferShoeItem = function() {
		cy.get(normalPriceShoeExample).within(() => {
			// Elements linked to shoe description must be visible
			cy.get(thumbnailImage).should('be.visible');
			cy.get(thumbnailTitle).should('be.visible');
			cy.get(thumbnailCurrentPrice).should('be.visible');

			// Elements linked to reduction must not be displayed
			cy.get(thumbnailOldPrice).should('not.be.visible');
			cy.get(thumbnailReduction).should('not.be.visible');
			cy.get(thumbnailTimeLeft).should('not.be.visible');
		});
	}

	let verifySpecialOfferShoeItem = function() {
		cy.get(reducedPriceShoeExample).within(() => {
			// Elements linked to shoe description must be visible
			cy.get(thumbnailImage).should('be.visible');
			cy.get(thumbnailTitle).should('be.visible');
			cy.get(thumbnailCurrentPrice).should('be.visible');

			// Elements linked to reduction must also be displayed
			cy.get(thumbnailOldPrice).should('be.visible');
			cy.get(thumbnailReduction).should('be.visible');
			cy.get(thumbnailTimeLeft).should('be.visible');
		})
	}
