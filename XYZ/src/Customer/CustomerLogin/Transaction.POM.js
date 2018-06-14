"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var protractor_2 = require("protractor");
var protractor_3 = require("protractor");
var CustomerLoginPage = /** @class */ (function () {
    function CustomerLoginPage() {
    }
    CustomerLoginPage.prototype.customername = function () {
        var custname = protractor_3.element(protractor_2.by.xpath(".//*[@id='userSelect']")).all(protractor_2.by.tagName("option"));
        custname.get(2).click();
    };
    CustomerLoginPage.prototype.login = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("html/body/div[3]/div/div[2]/div/form/button")).click();
    };
    CustomerLoginPage.prototype.depositeammount = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input")).sendKeys("2000");
    };
    CustomerLoginPage.prototype.deposite = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button")).click();
    };
    CustomerLoginPage.prototype.withdrowammount = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input")).sendKeys("400");
    };
    CustomerLoginPage.prototype.withdrow = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button")).click();
    };
    CustomerLoginPage.prototype.backtransactions = function () {
        protractor_1.browser.findElement(protractor_2.by.xpath("")).click();
    };
    return CustomerLoginPage;
}());
exports.CustomerLoginPage = CustomerLoginPage;
