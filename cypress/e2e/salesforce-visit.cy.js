describe("navigates to set site", () => {
  it("does not work in chrome, but does in firefox", () => {
    cy.visit("/");
    cy.get("#username").type(Cypress.env("sf_username"));
    cy.get("#password").type(Cypress.env("sf_password"), {
      log: false,
    });
    cy.get("#Login").click();
    cy.origin("https://cypress-dev-ed.develop.lightning.force.com", () => {
      cy.get(".title.slds-truncate").first().should("have.text", "Home");
    });
  });
});
