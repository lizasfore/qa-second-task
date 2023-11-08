const { defineConfig } = require("cypress");
//export CYPRESS_RECORD_KEY = '796e6256-793d-4144-8dce-653cd094c42c'

module.exports = defineConfig({
  projectId: "8a9x9y",
  e2e: {
    baseUrl: "https://telnyx.com",
  },
});
