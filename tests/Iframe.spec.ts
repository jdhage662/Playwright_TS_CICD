import {test} from '@playwright/test'

test("Verify the frame", async({page})=>{

    await page.goto("https://demoqa.com/frames");
    const frame1 = await page.frameLocator("#frame1");

    let data = await frame1.locator("#sampleHeading").first().textContent();
    console.log(data)

    const frame2 = await page.frameLocator("#frame2");

    let data1 = await frame2.locator("#sampleHeading").first().textContent();
    console.log(data)
})