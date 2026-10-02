import { test , expect} from '@playwright/test'

test("Verify the request", async ({page})=>{
    await page.route('**/api/v1/fruits', async route => {
       const request = route.request();

        console.log("URL"+ request.url);
                await route.continue();

                await route.abort();

        // await route.fulfill({
        //     status: 500,
        //     contentType: 'application/json',
        //     body: JSON.stringify([
        //         {
        //             id: 1,
        //             name: 'Apple'
        //         },
        //         {
        //             id: 2,
        //             name: 'Orange'
        //         },
        //         {
        //             id : 3,
        //             name: 'Banana'
        //         },
        //         {
        //             id: 4,
        //             name: 'Javascript'
        //         }
        //     ])
        // })

        })

        await page.goto("https://demo.playwright.dev/api-mocking/")

        await page.waitForTimeout(300000)

        await page.waitForTimeout(300000)
        await page.waitForTimeout(300000)
        await page.waitForTimeout(300000)

    
})


test("Fetch the request", async ({page})=>{

        await page.route('**/api/v1/fruits', async route => {

            const response = await route.fetch();

            const json = await response.json();
             json.name = "Playwright TEsting"

             await route.fulfill({
                response, json
             })
        })
        await page.goto("https://demo.playwright.dev/api-mocking/")

        await page.waitForTimeout(300000)

})