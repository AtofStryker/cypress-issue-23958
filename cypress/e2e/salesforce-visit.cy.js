describe("navigates to set site", () => {
    it('does not work in chrome, but does in firefox', () => {
      cy.visit('https://alexdebug-moj.cs88.force.com/s/mytest')
    })
  });