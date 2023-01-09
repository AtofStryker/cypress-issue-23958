const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cypress-dev-ed.develop.lightning.force.com",
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSkipDomainInjection: ['*.salesforce.com', '*.force.com']
  },
});
