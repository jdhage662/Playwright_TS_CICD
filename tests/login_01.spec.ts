import path from 'path'
import {test, expect} from '../utilities/test-fixtures.ts'
import{ENV} from '../utilities/Environment.ts'

// test.describe("Add EMployee Module",async()=>{

const authfile = path.resolve(process.cwd(), '.auth', 'user.json')

test.beforeEach("Load url", async ({page})=>{
    await page.goto(ENV.uiURL)

})

test.use({
  storageState:   authfile
})
test('Add Employee @smoke', async ({ loginPage, pimPage, page }) => {
    await pimPage.addEmployee();
});



test.use({
  storageState:   authfile
})
test("Verify firstname is mandatory field", async ({loginPage, pimPage, page})=>{
    await pimPage.verifyRequired("", "Jad", "Uname123", "password123");
    await expect(pimPage.firstNameMandatoryErrorMessage.isVisible());

})

test.use({
  storageState:   authfile
})

test("Verify last is mandatory field", async ({loginPage, pimPage, page})=>{
    await pimPage.verifyRequired("Jyoti", "", "Uname123", "password123");
    await expect(pimPage.lastNameMandatoryErrorMessage.isVisible());
    
})


test("write program to find febonacci series", async ({loginPage, pimPage, page})=>{
    let n1 = 0;
    let n2 = 1;     
    let Term = n1 + n2;
    console.log("Fibonacci Series:"+ Term);
    console.log(n1);
    console.log(n2);        

})

test("concatenate two arrays", async ({loginPage, pimPage, page})=>{
    let array1 = [1,2,3,4,5];
    let array2 = [6,7,8,9,10];
    let array3 = array1.concat(array2);
    console.log("Concatenated array:"+array3);
})


// test("Verify the table", async ({loginPage, pimPage, page})=>{
//  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// //    const object = new LoginPage(page);
//     await loginPage.LoginToApplication('Admin','admin123');
//     // const pimObject = new PIMPage(page);
//     await pimPage.clickOnEmplyeeListMenu();
//     await page.waitForTimeout(1000)
//     do{
//     let row=  page.locator("//div[@role='table']//div[@role='row']")
//     let  rowCount = await row.count();
//     console.log("Row count"+rowCount)
//     for(let i = 2 ; i< rowCount ; i++){
//         //    let columnHeaderCount =  await row.nth(i).locator("//div[@role='columnheader']").count();
//         //    console.log(columnHeaderCount)
//         //    for(let j =0 ; j< columnHeaderCount ; j++){
//         //     let columnHeader = await row.nth(i).locator("//div[@role='columnheader']").nth(j).textContent();
//         //     console.log(columnHeader);
//         //     if(columnHeader == "Id"){
//         //         return j;
//         //     }
//         //    }
//         let cellCount =  await row.nth(i+1).locator("//div[@role='cell']").count();
//         for(let k = 1; k< cellCount ; k++){
//          let cellValueData = await row.nth(i).locator("//div[@role='cell']").nth(k).locator("div").textContent();
//             console.log(cellValueData);

//         }
//      await row.nth(i).locator("//div[@role='cell']").locator("i.bi-trash").click();
//      let button = await page.getByText('Next')
//      if(!await button.isDisabled()){
//          await button.click();

//      }

//     }

// })