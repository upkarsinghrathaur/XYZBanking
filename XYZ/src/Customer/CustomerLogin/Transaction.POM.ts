import { browser } from 'protractor';
import { by } from 'protractor';
import { element } from 'protractor';
export class CustomerLoginPage{

customername(){
    let custname= element(by.xpath(".//*[@id='userSelect']")).all(by.tagName("option"));
    custname.get(2).click();
}
login(){
    browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/form/button")).click();
}
depositeammount(){
    browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input")).sendKeys("2000");
}
deposite(){
    browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button")).click();
}
withdrowammount(){
    browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input")).sendKeys("400");
}
withdrow(){
    browser.findElement(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button")).click();
}
backtransactions(){
    browser.findElement(by.xpath("")).click();
}

}