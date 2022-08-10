class TravelsPage {
  departing = 0;
  returning = 1;

  elements = {
    calendar: (x) => cy.get('[data-react-toolbox="date-picker"]').eq(x),
    date: (z) => cy.get('.theme__active___2k63V > span').eq(z),
    okInDeparting: () => cy.get('[data-react-toolbox="button"]').contains('Ok'),
    OkInReturning: () => cy.get('.theme__navigation___3eiS- > :nth-child(2)'),
    adults: () => cy.get(
        '.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY'),
    numberOfAdults: () => cy.get(
        '.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)'),
    children: () => cy.get(
        ':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY'),
    numberOfChildren: () => cy.get(
        '.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)'),
    selectDestination: () => cy.get(
        'button').contains('Select Destination'),
    cardDestination: () => cy.get('button').contains('Book'),
  };

  selectDeparting() {
    return this.elements.calendar(this.departing);
  }

  selectDateDeparting() {
    return this.elements.date(this.departing);
  }

  OkInDeparting() {
    return this.elements.okInDeparting();
  }

  OkInReturning() {
    return this.elements.OkInReturning().eq(this.returning);
  }

  selectReturning() {
    return this.elements.calendar(this.returning);
  }

  selectDateReturning() {
    return this.elements.date(this.returning);
  }

  selectAdults() {
    this.elements.adults().click();
    this.elements.numberOfAdults().click();
  }

  selectChildren() {
    this.elements.children().click();
    this.elements.numberOfChildren().click();
  }

  buttonSelectDestination() {
    return this.elements.selectDestination();
  }

  selectCardDestination() {
    return this.elements.cardDestination();
  }

}

export default TravelsPage;