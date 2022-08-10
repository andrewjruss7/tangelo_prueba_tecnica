class CheckoutPage {
  elements = {
    name: () => cy.get('form > :nth-child(1) > .theme__inputElement___27dyY'),
    email: () => cy.get('form > :nth-child(2) > .theme__inputElement___27dyY'),
    socialSecurityNumber: () => cy.get(
        ':nth-child(3) > .theme__inputElement___27dyY'),
    phone: () => cy.get(':nth-child(4) > .theme__inputElement___27dyY'),
    importFile: () => cy.get('.CustomerInfo__dropzone-box___27VMo'),
    termsAndCondts: () => cy.get('[data-react-toolbox="checkbox"]'),
    promo: () => cy.get('[name="promo"]'),
  };

  inputName() {
    return this.elements.name();
  }

  inputEmail() {
    return this.elements.email();
  }

  inputSocialSecurityNumber() {
    return this.elements.socialSecurityNumber();
  }

  inputPhone() {
    return this.elements.phone();
  }

  importFile() {
    return this.elements.importFile().attachFile('bug.jpeg');
  }

  termsAndCondts() {
    return this.elements.termsAndCondts();
  }

  inputPromo() {
    return this.elements.promo();
  }
}

export default CheckoutPage;