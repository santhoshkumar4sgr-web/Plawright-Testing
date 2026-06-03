import { test, expect } from '@playwright/test';
test('Myntra Product Search', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    await page.waitForTimeout(2000);

    //1. Total products with discount count
    const productCountWithDiscount = await page.locator('//li[@class="product-base"][.//span[contains(@class,"product-discountedPrice")]]').count();
    console.log("Total Products with discount:", productCountWithDiscount);

    //1. Discount min price:
    const productPricesWithDiscount = await page.locator('//li[@class="product-base"][.//span[contains(@class,"product-discountedPrice")]]').allTextContents();
    const minPriceWithDiscount = Math.min(...productPricesWithDiscount.map(price =>Number(price.replace(/[^0-9]/g, '')) )   );
    console.log("productPricesWithDiscount:", productPricesWithDiscount);






    //2. Total products without discount count
    const productCountWithoutDiscount = await page.locator('//li[@class="product-base"][not(.//span[contains(@class,"product-discountedPrice")])]').count();
    console.log("Total Products without discount:", productCountWithoutDiscount);

// 3. Total products count
    const totalProducts = productCountWithDiscount + productCountWithoutDiscount;

    console.log("Total Products:", totalProducts);

// // 4.  Minimum price of total products
    
//     const productpriceWithDiscount = await page.locator('//li[@class="product-base"][.//span[contains(@class,"product-discountedPrice")]]').allTextContents();
//     const productpriceWithDiscount = Math.min(...productCountWithDiscount.map(price => Number(price.replace(/[^0-9]/g, ''))));
//     console.log(" Products minPrice:", productpriceWithDiscount.length);


    // const productPricesWithDiscount = await page.locator('//span[@class="product-discountedPrice"]').allTextContents();
    // const minPriceWithDiscount = Math.min(...productPricesWithDiscount.map(price =>Number(price.replace(/[^0-9]/g, ''))    )









    // //2. Total Discounted Price
    // const pricesText = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'.allTextContents();
    // await page.waitForTimeout(3000);
    // console.log("Total Products:", pricesText.length); 



});
