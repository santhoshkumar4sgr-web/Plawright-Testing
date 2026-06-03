import { test, expect } from '@playwright/test';

test('myntra', async ({ page }) => {

    await page.goto('https://www.myntra.com/tshirt?rawQuery=tshirt');
    
    await page.waitForTimeout(3000);
    
    //Total products
    const productCount = await page.locator('.product-base').count();
    console.log("Total Products:", productCount);

    //Get all product name
    const productname = await page.locator('//span[@class="product-discountedPrice"]//ancestor::li[@class="product-base"]').allTextContents();
      

    //Get all product price
    const productprice = await page.locator('//li[@class="product-base"]//descendant::span[@class="product-discountedPrice"]').allTextContents();

    // Assume first product price as minimum
let minPrice = Number(productprice[0].replace(/[^0-9]/g, ''));
let minProduct = productname[0];

// Compare all prices
for (let i = 0; i < productprice.length; i++) {

    let currentPrice = Number(productprice[i].replace(/[^0-9]/g, ''));

    if (currentPrice < minPrice) {

        minPrice = currentPrice;
        minProduct = productname[i];
    }
}

// Print minimum price product
console.log("--------------------------------");

console.log("Minimum Product Price:");

console.log(minProduct + " --> Rs. " + minPrice);
});
