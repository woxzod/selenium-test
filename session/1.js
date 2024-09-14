const { Builder, By, until } = require('selenium-webdriver');

(async function runTest() {
    var driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://mobile.optochka.com');

        // Wait for the first button and click it
        const firstButton = await driver.wait(
            until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeStandart MuiButton-containedSizeStandart MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeStandart MuiButton-containedSizeStandart MuiButton-disableElevation css-2b0to7')),
            10000
        );
        await firstButton.click();

        // Wait for the phone number input field and enter the phone number
        const phoneNumberInput = await driver.wait(
            until.elementLocated(By.name('phoneNumber')),
            10000
        );
        await phoneNumberInput.sendKeys('937505502');

        // Wait for the password input field and enter the password
        const passwordInput = await driver.wait(
            until.elementLocated(By.name('password')),
            10000
        );
        await passwordInput.sendKeys('1234567890');

        // Wait for the second button and click it
        const loginButton = await driver.wait(
            until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeStandart MuiButton-containedSizeStandart MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeStandart MuiButton-containedSizeStandart MuiButton-disableElevation css-2b0to7')),
            10000
        );
        await loginButton.click();

        // Continue with the remaining actions
        const nextButton = await driver.wait(
            until.elementLocated(By.className('css-1xw0e9i')),
            10000
        );
        await nextButton.click();

        const anotherButton = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-xya9bl')),
            10000
        );
        await anotherButton.click();

        const phoneInput = await driver.wait(
            until.elementLocated(By.name('phone')),
            10000
        );
        await phoneInput.sendKeys('937505502');

        const anotherActionButton = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-h35onj')),
            10000
        );
        await anotherActionButton.click();

        const mapPane = await driver.wait(
            until.elementLocated(By.className('ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none')),
            10000
        );
        await mapPane.click();

        const finalButton = await driver.wait(
            until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-18grk9m')),
            10000
        );
        await finalButton.click();

        const finalText = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-1lstpxn')),
            10000
        );
        await finalText.click();

        const finalHeader = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-h4 css-13l303w')),
            10000
        );
        await finalHeader.click();

        const finalBodyText = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-t11is1')),
            10000
        );
        await finalBodyText.click();
        await finalBodyText.click();
        await finalBodyText.click();

        const finalStack = await driver.wait(
            until.elementLocated(By.className('MuiStack-root css-1azyqxb')),
            10000
        );
        await finalStack.click();

        const lastAction = await driver.wait(
            until.elementLocated(By.className('MuiTypography-root MuiTypography-body1 css-1t5hf7t')),
            10000
        );
        await lastAction.click();

        const lastButton = await driver.wait(
            until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-1c0p5wt')),
            10000
        );
        await lastButton.click();

    } finally {
        await driver.quit();
    }
})();
