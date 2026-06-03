import { test, expect } from '@playwright/test';
test('Flipkart Menu', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(3000);

    // product list

    const productList = await page.locator('//div[@id="container"]//descendant::div[@dir="auto"]').allTextContents();

    console.log("product list: ", productList);


});








