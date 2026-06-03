import {test} from"@playwright/test";
test("url launch", async({page}) =>{
    await page.goto("https://www.amazon.in/");
    await page.fill("laptop")
    await page.waitForTimeout(4000);

})



//sauce-demo web


import {test} from "@playwright/test";
test("url launch", async({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/collections/all");
    await page.locator('//a[text()="Catalog"]').click();
    // await page.fill("laptop")
    await page.waitForTimeout(4000);

})
