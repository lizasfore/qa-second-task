class VersusPage {
  elements = {
    detailBtn: () => cy.xpath("//button[@aria-controls='radix-:Rlmjl5m:']"),
  };

  checkBtnClickability() {
    this.elements.detailBtn().should("be.visible").should("be.enabled").click();
  }
}

module.exports = new VersusPage();
