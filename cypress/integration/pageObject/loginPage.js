class LoginPage {
  elements = {
    buttonLogin: () => cy.contains('button', 'Log in'),
    username: () => cy.get('[tabindex="1"]'),
    password: () => cy.get('[tabindex="2"]'),
    buttonLoginForm: () => cy.get('[tabindex="3"]'),
    assertLoginOK: () => cy.contains('.mui-btn > :nth-child(1)', 'Hello, John')
  };

  clickInButtonLogin() {
    return this.elements.buttonLogin();
  }

  insertUsername() {
    return this.elements.username();
  }

  insertPassword() {
    return this.elements.password();
  }

  clickInButtonLoginInForm() {
    return this.elements.buttonLoginForm();
  }

  assertLoginOK() {
    return this.elements.assertLoginOK();
  }
}

export default LoginPage;