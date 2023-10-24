const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8a9x9y",
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    baseUrl: "https://telnyx.com",
  },
});
