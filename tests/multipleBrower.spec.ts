import {test, expect} from '@playwright/test';

test("Verify multiple tabs", async ({page, context}) =>{

    await page.goto("https://demoqa.com/browser-windows");
    const pages = context.pages();
    console.log("Count before new tab: "+ pages.length);
        await page.locator("#tabButton").click();
       const pages2 = context.pages();
     console.log("count after opening new tab: "+pages2.length)

     const tab1 = pages2[0];
     const tab2 = pages2[1];
      await tab2.locator("#sampleHeading").textContent();
     //tab1 and tab2
     console.log(await tab2.locator("#sampleHeading").textContent())
    await tab1.locator("#tabButton").click();


})

test("different window", async({page, context})=>{

    await page.goto("https://demoqa.com/browser-windows")

    const newPage =  context.waitForEvent('page')
        await page.locator("#windowButton").click();

     const newWindow = await newPage;
    expect(await newWindow.locator("#sampleHeading").textContent(),"This is a sample page")
    await newWindow.close();
    await page.bringToFront();
    console.log(page.url())
    console.log(newWindow.url())
})


test("1.Verify multiple tabs", async ({page, context}) =>{

    await page.goto("https://demoqa.com/browser-windows");
    const pages = context.pages();
    console.log("Count before new tab: "+ pages.length);
        await page.locator("#tabButton").click();
       const pages2 = context.pages();
     for(const tab of pages2){
        console.log("URL : "+await tab.url())
        console.log("Title of the page "+ await tab.title())
     }

})