const {Builder, By, Key} = require ("selenium-webdriver")
const homePage = require("../model/pages/HomePage");
const allCategoriesPage = require("../model/pages/AllCategoriesPage");
var should = require("chai").should();

describe("UBank Technical Assessment - Test 2", () => {

    beforeEach(async () => {

    });

    afterEach(async () => {
        await driver.close();
    });

    it("Ebay Website Automation - Test 2", async () => {

        let baseUrl = "https://www.ebay.com.au";
        await homePage.openUrl(baseUrl);

        // Navigate to the All Categories page
        await homePage.clickShopByCategoryDropDown();
        await homePage.clickAllCategoriesLink()

        // Verify link text
        let actualText = await allCategoriesPage.getComputersTabletsAndNetworkHardwareLinkText();
        actualText.should.equal("Computers, Tablets & Network Hardware");

        actualText = await allCategoriesPage.getPhonesSmartWatchesAndAccessoriesText();
        actualText.should.equal("Phones, Smart Watches & Accessories");

        // Navigate to the "Computers, Tablets & Network Hardware" page
        await allCategoriesPage.clickComputersTabletsAndNetworkHardwareLink();

        // Perform Search
        await allCategoriesPage.performSearch();

    }); 
     
});

