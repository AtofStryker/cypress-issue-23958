describe("navigates to set site", () => {
  it("works with cy.origin()", () => {
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
