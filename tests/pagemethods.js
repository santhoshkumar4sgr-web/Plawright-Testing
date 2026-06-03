import {test} from "@playwright/test";
test("page methods", async({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(4000);
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.screenshot ({path: "screenshot.png"});
})
test("amazon page", async({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(4000);
    console.log(await page.title());
    console.log(await page.url());

})
