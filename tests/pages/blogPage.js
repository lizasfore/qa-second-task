class BlogPage {
  elements = {
    searchInput: () => cy.get("#search"),

    searchRes: () =>
      cy.xpath("//li[contains(@class, 'c-buvHyO-iffuWOF-css')][4]"),
  };

  searchTheBlog() {
    this.elements.searchInput().click();
    this.elements.searchInput().type("ai");
    this.elements.searchInput().type("{enter}");
  }

  checkSerRes() {
    this.elements.searchRes().contains("AI");
  }
}

module.exports = new BlogPage();
