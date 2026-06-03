import {tesatt,expect} from '@playwright/test';
test('has title',async({page})=>{
await page.goto('https://demoqa.com/webtables');
const rows = await page.locator('table>tbody>tr').all();
const tableData = [];

for (const row of rows) 
{
    const rowData = await row.locator('td').allTextContents();
    tableData.push(rowData);
}
console.log(tableData);
});

