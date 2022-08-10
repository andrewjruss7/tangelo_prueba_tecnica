import LoginPage from '../integration/pageObject/loginPage';
import TravelsPage from '../integration/pageObject/travelsPage';
import 'cypress-file-upload';

const login = new LoginPage();
const travels = new TravelsPage();

Cypress.Commands.add('login', (username, password) => {
  login.clickInButtonLogin().click();
  login.insertUsername().
      type(username).
      should('have.value', username);
  login.insertPassword().
      type(password).
      should('have.value', password);
  login.clickInButtonLoginInForm().click();
});

Cypress.Commands.add('selectTrip', () => {
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