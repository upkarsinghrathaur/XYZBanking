"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_POM_1 = require("./Transaction.POM");
var protractor_1 = require("protractor");
var screenshots = require('protractor-take-screenshots-on-demand');
describe('Customer Login Page', function () {
    var Trans_POM = new Transaction_POM_1.CustomerLoginPage();
    protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    protractor_1.browser.manage().timeouts().implicitlyWait(3000);
    it('TC1', function () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[1]/div[1]/button")).click();
        Trans_POM.customername();
        protractor_1.browser.sleep(3000);
        screenshots.takeScreenshot('Test1');
        Trans_POM.login();
        protractor_1.browser.sleep(3000);
    }),
        it('TC2', function () {
            protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[2]")).click();
            protractor_1.browser.sleep(3000);
            Trans_POM.depositeammount();
            screenshots.takeScreenshot('Test2');
            Trans_POM.deposite();
            protractor_1.browser.sleep(3000);
        }),
        it('TC3', function () {
            protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[3]")).click();
            Trans_POM.withdrowammount();
            screenshots.takeScreenshot('Test3');
            Trans_POM.withdrow();
            protractor_1.browser.sleep(3000);
        }),
        it('TC4', function () {
            protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[1]")).click();
            screenshots.takeScreenshot('Test4');
            protractor_1.browser.sleep(3000);
        });
});
