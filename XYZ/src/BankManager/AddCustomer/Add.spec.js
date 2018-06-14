"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Add_POM_1 = require("./Add.POM");
var protractor_1 = require("protractor");
var screenshots = require('protractor-take-screenshots-on-demand');
describe('Add New Customer', function () {
    var Addcust_POM = new Add_POM_1.AddCustomers();
    protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    protractor_1.browser.manage().timeouts().implicitlyWait(3000);
    // beforeEach( function(){
    protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[1]/div[2]/button")).click();
    // });   
    it('TC1', function () {
        protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[1]")).click();
        Addcust_POM.firstname();
        Addcust_POM.lastname();
        Addcust_POM.postcode();
        protractor_1.browser.sleep(2000);
        screenshots.takeScreenshot('Test1');
        Addcust_POM.submitadd();
        Addcust_POM.alertbox();
    }),
        it('TC2', function () {
            protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[2]")).click();
            Addcust_POM.customername();
            protractor_1.browser.sleep(3000);
            Addcust_POM.currency();
            protractor_1.browser.sleep(2000);
            screenshots.takeScreenshot('Test2');
            Addcust_POM.process();
            Addcust_POM.alertbox();
        }),
        it('TC3', function () {
            protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[3]")).click();
            screenshots.takeScreenshot('Test3');
            protractor_1.browser.sleep(4000);
            Addcust_POM.deleteaccount();
            protractor_1.browser.sleep(4000);
        });
});
