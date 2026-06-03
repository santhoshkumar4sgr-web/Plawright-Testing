import { test } from '@playwright/test';

test('Minimum Price Product', async ({ page }) => {

    await page.goto('https://www.myntra.com/tshirt?rawQuery=tshirt');

    const name = await page.locator('.product-base').allTextContents();

    const price = await page.locator('.product-discountedPrice').allTextContents();

    let min = Number(price[0].replace(/[^0-9]/g, ''));
    let product = name[0];
    for (let i = 0; i < price.length; i++) {

        let current = Number(price[i].replace(/[^0-9]/g, ''));

        if (current < min) {

            min = current;
            product = name[i];
        }
    }

    console.log(product + " --> Rs. " + min);

});
