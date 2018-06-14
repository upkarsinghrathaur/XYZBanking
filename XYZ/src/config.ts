import { Config } from "protractor";
import { Promise } from 'es6-promise';

var screenshots = require('protractor-take-screenshots-on-demand');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'e://testtarget',
  filename: 'Myreport.html',
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: false,
  reportFailedUrl: true,
  reportTitle: "Test Report",
  pathBuilder: function(currentSpec, suites, browserCapabilities) {
    // will return chrome/your-spec-name.png
    return browserCapabilities.get('browserName') +" "+ currentSpec.fullName;
  }
});
export let config: Config = {
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['BankManage/AddCustomer/./**/Add.spec.js'],
    specs: ['Customer/CustomerLogin/./**/Transaction.spec.js'],
    // Assign the test reporter to each running instance
   onPrepare: function() {
    //joiner between browser name and file name
   screenshots.browserNameJoiner = ' - '; //this is the default
   // Assign the test reporter to each running instance
   jasmine.getEnv().addReporter(reporter);
    //folder of screenshots
   screenshots.screenShotDirectory = 'e://testtarget';
    //creates folder of screenshots
   screenshots.createDirectory();
  }, 
   // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  afterLaunch: function(exitCode) {
    const newLocal = this;
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(newLocal, exitCode));          
    });
  }
};