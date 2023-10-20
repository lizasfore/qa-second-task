class VoiceApiPage {
  checkUrlContainsVoice() {
    cy.url().should("include", "/products/voice-api");
  }
}

module.exports = new VoiceApiPage();
