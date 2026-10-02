
import {test} from '@playwright/test'


test.describe("Login Module @Login", ()=>{
   test.beforeAll("Load DB", async ()=>{
      console.log("Load the db")
   })

   test.beforeEach('Load the browser', async()=>{
    console.log("Load the url")
   })

   test("Login with valid credentials @regression", async()=>{
    test.slow();
    console.log("Login into the application")
   })

   test("Login with invalid credentials", {tag: ['@smoke', '@regression']}, async()=>{
    console.log("Add employee")
   })

test.afterAll("Close DB", async ()=>{
      console.log("close the db")
   })

   test.afterEach("Logout from app", ()=>{
    console.log("Log put from application")
   })
})