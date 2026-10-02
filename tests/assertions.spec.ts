

import {test, expect} from '@playwright/test'

test("Verify the title of the page", async ({page}) =>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await expect(page).toHaveTitle("OrangeHRM all")
    console.log("After assertion statemnet")


})

test("soft assertion", async({page})=>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await expect(page).toHaveTitle("OrangeHRM all", {timeout: 4000})

    await expect.soft(page).toHaveTitle("Orange")
    console.log("After assertion")

        await expect.soft(page).toHaveTitle("HRM")
        console.log("After 2nd assertion")
})