import {test, expect} from '@playwright/test'

test("Handle  alert", async ({page}) =>{
    await page.goto("https://demoqa.com/alerts");
     
     page.on('dialog', async dialog =>{
        console.log(await dialog.message())
        await dialog.accept();
     })
    await page.locator("#alertButton").click();
})

test("confimation alert", async ({page}) =>{
    await page.goto("https://demoqa.com/alerts");

     page.once('dialog', async dialog =>{
        console.log(await dialog.message())
        await dialog.dismiss();
     })
    await page.locator("#confirmButton").click();
})


test("Prompt alert", async ({page}) =>{
    await page.goto("https://demoqa.com/alerts");

     page.once('dialog', async dialog =>{
        console.log(await dialog.message())
        await dialog.accept("Javascript");
     })
    await page.locator("#promtButton").click();

    await page.waitForTimeout(3000)
})


test("Verify the request", async ({page})=>{
            await page.goto("https://demo.playwright.dev/api-mocking/")

    await page.route('**/api/v1/routes', async (route) => {
         await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(
                {
                    message : "Response mocking"
                })
        });

    })


        await page.goto("https://demo.playwright.dev/api-mocking/")

        await expect(page.getByText("wueywueywuyeu")).toBeVisible()

        await page.waitForTimeout(2000000)

    })

test("Verify the response", async ({page})=>{
    await page
})