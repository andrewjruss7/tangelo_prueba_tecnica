import TravelsPage from '../pageObject/travelsPage';

describe('Search Travels', () => {
  const travels = new TravelsPage();
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should select trip', () => {
    travels.selectDeparting().click();
    travels.selectDateDeparting().click();
    travels.OkInDeparting().click();

    travels.selectReturning().click();
    travels.selectDateReturning().click();
    travels.OkInReturning().click();

    travels.selectAdults();
    travels.selectChildren();
    travels.buttonSelectDestination().click();
    travels.selectCardDestination().first().click();
  });
});