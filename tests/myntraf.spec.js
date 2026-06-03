import { test, expect } from '@playwright/test';
test('myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/tshirt?rawQuery=tshirt');
    await page.waitForTimeout(3000);
    // Total products
    const productCount = await page.locator('.product-base').count();
    console.log("Total Products:", productCount);

    // Get all product names
    const productname = await page.locator('//h4[@class="product-product"]').allTextContents();

    // Get all product prices
    const productprice = await page.locator('//span[@class="product-discountedPrice"]').allTextContents();

    // Convert first product price as minimum
    let minPrice = Number(productprice[0].replace(/[^0-9]/g, ''));
    let minIndex = 0;
    // Find minimum price
    for (let i = 0; i < productprice.length; i++) {
        let currentPrice = Number(productprice[i].replace(/[^0-9]/g, ''));
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
            minIndex = i;
        }
    }
    console.log("------------");
    console.log("Minimum Product Price:" );
    console.log(productname[minIndex] + " --> Rs. " + minPrice);
    });


    