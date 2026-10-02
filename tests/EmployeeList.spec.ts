import { test, expect } from '../utilities/test-fixtures.ts';
import { ENV } from '../utilities/Environment.ts';

test.describe('Employee List module', () => {
    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto(ENV.uiURL);
        await loginPage.LoginToApplication(ENV.username, ENV.password);
        await expect(page.locator("//span[text()='PIM']")).toBeVisible();
    });

    test('Verify employee list page opens and shows records', async ({ employeeListPage }) => {
        await employeeListPage.openEmployeeListPage();
        await employeeListPage.verifyPageLoaded();
    });

    test('Verify employee can be searched by name', async ({ employeeListPage }) => {
        await employeeListPage.openEmployeeListPage();
        await employeeListPage.searchByName('Amelia Brown');
        await employeeListPage.verifySearchResult('Amelia Brown');
    });

    test('Verify employee can be searched by employee id', async ({ employeeListPage }) => {
        await employeeListPage.openEmployeeListPage();
        await employeeListPage.searchByEmployeeId('0001');
        await employeeListPage.verifySearchResult('0001');
    });
});
