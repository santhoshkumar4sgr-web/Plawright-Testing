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
        //li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()='${minPrice}']//ancestor::div[@class="product-productMetaInfo"]//descendant::h4[@class="product-price]`)

    console.log("Product Name(s) with Minimum Price:", productNames[0]);

//     //1. Count

//     //1. Total Count
//     const productPrice = await page.locator('//li[@class="product-base"]//ancestor::div[@class="product-price"]').allTextContents();
//     await page.waitForTimeout(3000);
//     console.log("Total Products:", productPrice.length); 

// //  Total count product prices
   
//     const productPrice = Math.min(...pricesText.map(price => Number(price.replace(/[^0-9]/g, ''))));

//     console.log("productPrice:", productPrice);


});







