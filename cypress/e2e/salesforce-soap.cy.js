describe("Salesforce Simple Login", () => {
  beforeEach(() => {
    // Before each Test we will login into Salesforce.
    cy.loginIntoSalesforce();
  });

  it("Just login into Salesforce and check if we load any page.", () => {
    cy.on('uncaught:exception', () => false)
    // cy.get(".title.slds-truncate").first().should('have.text', 'Home');
    cy.wait(5000)
    // NOTE: can we fix this to not do a redirect? maybe modifgy metadata headers?
    cy.visit('https://cypress-dev-ed.develop.my.salesforce.com/')
    // cy.reload()
  });
});
