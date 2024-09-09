const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a3egjm",

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
