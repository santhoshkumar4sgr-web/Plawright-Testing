import { test, expect } from '@playwright/test';

test('myntra', async ({ page }) => {

    await page.goto('https://www.myntra.com/tshirt?rawQuery=tshirt');
    await page.waitForTimeout(3000);

    // Total products
    const productCount = await page.locator('.product-base').count();

    console.log("Total Products:", productCount);

    // Get all product names
    const productname = await page
        .locator('//h4[@class="product-product"]').allTextContents();

    // Get all product prices
    const productprice = await page
        .locator('//span[@class="product-discountedPrice"]').allTextContents();
    let number = 99999;
    let minProduct = "";
    for (let i = 0; i < productprice.length; i++) {
        const x = Number(
            productprice[i].replace(/[^0-9]/g, '')
        );

        if (x < number) {

            number = x;

            minProduct = productname[i];
        }
    }
    console.log("Minimum productPrice:", number);
    console.log(minProduct + " --> Rs. " + number);
});
