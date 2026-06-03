import { test } from '@playwright/test';
test('Find Cheapest Product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    // Screenshot for comparison
    await page.screenshot({path: 'myntra-products.png',fullPage: true});

    // All product cards
    const cards = page.locator('.product-base');

    const count = await cards.count();

    // Assume first product is cheapest
    let cheapestName = '';
    let cheapestPrice = Infinity;

    for(let i = 0; i < count; i++) {

        const card = cards.nth(i);

        // Product name
        const name = await card.locator('.product-brand').textContent();

        // Product price
        const priceText = await card.locator('.product-price').textContent();

        // Extract first price only
        const price = Number(priceText.match(/[\d,]+/)[0].replace(/,/g, '')
        );

        // Compare with current cheapest
        if(price < cheapestPrice) {
            cheapestPrice = price;
            cheapestName = name;
        }
    }
    console.log(
        `Cheapest product is ${cheapestName} costing ₹${cheapestPrice}`
    );

});
