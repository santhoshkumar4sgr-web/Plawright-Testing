import { test, expect } from '@playwright/test';
test('Myntra Product Search', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
   // await page.waitForTimeout(3000);

    const totalProducts = await page.locator('//li[@class="product-base"]//descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]').allTextContents();
    console.log("Total Products:", totalProducts.length);


      const totalPrice = await page.locator('//li[@class="product-base"]//descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and (@class))]').allTextContents();
        const minPrice = Math.min(...totalPrice.map(price => Number(price.replace(/[^0-9]/g, ''))));

        console.log("Minimum Price:", minPrice);


    //1. Count of Total Products:

    // const productPriced = await page.locator('//li[@class="product-base"]//descendant::div[@class="product-price"]').allTextContents();
    // await page.waitForTimeout(3000);
    // console.log("Total Products:", productPriced.length); 
    
    // const pricesText = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();
    // await page.waitForTimeout(3000);
    // console.log("Total Products:", pricesText.length); 

    // const productPrice = await page.locator('//li[@class="product-base"]//descendant::div[@class="product-price"]|//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();
    //  console.log("Total all Products:", productPrice.length); 


    // const productPrices = await page.locator('//li[@class="product-base"][not(.//span[contains(@class,"product-discountedPrice")]|//li[@class="product-base"]//descendant::div[@class="product-price"])]').allTextContents();
    // await page.waitForTimeout(3000);  

    // console.log("Total no discountProducts:", productPrices.length); 


//     //2. Minimum Price of Total 50 Products:
//        const minPrice = Math.min(...pricesText.map(price => Number(price.replace(/[^0-9]/g, ''))));
//         console.log("Minimum Price:", minPrice);

//     //3. Product Name of minimum price

//     const productNames = await page.locator(`
//         //li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()='${minPrice}']//ancestor::div[@class="product-productMetaInfo"]//h3`).allTextContents();
//     console.log("Product Name(s) with Minimum Price:", productNames[0]);
   
});
