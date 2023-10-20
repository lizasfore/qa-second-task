class CareersPage {
  elements = {
    vacancyLink: () =>
      cy.xpath(
        "//a[@href='https://boards.greenhouse.io/telnyx54/jobs/5640787003']"
      ),

    applyBtn: () => cy.get("#apply_button"),
  };

  clickOnVacancyListed() {
    this.elements.vacancyLink().click();
  }

  checkCorrectRedirecting() {
    cy.visit("https://boards.greenhouse.io/telnyx54/jobs/5640787003");
    cy.url().should("not.include", "/careers");
  }
}

module.exports = new CareersPage();
