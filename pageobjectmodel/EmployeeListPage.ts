import { expect, type Page } from '@playwright/test';
import { PIMPage } from './PIMPage';

export class EmployeeListPage {
    readonly page: Page;
    readonly pimPage: PIMPage;
    readonly employeeNameInput;
    readonly employeeIdInput;
    readonly searchButton;
    readonly table;
    readonly employeeInformationHeading;

    constructor(page: Page) {
        this.page = page;
        this.pimPage = new PIMPage(page);
        this.employeeNameInput = this.page.locator("input[placeholder='Type for hints...']").first();
        this.employeeIdInput = this.page.locator('//label[normalize-space()="Employee Id"]/following::input[1]');
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
        this.table = this.page.locator("div[role='table']");
        this.employeeInformationHeading = this.page.getByRole('heading', { name: 'Employee Information' });
    }

    async openEmployeeListPage() {
        await this.pimPage.clickOnEmplyeeListMenu();
    }

    async searchByName(employeeName: string) {
        await this.employeeNameInput.fill(employeeName);
        await this.searchButton.click();
    }

    async searchByEmployeeId(employeeId: string) {
        await this.employeeIdInput.fill(employeeId);
        await this.searchButton.click();
    }

    async verifyPageLoaded() {
        await expect(this.employeeInformationHeading).toBeVisible();
        await expect(this.table).toBeVisible();

        const rows = this.page.locator("div[role='rowgroup'] div[role='row']");
        await expect(rows.first()).toBeVisible();
        await expect(await rows.count()).toBeGreaterThan(1);
    }

    async verifySearchResult(expectedText: string) {
        await expect(this.page.locator('body')).toContainText(expectedText);
    }
}
