
exports.config = {
    
    framework: 'custom',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000, 
    ignoreUncaughtExceptions: true,
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // browser not headless
            //args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
            // browser headless 
            args: ['--disable-gpu', '--disable-dev-shm-usage', '--disable-impl-side-painting', '--disable-gpu-sandbox', '--disable-accelerated-2d-canvas', '--disable-accelerated-jpeg-decoding', '--disable-popup-blocking', '--no-sandbox', '--test-type=ui', '--window-size=1366,768', '--headless'],
        
        },
    },
    specs: [ 'src/features/*.feature'],
    baseURL: 'http://localhost:8080/',
    cucumberOpts: {
        require: ['src/step-definitions/*.steps.js'],
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