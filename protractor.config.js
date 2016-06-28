'use strict';

//this is the port the application is running on
var port =  3000;

exports.config = {
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'test/e2e/**/*.scenario.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
