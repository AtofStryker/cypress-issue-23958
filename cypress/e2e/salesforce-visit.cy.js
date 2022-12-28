describe("navigates to set site", () => {
  it("does not work in chrome, but does in firefox", () => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("sf_username"));
    cy.get("#password").type(Cypress.env("sf_password"), {
      log: false,
    });
    cy.get("#Login").click();
    // NOTE: this is not a pattern we want to encourage. We should be able to set base url and immediately hop into a cy.origin
    cy.origin("https://cypress-dev-ed.develop.lightning.force.com", () => {
      cy.get(".title.slds-truncate").first().should("have.text", "Home");
    });
  });
});
