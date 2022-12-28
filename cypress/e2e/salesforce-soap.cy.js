describe("Salesforce Simple Login", () => {
  beforeEach(() => {
    // Before each Test we will login into Salesforce.
    cy.loginIntoSalesforce();
  });

  it("Just login into Salesforce and check if we load any page.", () => {
    cy.get(".title.slds-truncate").first().should('have.text', 'Home');
  });

  // it('test', () => {
  //   cy.on('uncaught:exception', (e) => false)
    // cy.intercept('*appcore.js*', (req) => {
    //   req.continue((res) => {
    //     debugger
    //     res.body = res.body.replaceAll("return window.self===window.top", "return window.self===window.self")
    //     res.body = res.body.replaceAll("return window.self!==window.top", "return window.self!==window.self")
    //     res.body = res.body.replaceAll("window.top===window", "window.self===window")
    //     debugger
    //   })
    // })
  //   cy.visit('https://cypress-dev-ed.develop.lightning.force.com/')
  //   cy.get('#username').type(Cypress.env("sf_username"))
  //   cy.get('#password').type(Cypress.env("sf_password"))
  //   cy.get('#Login').click()
  //   cy.wait(8000)
  // })
});
