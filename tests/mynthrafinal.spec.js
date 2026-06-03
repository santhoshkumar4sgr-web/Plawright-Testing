import { test } from '@playwright/test';
test('totalProductcminPrice', async ({ page }) => {
await page.goto('https://www.myntra.com/boy-tshirts');

//total product count:
const totalProductcount = await page.locator('//li[@class="product-base"]').count();
console.log("totalProductcount", totalProductcount);
const prices = page.locator(`//li[@class='product-base']//div[@class='product-price']//span[@class='product-discountedPrice'or (text() and not(@class))]`);
const count = await prices.count();
let minPrice = Infinity;
let minPriceproduct;
for(let i = 0; i < count; i++) {
const productPrice = prices.nth(i);
const priceText = await productPrice.textContent();
const price = Number(priceText.replace(/[^\d,]/g,'').replace(/,/g,''));
if(price < minPrice) {minPrice = price;minPriceproduct = productPrice;}
}
// Traverse to product name
const minPriceName = await minPriceproduct.locator("xpath=ancestor::li[@class='product-base']//h3").textContent();
console.log(`totalProductcminPrice is ${minPriceName} costing ₹${minPrice}`);
});





