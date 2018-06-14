import { browser, by, element } from "protractor";
import { Alert } from "selenium-webdriver";

export class AddCustomers{

    firstname(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[1]/input")).sendKeys("Upkar");
    }
    lastname(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/input")).sendKeys("Singh");
    }
    postcode(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[3]/input")).sendKeys("201877");
    }
    submitadd(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
    }
    customername(){
        let customername = element(by.xpath(".//*[@id='userSelect']")).all(by.tagName("option"));
        customername.get(6).click();
    }
    currency(){
        let selectcurrency =element(by.xpath(".//*[@id='currency']")).all(by.tagName("option"));
        selectcurrency.get(1).click();
    }
    process(){
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
    }
    alertbox(){
        browser.switchTo().alert().accept();    
    }
    deleteaccount()
    {
        browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr[6]/td[5]/button")).click();
    }
}