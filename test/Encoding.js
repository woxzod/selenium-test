const { Builder, By, until } = require("selenium-webdriver");
require('dotenv').config({ path: '.env' });
const { describe, it, before, after } = require('mocha');
const { elementLocated } = require("selenium-webdriver/lib/until");

describe("Optochka Test", function () {
    let driver;
    const timeout = 120000; // Timeout for waiting elements

    // Initialize the driver before any tests run
    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    // Quit the driver after all tests are done
    after(async function () {
        await driver.quit();
    });






    it("Login to Apple", async function () {
        this.timeout(120000);



        // Navigate to the application
        const url = (process.env.PROD_URL);
        await driver.get(url)
        console.log('Current URL is:',url)








        // Click login button
        const firstLoginButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
            timeout );
        await firstLoginButton.click();



        // Send brand phone number for login
        const phoneNumberInput = await driver.wait(
            until.elementLocated(By.name('phoneNumber')),
            timeout );
        await phoneNumberInput.sendKeys(process.env.APPLE_LOGIN);



        // Send brand password
        const passwordInput = await driver.wait(
            until.elementLocated(By.name('password')),
            timeout );
        await passwordInput.sendKeys(process.env.APPLE_PASS);



        // Wait for and click the login button
        const loginButton = await driver.wait(
            until.elementLocated(By.css('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')),
        );
        await loginButton.click();


        const clickOrdersPage = await driver.wait(
            until.elementLocated(By.id('orders')),
             );
        await clickOrdersPage.click();

        await driver.sleep(1500); 

    });


     

    it("Create delivery order", async function () {
        try {
            driver.manage().setTimeouts({ implicit: 10000, pageLoad: 10000, script: 5000 });
            
            const clickCreateOrder = await driver.wait(
                until.elementLocated(By.className("MuiStack-root css-up0epx")),
                timeout
            );
            await clickCreateOrder.click();
    
            let currentUrl = await driver.getCurrentUrl();
            console.log('Current URL is', currentUrl);
    
            const clientNumber = await driver.wait(
                until.elementLocated(By.name("phone")),
                timeout
            );
            await clientNumber.sendKeys("937505502");
    
            const orderType = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="root"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[2]/div[1]/button[1]/p')),                   timeout            );
            await orderType.click();
    


            const clickSelectLocation = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="root"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/span')),                timeout);
            await clickSelectLocation.click();
    


            const selectLocation = await driver.wait(
                until.elementLocated(By.xpath('//ul/li[2]')),                timeout );
            await selectLocation.click();
    


            const clickMoyKuryer = await driver.wait(
                until.elementLocated(By.css('.MuiStack-root.css-1a7iqnr'))   );
            await clickMoyKuryer.click();



            // const addProduct = await driver.wait(
            //     until.elementLocated(By.css('.MuiTypography-root MuiTypography-body1 css-1lstpxn')),   timeout   );
            // await addProduct.click();
            
            
            const timeout = 120000; // Adjust timeout if needed

    // Correct CSS selector
    const element = await driver.wait(
        until.elementLocated(By.css('.MuiTypography-root MuiTypography-body1 css-1lstpxn')), 
        timeout
    );
    await driver.wait(until.elementIsVisible(element), timeout);
    await element.click();


            

            


            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
        } catch (error) {
            console.error('Error occurred:', error);
        }
    });
    
});




















//    // Door Info
// // //    const doorInfo = await driver.wait(
// // //        until.elementIsEnabled(driver.findElement(By.css('.MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq'))),
// // //        timeout );
// //    await doorInfo.sendKeys('36');
       

// //    const doorInfo = await driver.findElement(By.css('.MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq'));
// //    const isEnabled = await doorInfo.isEnabled();
// //    if (isEnabled) {
// //        await doorInfo.click();
// //    } else {
// //        console.error('Element is disabled.');
// //    }

//     // Entrance Info
//    const entranceInfo = await driver.wait(
//    until.elementLocated(By.id(":r15:")), 
//    timeout );
//    await entranceInfo.sendKeys('2')
   
//     // Floor Info
//    const floorInfo = await driver.wait(
//        until.elementLocated(By.id(":rn:")),
//        timeout );
//    await floorInfo.sendKeys('4')













           
           //    await driver.sleep(1500); 
           //    const pageSource = await driver.getPageSource();
           //    console.log(pageSource);
   
           // const overlay = await driver.findElement(By.css('.css-17sc1ql'));
           // await driver.wait(until.elementIsNotVisible(overlay), timeout);
           
           // // Now click the desired element
           // const clickableElement = await driver.findElement(By.css('.MuiStack-root.css-up0epx'));
           // await clickableElement.click();
   
           // const iframe = await driver.findElement(By.css("iframe"))
           // await driver.actions()
           //   .scroll(1, 2, 2, 2, iframe)
           //   .perform()
               
           // const isVisible = await doorInfo.isDisplayed();
           // console.log('Element visibility:', isVisible);
           
           // const elementExists = await driver.executeScript('return document.querySelector(".MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq") !== null');
           // console.log('Element exists:', elementExists);
           
           // await driver.manage().setTimeouts({ implicit: 2000 });
           // await driver.sleep(1000); 
   
           // Door Info
           // const doorInfo = await driver.wait(
           //     until.elementIsVisible(driver.findElement(By.css('.MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq'))), timeout
           // );
           // await doorInfo.sendKeys('36');
               
           //  Entrance Info
           // const entranceInfo = await driver.wait(
           // until.elementLocated(By.id(":r15:")), 
           // timeout );
           // await entranceInfo.sendKeys('2')
           
           //  Floor Info
           // const floorInfo = await driver.wait(
           //     until.elementLocated(By.id(":rn:")),
           //     timeout );
           // await floorInfo.sendKeys('4')
           
           //           Click map 
           // const clickMap = await driver.wait(
           //     until.elementLocated(By.xpath('//*[@id="root"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/div/ymaps/ymaps/ymaps/ymaps[1]')),
           //     timeout ) ;
           //    await driver.manage().setTimeouts({ implicit: 2000 });
           //    await clickMap.click();
   
   
