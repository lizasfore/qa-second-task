class PricingPage {
  elements = {
    msgApiLink: () =>
      cy.xpath("//div[@class='c-uXJmG']/a[@href='/pricing/messaging']"),

    volumeBasePricing: () => cy.xpath("//div[@class='c-hlVoWg c-cVmaA']"),
    volumeBaseSection: () =>
      cy.xpath("//section[contains(@class, 'backgroundColor-black')]"),
  };

  clickOnMsgApi() {
    this.elements.msgApiLink().click();
  }

  clickNcheckVolumeSection() {
    this.elements.volumeBasePricing().click();
    this.elements.volumeBaseSection().should("be.visible");
  }
}

module.exports = new PricingPage();
