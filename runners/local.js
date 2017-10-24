const webdriver = require('selenium-webdriver');

module.exports = {
  helperName() {
    return 'WebDriverIO';
  },
  getHelperOptions(credentials, options) {
    return {
      WebDriverIO: {
        desiredCapabilities: {
          name: 'test-demo',
          group: 'group-demo',
        },
        host: process.env.SELENIUM_HOST || 'localhost',
        port: process.env.SELENIUM_PORT || '4444',
        url: options.url,
        browser: process.profile || 'chrome',
        smartWait: 5000,
        restart: false,
        manualStart: true,
        windowSize: '1440x900',
        timeouts: {
          script: 60000,
        },
      }
    };
  },
  initRun(keyStore, buildName, helper) {
    helper._startBrowser();
  },
  endRun(keyStore, suiteFailed, credentials, helper) {
    if (helper.browser) {
      helper.browser.end();
    }
    // console.log(`>> TESTS ${suiteFailed ? 'FAILED' : 'PASSED'} <<`);
  },
};
