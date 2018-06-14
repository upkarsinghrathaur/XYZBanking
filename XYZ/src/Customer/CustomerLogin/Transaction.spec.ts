import { CustomerLoginPage } from "./Transaction.POM";
import { browser, element, by } from "protractor";
var screenshots = require('protractor-take-screenshots-on-demand');
describe('Customer Login Page', () =>{
let Trans_POM= new CustomerLoginPage();
browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
browser.manage().timeouts().implicitlyWait(3000);
it('TC1', function(){
    element(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/div[1]/button")).click();
    Trans_POM.customername();
    browser.sleep(3000);
    screenshots.takeScreenshot('Test1');
    Trans_POM.login();
    browser.sleep(3000);
}),
it('TC2', function(){
    element(by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[2]")).click();
    browser.sleep(3000);
    Trans_POM.depositeammount();
    screenshots.takeScreenshot('Test2');
    Trans_POM.deposite();
    browser.sleep(3000);
}),
it('TC3', function(){
    element(by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[3]")).click();
    Trans_POM.withdrowammount();
    screenshots.takeScreenshot('Test3');
    Trans_POM.withdrow();
    browser.sleep(3000);
}),
it('TC4', function(){
    element(by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[1]")).click();
    screenshots.takeScreenshot('Test4');
    browser.sleep(3000);
})
});