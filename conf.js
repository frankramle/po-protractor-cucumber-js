
exports.config = {
    
    framework: 'custom',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000, 
    ignoreUncaughtExceptions: true,
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
        },
    },
    // require feature files
    specs: [ 'features/e2e/*.feature'],
    baseURL: 'http://localhost:8080/',
    cucumberOpts: {
      // require step definitions
        require: ['features/step-definitions/*.steps.js'],
        tags: '@test',
        keepAlive: false,
        profile: false,
        'no-source': true
    },
    onPrepare: function () {
        const { Given, Then, When, Before, After } = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
        global.After = After;
    },
  };