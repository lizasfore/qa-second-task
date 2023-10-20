require("cypress-xpath");

class SignUpPage {
  elements = {
    emailInput: () => cy.get("#email"),

    firstNameInput: () => cy.get("#first_name"),

    lastNameInput: () => cy.get("#last_name"),

    passwordInput: () => cy.get("#password"),

    checkBoxTerms: () => cy.get("#terms_and_conditions"),

    signUpBtn: () => cy.xpath("//button[contains(@class, 'c-ddSKil')]"),

    emailMsg: () => cy.get("#email_message"),

    passwordMsg: () => cy.get("#password_message"),

    NameMsg: () => cy.xpath("//div[contains(@class, 'kDyeyw-type-error')]"),

    termsMsg: () => cy.get("#terms_and_conditions_message"),
  };

  enterWrongEmail() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds");
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type("Qwerty");
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type("Ster");
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesDvsvvfsgh2342-");
  }

  enterWrongFName() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds.com");
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type(".../////");
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type("Ster");
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesDvsvvfsgh2342-");
  }

  enterWrongLName() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds.com");
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type("Qwerty");
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type(".../////");
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesDvsvvfsgh2342-");
  }

  enterWrongPassword() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds.com");
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type("Qwerty");
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type("Esdggsr");
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesvsvvfsgh2342");
  }

  uncheckedTermsBox() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds.com");
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type("Qwerty");
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type("Esdggsr");
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesDvsvvfsgh2342-");
  }

  clickSignUpBtn() {
    this.elements.signUpBtn().click();
  }

  tickTermsAndConditions() {
    this.elements.checkBoxTerms().check();
  }

  checkEmailWarnMsg() {
    this.elements.emailMsg().should("exist");
  }

  checkNameWarnMsg() {
    this.elements.NameMsg().should("exist");
  }

  checkPasswordWarnMsg() {
    this.elements.passwordMsg().should("exist");
  }

  checkTermsWarnMsg() {
    this.elements.termsMsg().should("exist");
  }
}

module.exports = new SignUpPage();
