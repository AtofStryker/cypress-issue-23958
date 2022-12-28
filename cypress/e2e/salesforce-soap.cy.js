describe("Salesforce Simple Login", () => {
  beforeEach(() => {
    cy.loginIntoSalesforce();
  });

  it("Just login into Salesforce and check if we load any page.", () => {
    cy.get(".title.slds-truncate").first().should('have.text', 'Home');
  });
});
