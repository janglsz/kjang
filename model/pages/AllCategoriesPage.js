const {Builder, By, Key} = require ("selenium-webdriver");
let BasePage = require("./BasePage");


class AllCategoriesPage extends BasePage {

    async getComputersTabletsAndNetworkHardwareLinkText() {
        let actualText = await driver.findElement(By.linkText("Computers, Tablets & Network Hardware")).getText();
        return actualText;
    }

    async clickComputersTabletsAndNetworkHardwareLink() {
        await driver.findElement(By.linkText("Computers, Tablets & Network Hardware")).click();
    }

    async getPhonesSmartWatchesAndAccessoriesText() {
        let actualText = await driver.findElement(By.linkText("Phones, Smart Watches & Accessories")).getText();
        return actualText;
    }

    async clickPhonesSmartWatchesAndAccessoriesLink() {
        await driver.findElement(By.linkText("Phones, Smart Watches & Accessories")).click();
    }

}

module.exports = new AllCategoriesPage();