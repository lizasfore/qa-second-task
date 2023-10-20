import homepage from "../../tests/pages/homepage";
import signUpPage from "../../tests/pages/signUpPage";
import voiceApiPage from "../../tests/pages/voiceApiPage";
import careersPages from "../../tests/pages/careersPages";
import versusPage from "../../tests/pages/versusPage";
import blogPage from "../../tests/pages/blogPage";
import pricingPage from "../../tests/pages/pricingPage";

describe("My First Test", () => {
  xit("should not sign up with wrong email", () => {
    cy.visit("/");
    homepage.clickOnSignUp();
    signUpPage.enterWrongEmail();
    signUpPage.tickTermsAndConditions();
    signUpPage.clickSignUpBtn();
    signUpPage.checkEmailWarnMsg();
  });

  xit("should not sign up with wrong first name", () => {
    cy.visit("/");
    homepage.clickOnSignUp();
    signUpPage.enterWrongFName();
    signUpPage.tickTermsAndConditions();
    signUpPage.clickSignUpBtn();
    signUpPage.checkNameWarnMsg();
  });

  xit("should not sign up with wrong last name", () => {
    cy.visit("/");
    homepage.clickOnSignUp();
    signUpPage.enterWrongLName();
    signUpPage.tickTermsAndConditions();
    signUpPage.clickSignUpBtn();
    signUpPage.checkNameWarnMsg();
  });

  xit("should not sign up with wrong password", () => {
    cy.visit("/");
    homepage.clickOnSignUp();
    signUpPage.enterWrongPassword();
    signUpPage.tickTermsAndConditions();
    signUpPage.clickSignUpBtn();
    signUpPage.checkPasswordWarnMsg();
  });

  xit("should not sign up with terms and conditions unchecked", () => {
    cy.visit("/");
    homepage.clickOnSignUp();
    signUpPage.uncheckedTermsBox();
    signUpPage.clickSignUpBtn();
    signUpPage.checkTermsWarnMsg();
  });

  xit("url should contain voice API tags", () => {
    cy.visit("/");
    homepage.clickOnNav();
    homepage.closeCookies();
    homepage.clickNavProdBtn();
    homepage.clickNavVoiceApiBtn();
    voiceApiPage.checkUrlContainsVoice();
  });

  xit("should redirect to the vacancy window", () => {
    cy.visit("/");
    homepage.clickOnCareersBtn();
    careersPages.clickOnVacancyListed();
    careersPages.checkCorrectRedirecting();
  });

  xit("detail button should be clickable", () => {
    cy.visit("/");
    homepage.clickOnVsLink();
    versusPage.checkBtnClickability();
  });

  xit("should show correct search results", () => {
    cy.visit("/");
    homepage.closeCookies();
    homepage.clickOnNav();
    homepage.clickNavResBtn();
    homepage.clickBlogBtn();
    blogPage.searchTheBlog();
    blogPage.checkSerRes();
  });

  it("'see more' button should scroll into the corresponding page part", () => {
    cy.visit("/");
    homepage.closeCookies();
    homepage.clickOnNav();
    homepage.clickPricingBtn();
    pricingPage.clickOnMsgApi();
    pricingPage.clickNcheckVolumeSection();
  });
});
