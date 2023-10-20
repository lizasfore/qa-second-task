class HomePage {
  elements = {
    signUpBtn: () => cy.get("#header-sign-up"),

    navBtn: () => cy.xpath('//button[@aria-controls="navigation"]'),

    navProdBtn: () => cy.xpath("//button[@id='radix-:R19d63m:']"),

    navVoiceApiBtn: () => cy.xpath("//a[@id='5UHFRLQeoNhp2iDrDchydl']"),

    cookiesCloseBtn: () =>
      cy.xpath("//button[contains(@class, 'banner-close-button')]"),

    careersLink: () => cy.xpath("//a[@href='/careers']"),

    telVsAmazonLink: () =>
      cy.xpath("//a[@href='/the-better-amazon-s3-alternative']"),

    navResBtn: () => cy.xpath("//button[@id='radix-:R1dd63m:']"),

    blogLink: () => cy.get("#7XBYQT5t19ZFhKiRq8naT"),

    navPricingBtn: () => cy.xpath("//button[@id='radix-:R1bd63m:']"),

    allPricingLink: () =>
      cy.xpath("//div[@role = 'menuitem']/a[@href='/pricing']"),
  };

  clickOnSignUp() {
    this.elements.signUpBtn().click();
  }

  clickOnNav() {
    this.elements.navBtn().click();
  }

  closeCookies() {
    this.elements.cookiesCloseBtn().click();
  }

  clickNavProdBtn() {
    this.elements.navProdBtn().click();
  }

  clickNavVoiceApiBtn() {
    this.elements.navVoiceApiBtn().click();
  }

  clickOnCareersBtn() {
    this.elements.careersLink().click();
  }

  clickOnVsLink() {
    this.elements.telVsAmazonLink().click();
  }

  clickNavResBtn() {
    this.elements.navResBtn().click();
  }

  clickBlogBtn() {
    this.elements.blogLink().click();
  }

  clickPricingBtn() {
    this.elements.navPricingBtn().click();
    this.elements.allPricingLink().click();
  }
}

module.exports = new HomePage();
