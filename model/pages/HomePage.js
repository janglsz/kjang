const {Builder, By, Key} = require ("selenium-webdriver")
let BasePage = require("./BasePage");


class HomePage extends BasePage {

    async performSearch() {
        await driver.findElement(By.id("gh-ac")).sendKeys("iPhone");
        await driver.findElement(By.id("gh-ac")).sendKeys(Key.RETURN);
    }

}

module.exports = new HomePage();