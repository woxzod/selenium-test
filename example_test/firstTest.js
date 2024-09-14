require('dotenv').config();
const { Builder, Key, By, } = require("selenium-webdriver");
const assert = require ("assert");
// var should = require("chai").should();
// (async () => {
//    const chai = await import("chai");
//    const should = chai.default.should();


//    todoText.should.equal("Learn Selenium");

   
//    // Your test code here
//  })();




// describe block 

describe("add todo tests ", function () {

   // it block 

   it("succsess adds a todo application", async function () {

      // launch the browser 

      let driver = await new Builder().forBrowser("chrome").build()
         // Additional test steps
     

      // navigate our application 

      await driver.get("https://lambdatest.github.io/sample-todo-app/")


      // add a to do 

      await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);


      let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {

         return value

      });


      //node assertion 

      assert.strictEqual(todoText, "Learn Selenium"); 


      //Chai should assertion 




      // close the browser 

      await driver.quit();


   });



   it("succsess adds a todo application", async function () {

      // launch the browser 

      let driver = await new Builder().forBrowser("chrome").build()
         // Additional test steps
     

      // navigate our application 

      await driver.get("https://lambdatest.github.io/sample-todo-app/")


      // add a to do 

      await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);


      let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {

         return value

      });


      //node assertion 

      assert.strictEqual(todoText, "Learn JavaScript"); 


      //Chai should assertion 




      // close the browser 

      await driver.quit();


   });




});




















