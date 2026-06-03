import { test, expect } from '@playwright/test';
test('Myntra Product Search', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    await page.waitForTimeout(5000);

    //1. Count
    const pricesText = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();
    await page.waitForTimeout(3000);
    console.log("Total Products:", pricesText.length); 

    //2. Minimum Price
       const minPrice = Math.min(...pricesText.map(price => Number(price.replace(/[^0-9]/g, ''))));
        console.log("Minimum Price:", minPrice);

    //3. Product Name of minimum price

    const productNames = await page.locator(`
        //li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()='${minPrice}']//ancestor::div[@class="product-productMetaInfo"]//h3`).allTextContents();
    console.log("Product Name(s) with Minimum Price:", productNames[0]);
   
});







