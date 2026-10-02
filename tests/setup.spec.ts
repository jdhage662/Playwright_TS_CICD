import {test, expect} from '@playwright/test'
import {ENV} from '../utilities/Environment.ts'
import path from 'path'

const authfile = path.resolve(process.cwd(),'.auth','user.json');

const adminfile = path.resolve(process.cwd(),'.auth','admin.json');

test ('Save the auth state of login', async ({page})=>{
        await page.goto(ENV.uiURL)
        await page.getByRole('textbox', { name: 'Username' }).fill(ENV.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(ENV.password,{force: true });
        await page.getByRole('button', { name: 'Login' }).click({force:true});
        await expect(page.locator("//span[text()='PIM']").isVisible());
        await page.context().storageState({path : authfile});
})