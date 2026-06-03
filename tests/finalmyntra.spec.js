import { test } from '@playwright/test';
test('Find Cheapest Product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    //total product count:

    const totalProductcount = await page.locator('//li[@class="product-base"]').count();

console.log("totalProductcount", totalProductcount);


       // Minimum Price Product
    const allproducts = page.locator('.product-base');

    const count = await allproducts.count();

    // first minimum price
    let minpricename = '';
    let minprice = Infinity;

    for(let i = 0; i < count; i++) {

        const allproduct = allproducts.nth(i);

        // Product name

        const name = await allproduct.locator('.product-brand').textContent();

        // Product price
        const priceText = await allproduct.locator('.product-price').textContent();

        // Extract first price only
        const price = Number(priceText.match(/[\d,]+/)[0].replace(/,/g, '')
        );

        // Compare with current minprice
        if(price < minprice) {
            minprice = price;
            minpricename = name;
        }
    }
    console.log(
        `minprice product is ${minpricename} costing ₹${minprice}`
    );

});
