import { test, expect } from '@playwright/test';

test('mobile prices', async ({ page }) => {

    await page.goto('https://www.amazon.com')
        await page.click()


    await page.pause();
    await page.locator()

    // Search mobiles
    await page.locator('(//span[@class="a-price-whole"])[1]').click();
    await page.pause();
    await page.waitForTimeout(4000);



});


