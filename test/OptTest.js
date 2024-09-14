const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    const options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu'); // Sometimes needed for headless mode

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://apple.com');
        // Add your test code here
    } finally {
        await driver.quit();
    }
})();
