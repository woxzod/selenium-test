var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://google.com')
driver.findElement(webdriver.By.name('gLFyf'))
driver.findElement(webdriver.By.name('q'))
driver.findElement(webdriver.By.name('q')).sendKeys('Hello world')
driver.findElement(webdriver.By.className('sbico')).click();
driver.findElement(webdriver.By.className('gNO89b')).click();

driver.findElement(webdriver.By.name('q')).sendKeys('Hello world')
driver.findElement(webdriver.By.name('q')).sendKeys('Hello world')
driver.findElement(webdriver.By.className('gNO89b')).click();
driver.findElement(webdriver.By.name('q')).sendKeys('Hello world')
driver.findElement(webdriver.By.className('gNO89b')).click();
driver.findElement(webdriver.By.className('gNO89b')).click();
driver.findElement(webdriver.By.name('q')).sendKeys('Hello world')
driver.findElement(webdriver.By.className('gNO89b')).click();
driver.findElement({ name: 'q' }).sendKeys(webdriver.Key.ENTER);
driver.findElement({ xpath: '//*[@id="rso"]/div[1]/div/div/div/div[1]/div/div/span/a/h3'}).click();