const { Builder, By, until } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const chrome = require('selenium-webdriver/chrome'); // Import Chrome options
require('dotenv').config({ path: '.env' });
const { describe, it, before, after } = require('mocha');

describe("Optochka Test", function () {
    let driver;
    const timeout = 120000; // Timeout for waiting elements

    // Initialize the driver before any tests run
    before(async function () {
        // Add Chrome options to open DevTools
        let options = new chrome.Options();
        options.addArguments("--auto-open-devtools-for-tabs"); // Open DevTools

        // Build the driver with Chrome options
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    // Quit the driver after all tests are done
    after(async function () {
        await driver.quit();
    });

    it("Login to Apple", async function () {
        this.timeout(timeout);

        // Navigate to the application
        const url = process.env.PROD_URL;
        await driver.get(url);
        console.log('Current URL is:', url);

        // Click login button
        const firstLoginButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
            timeout
        );
        await firstLoginButton.click();

        // Send brand phone number for login
        const phoneNumberInput = await driver.wait(
            until.elementLocated(By.name('phoneNumber')),
            timeout
        );
        await phoneNumberInput.sendKeys(process.env.APPLE_LOGIN);

        // Send brand password
        const passwordInput = await driver.wait(
            until.elementLocated(By.name('password')),
            timeout
        );
        await passwordInput.sendKeys(process.env.APPLE_PASS);

        // Wait for and click the login button
        const loginButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
            timeout
        );
        await loginButton.click();

        const clickOrdersPage = await driver.wait(
            until.elementLocated(By.id('orders')),
            timeout
        );
        await clickOrdersPage.click();

        await driver.sleep(1500);
    });

    it("Create delivery order", async function () {
        try {
            driver.manage().setTimeouts({ implicit: 15000, pageLoad: 15000, script: 10000 });
            
            const clickCreateOrder = await driver.wait(
                until.elementLocated(By.className("MuiStack-root css-up0epx")),
                timeout);
            await driver.wait(until.elementIsVisible(clickCreateOrder), timeout); 
            await clickCreateOrder.click();
    
            let currentUrl = await driver.getCurrentUrl();
            console.log('Current URL is', currentUrl);
    
            const clientNumber = await driver.wait(
                until.elementLocated(By.name("phone")),
                timeout
            );
            await clientNumber.sendKeys("937505502");
    
            const orderType = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="root"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[2]/div[1]/button[1]/p')),
                timeout
            );
            await orderType.click();
    
            const clickSelectLocation = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="root"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/span')),
                timeout
            );
            await clickSelectLocation.click();
    
            const selectLocation = await driver.wait(
                until.elementLocated(By.xpath('//ul/li[2]')),
                timeout
            );
            await selectLocation.click();
    
            const clickMoyKuryer = await driver.wait(
                until.elementLocated(By.css('.MuiStack-root.css-1a7iqnr')),
                timeout
            );
            await clickMoyKuryer.click();
            
            // Correct CSS selector
            const addProduct = await driver.wait(
                until.elementLocated(By.css('.MuiTypography-root.MuiTypography-body1.css-1lstpxn')),
                timeout
            );
            await driver.wait(until.elementIsVisible(addProduct), timeout);
            await addProduct.click();

            const clickCategory = await driver.wait(
                until.elementLocated(By.xpath("//div[2]/div/div/div[1]/div/div/div[1]/li")),
                timeout);
            await driver.wait(until.elementIsVisible(clickCategory), timeout); 
            await clickCategory.click();

            const clickProduct = await driver.wait(
                until.elementLocated(By.xpath("//div[2]/div/div/div[1]/div/div/div[1]/li")),
                timeout
            );
            await driver.actions().doubleClick(clickProduct).perform();

        } catch (error) {
            console.error('Error occurred:', error);
        }
    });
});
