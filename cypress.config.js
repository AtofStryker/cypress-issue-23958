const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
        launchOptions.preferences["network.cookie.sameSite.laxByDefault"] = true
        launchOptions.preferences["network.cookie.sameSite.noneRequiresSecure"] = true
        console.log(JSON.stringify(launchOptions.preferences))
      })
    },
    baseUrl: "https://cypress-dev-ed.develop.lightning.force.com"
  },
});
