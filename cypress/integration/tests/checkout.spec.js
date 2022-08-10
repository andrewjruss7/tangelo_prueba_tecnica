import CheckoutPage from '../pageObject/checkoutPage';

const data = require('../../fixtures/user.json');
describe('Checkout', () => {
  const checkout = new CheckoutPage();
  data.forEach(credentials => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(credentials.name, credentials.password);
      cy.selectTrip();
    });

    it('Should Checkout', () => {
      checkout.inputName().
          type(credentials.name).
          should('have.value', credentials.name);
      checkout.inputEmail().
          type(credentials.email).
          should('have.value', credentials.email);
      checkout.inputSocialSecurityNumber().
          type(credentials.socialNumber).
          should('have.value', credentials.socialNumber);
      checkout.inputPhone().
          type(credentials.phone).
          should('have.value', credentials.phone);
      checkout.importFile();
      checkout.termsAndCondts().click();
      checkout.inputPromo().
          type(credentials.promo).
          should('have.value', credentials.promo);
    });
  });
});