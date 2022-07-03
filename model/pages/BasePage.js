let {By, Key} = require ("selenium-webdriver")
let webdriver = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({implicit: (50000)});


class BasePage {

    constructor() {
        global.driver = driver;
    }

    async openUrl(url) {
        await driver.manage().window().maximize();
        await driver.get(url);
    }

    async clickShopByCategoryDropDown() {
        await driver.findElement(By.id("gh-shop-a")).click();
    }

    async clickAllCategoriesLink() {
        await driver.findElement(By.id("gh-shop-see-all-center")).click();
    }

    async performSearch() {
        await driver.findElement(By.id("gh-ac")).sendKeys("iPhone");
        await driver.findElement(By.id("gh-ac")).sendKeys(Key.RETURN);
    }

    async closeDriver() {
        await driver.close();
    }

}

module.exports = BasePage;