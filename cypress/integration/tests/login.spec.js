import LoginPage from '../pageObject/loginPage';

const data = require('../../fixtures/user.json');
describe('Login', () => {
  const login = new LoginPage();

  beforeEach(() => {
    cy.visit('/');
  });

  data.forEach(credentials => {
    it('Should login', () => {
      login.clickInButtonLogin().click();
      login.insertUsername().
          type(credentials.email).
          should('have.value', credentials.email);
      login.insertPassword().
          type(credentials.password).
          should('have.value', credentials.password);
      login.clickInButtonLoginInForm().click();
      login.assertLoginOK().should('be.visible');
    });
  });
});