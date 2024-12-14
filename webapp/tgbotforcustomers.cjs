const { Builder, By, until, Actions } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const chrome = require('selenium-webdriver/chrome'); // Import Chrome options
require('dotenv').config({ path: '.env' });
const { describe, it, before, after } = require('mocha');

describe("Optochka Test", function () {
    let driver;
    const timeout = 60000; // Timeout for waiting elements

    // Initialize the driver before any tests run
    before(async function () {
        let options = new chrome.Options();
        options.addArguments("--auto-open-devtools-for-tabs");
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    // Quit the driver after all tests are done
    after(async function () {
        await driver.quit();
    });

    it("Open WebApp", async function () {
        this.timeout(timeout);
        driver.manage().setTimeouts({ implicit: 15000, pageLoad: 15000, script: 10000 });

        // Navigate to the application
        const url = process.env.WEBAPP_URL;
        await driver.get(url);
        console.log(' WebApp is opened succesfully ');

       

        await driver.sleep(1500);
    });













    it("Create delivery and takeaway order", async function () {
        this.timeout(60000); // Increased timeout for this test
    
        try {
            driver.manage().setTimeouts({ implicit: 15000, pageLoad: 15000, script: 10000 });
    
            // First action: Click the simple product add button
            const clickSimpleProductAdd = await driver.wait(
                until.elementLocated(By.className(' text-center border w-full py-2 text-12px font-[500] rounded-[7.82px]')),
                timeout
            );
            await clickSimpleProductAdd.click();
            console.log("Simple product add button clicked.");
    
            // Check for the presence and visibility of productWithOption
            let productWithOptionExists = false;
    
            try {
                const productWithOption = await driver.wait(
                    until.elementLocated(By.className('MuiStack-root flex  gap-1   flex-col pb-[150px]  py-4 px-4  css-961dvd')),
                    5000 // Shorter timeout to check if the element exists
                );
                await driver.wait(until.elementIsVisible(productWithOption), 2000); // Ensure it's visible
                productWithOptionExists = true;
                console.log("Product with options found.");
            } catch (error) {
                console.log("Product with options not found or not visible.");
            }
    
            if (productWithOptionExists) {
                // Handle product with options
                const clickOption = await driver.wait(
                    until.elementLocated(By.className('MuiStack-root css-ehoejh')),
                    timeout
                );
                await clickOption.click();
                console.log("Option selected for product with options.");
                await driver.sleep(10000);

    
                const clickAddProductWithOption = await driver.wait(
                    until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall flex-1 relative overflow-hidden active:scale-90 duration-100 bg-[#ffffffff] css-h3h6kv')),
                    timeout
                );
                await clickAddProductWithOption.click();
                console.log("Added product with options.");
                await driver.sleep(10000);
            } else {
                // Re-locate the simple product add button
                const clickSimpleProductAddAgain = await driver.wait(
                    until.elementLocated(By.className(' text-center border w-full py-2 text-12px font-[500] rounded-[7.82px]')),
                    timeout
                );
                await clickSimpleProductAddAgain.click();
                console.log("Simple product add button clicked again.");
                await driver.sleep(10000);
            }
        } catch (error) {
            console.error("Error occurred during test execution:", error);
            throw error; // Rethrow error to indicate test failure
        }
    });
    
    

    





    
});