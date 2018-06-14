"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomers = /** @class */ (function () {
    function AddCustomers() {
    }
    AddCustomers.prototype.firstname = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[1]/input")).sendKeys("Upkar");
    };
    AddCustomers.prototype.lastname = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/input")).sendKeys("Singh");
    };
    AddCustomers.prototype.postcode = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[3]/input")).sendKeys("201877");
    };
    AddCustomers.prototype.submitadd = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
    };
    AddCustomers.prototype.customername = function () {
        var customername = protractor_1.element(protractor_1.by.xpath(".//*[@id='userSelect']")).all(protractor_1.by.tagName("option"));
        customername.get(6).click();
    };
    AddCustomers.prototype.currency = function () {
        var selectcurrency = protractor_1.element(protractor_1.by.xpath(".//*[@id='currency']")).all(protractor_1.by.tagName("option"));
        selectcurrency.get(1).click();
    };
    AddCustomers.prototype.process = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
    };
    AddCustomers.prototype.alertbox = function () {
        protractor_1.browser.switchTo().alert().accept();
    };
    AddCustomers.prototype.deleteaccount = function () {
        protractor_1.browser.findElement(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[6]/td[5]/button")).click();
    };
    return AddCustomers;
}());
exports.AddCustomers = AddCustomers;
