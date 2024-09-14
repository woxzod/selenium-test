const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'))
        .build();

    try {
        // Navigate to the target URL
        await driver.get('https://mobile.optochka.com');

        // Debug: Print the current URL
        let currentUrl = await driver.getCurrentUrl();
        console.log('Current URL:', currentUrl);

        // Debug: Print the page source to verify the content
        let pageSource = await driver.getPageSource();
        console.log(pageSource);

        // Increase the timeout to 50 seconds
        const timeout = 50000;

        // Wait for and click the first button
        const firstLogin = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
            timeout
        );
        await firstButton.click();

        // Wait for the phone number input field and enter the phone number
        const phoneNumberInput = await driver.wait(
            until.elementLocated(By.name('phoneNumber')),
            timeout
        );
        await phoneNumberInput.sendKeys('937505502');

        // Wait for the password input field and enter the password
        const passwordInput = await driver.wait(
            until.elementLocated(By.name('password')),
            timeout
        );
        await passwordInput.sendKeys('1234567890');

        // Wait for and click the login button
        const loginButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
            timeout
        );
        await loginButton.click();

        // Additional steps with explicit waits
        const nextButton = await driver.wait(
            until.elementLocated(By.className('css-1xw0e9i')),
            timeout
        );
        await nextButton.click();

        const anotherButton = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-xya9bl')),
            timeout
        );
        await anotherButton.click();

        const phoneInput = await driver.wait(
            until.elementLocated(By.name('phone')),
            timeout
        );
        await phoneInput.sendKeys('937505502');

        const anotherActionButton = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-h35onj')),
            timeout
        );
        await anotherActionButton.click();

        const mapPane = await driver.wait(
            until.elementLocated(By.className('ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none')),
            timeout
        );
        await mapPane.click();

        const finalButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth')),
            timeout
        );
        await finalButton.click();

        const finalText = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-1lstpxn')),
            timeout
        );
        await finalText.click();

        const finalHeader = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-h4 css-13l303w')),
            timeout
        );
        await finalHeader.click();

        const finalBodyText = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-t11is1')),
            timeout
        );
        await finalBodyText.click();
        await finalBodyText.click();
        await finalBodyText.click();

        const finalStack = await driver.wait(
            until.elementLocated(By.className('MuiStack-root css-1azyqxb')),
            timeout
        );
        await finalStack.click();

        const lastAction = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-1t5hf7t')),
            timeout
        );
        await lastAction.click();

        const lastButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.css-1c0p5wt')),
            timeout
        );
        await lastButton.click();

    } catch (error) {
        console.log(`Error encountered: ${error.message}`);
        let pageSource = await driver.getPageSource();
        console.log(pageSource);
    } finally {
        await driver.quit();
    }
})();
