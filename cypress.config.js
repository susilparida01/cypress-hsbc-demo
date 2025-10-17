const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.hsbc.co.in/",
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    },
});
