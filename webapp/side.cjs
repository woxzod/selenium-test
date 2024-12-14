// Import required modules
const { Builder, By, Key, until } = require('selenium-webdriver');
require('dotenv').config({ path: '.env' });


(async function exampleTest() {
    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Command: Open URL
        const url = process.env.WEBAPP_URL;
        await driver.get(url);

        // Command: Set Window Size
        await driver.manage().window().setRect({ width: 1920, height: 1032 });

        // Example Commands (Click actions)
        await driver.findElement(By.css('#\\36 6542375de7eafe8bfcdb69b .MuiStack-root > div:nth-child(1) .text-center')).click();
        await driver.findElement(By.css('#\\36 6542375de7eafe8bfcdb69b div:nth-child(2) > .border-\\[1\\.3px\\] > .text-center')).click();
        await driver.findElement(By.css('#\\36 6542375de7eafe8bfcdb69b .text-center')).click();

        // Additional Commands
        await driver.findElement(By.css('#\\36 622129553e4584c368f5624 .MuiStack-root > div:nth-child(1) .text-center')).click();
        await driver.findElement(By.css('.css-ehoejh:nth-child(1) path')).click();
        await driver.findElement(By.css('.MuiButtonBase-root')).click();

        // Example Mouse Over and Mouse Out Commands
        let element = await driver.findElement(By.css('#\\36 622129553e4584c368f5624 .MuiStack-root > .font-\\[500\\]:nth-child(3)'));
        await driver.actions().move({ origin: element }).perform();
        await driver.actions().move({ origin: null }).perform();

        // Example Typing Commands
        await driver.findElement(By.id(':r3:')).sendKeys('Hello World');

        // Example Scrolling Command
        await driver.executeScript('window.scrollTo(0,0)');

        // Add more actions as necessary...

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
})();
