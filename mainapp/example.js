import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { config } from "dotenv";
import { describe, it, before, after } from "mocha";
import fs from "fs";

config({ path: ".env" }); // Load environment variables

describe("Optochka Test", function () {
    let driver;
    const timeout = 60000; // Timeout for waiting elements

    // Initialize the driver before any tests run
    before(async function () {
        const options = new chrome.Options();
        options.addArguments("--auto-open-devtools-for-tabs");
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    // Quit the driver after all tests are done
    after(async function () {
        await driver.quit();
    });

    it("Login to Apple", async function () {
        this.timeout(timeout);
        driver.manage().setTimeouts({ implicit: 15000, pageLoad: 15000, script: 10000 });

        // Navigate to the application
        const url = process.env.PROD_URL;
        await driver.get(url);
        console.log("Current URL is:", url);

        // Click login button
        const firstLoginButton = await driver.wait(
            until.elementLocated(By.css(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary")),
            timeout
        );
        await firstLoginButton.click();

        // Send brand phone number for login
        const phoneNumberInput = await driver.wait(
            until.elementLocated(By.name("phoneNumber")),
            timeout
        );
        await phoneNumberInput.sendKeys(process.env.APPLE_LOGIN);

        // Send brand password
        const passwordInput = await driver.wait(
            until.elementLocated(By.name("password")),
            timeout
        );
        await passwordInput.sendKeys(process.env.APPLE_PASS);

        // Wait for and click the login button
        const loginButton = await driver.wait(
            until.elementLocated(By.css(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary")),
            timeout
        );
        await loginButton.click();

        const clickOrdersPage = await driver.wait(
            until.elementLocated(By.id("orders")),
            timeout
        );

        // Retry clicking the orders page button
        const retryClick = async (element, retries = 3) => {
            for (let i = 0; i < retries; i++) {
                try {
                    await element.click();
                    return; // Success
                } catch (error) {
                    if (i === retries - 1) throw error; // Rethrow if final attempt fails
                    await driver.sleep(500); // Wait before retrying
                }
            }
        };

        await retryClick(clickOrdersPage);

        await driver.sleep(1500);
    });

    it("Create delivery order", async function () {
        this.timeout(timeout);
        try {
            driver.manage().setTimeouts({ implicit: 15000, pageLoad: 15000, script: 10000 });

            const clickCreateOrder = await driver.wait(
                until.elementLocated(By.className("MuiTypography-root MuiTypography-body1 css-xya9bl")),
                timeout
            );
            await driver.sleep(1500);
            await clickCreateOrder.click();

            let currentUrl = await driver.getCurrentUrl();
            console.log("Current URL is", currentUrl);

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
                until.elementLocated(By.xpath("//ul/li[2]")),
                timeout
            );
            await selectLocation.click();

            const clickMoyKuryer = await driver.wait(
                until.elementLocated(By.css(".MuiStack-root.css-1a7iqnr")),
                timeout
            );
            await clickMoyKuryer.click();

            const addProduct = await driver.wait(
                until.elementLocated(By.css(".MuiTypography-root.MuiTypography-body1.css-1lstpxn")),
                timeout
            );
            await addProduct.click();

            const clickCategory = await driver.wait(
                until.elementLocated(By.xpath("//div[2]/div/div/div[1]/div/div/div[1]/li")),
                timeout
            );
            await clickCategory.click();

            const clickProduct = await driver.wait(
                until.elementLocated(By.xpath("/html/body/reach-portal/div/div[2]/div[2]/div/div/div[1]/div/div/div[2]/li/img")),
                timeout
            );
            await driver.actions().doubleClick(clickProduct).perform();

            const clickAdd = await driver.wait(
                until.elementLocated(By.className("MuiStack-root css-1azyqxb")),
                timeout
            );
            await clickAdd.click();

            const clickCreate = await driver.wait(
                until.elementLocated(By.className("MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-1c0p5wt")),
                timeout
            );
            await clickCreate.click();

            await driver.sleep(15000);
        } catch (error) {
            console.error("Error occurred:", error);

            // Capture a screenshot on error
            await driver.takeScreenshot().then((image) => {
                fs.writeFileSync("error-screenshot.png", image, "base64");
            });
        }
    });
});
