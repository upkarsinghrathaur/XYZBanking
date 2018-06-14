import { AddCustomers } from "./Add.POM";
import { browser, by, element } from "protractor";
var screenshots = require('protractor-take-screenshots-on-demand');
describe('Add New Customer',() =>{
   let Addcust_POM= new AddCustomers(); 
   
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    browser.manage().timeouts().implicitlyWait(3000);
   // beforeEach( function(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/div[2]/button")).click();
   // });   
   it('TC1',function(){
element(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[1]")).click();
Addcust_POM.firstname();
Addcust_POM.lastname();
Addcust_POM.postcode();
browser.sleep(2000);
screenshots.takeScreenshot('Test1');
Addcust_POM.submitadd();
Addcust_POM.alertbox();
    }),
    it('TC2', function(){
element(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[2]")).click();
Addcust_POM.customername();
browser.sleep(3000);
Addcust_POM.currency();
browser.sleep(2000);
screenshots.takeScreenshot('Test2');
Addcust_POM.process();
Addcust_POM.alertbox();

    }),
    it('TC3', function(){
element(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/button[3]")).click();  
screenshots.takeScreenshot('Test3');  
browser.sleep(4000);
Addcust_POM.deleteaccount();
browser.sleep(4000);

    })
});