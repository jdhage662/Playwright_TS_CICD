import { expect , type Locator , type Page } from "@playwright/test";

export class PIMPage{
    readonly page: Page;
    readonly firstName;
    readonly lastName;
    readonly saveButton;
    readonly PIMMenu;
    readonly AddEmployee;
    readonly CreateLoginDetailsToggle;
    readonly userName;
    readonly password;
    readonly confirmPassword;
    readonly fileUpload;
    readonly firstNameMandatoryErrorMessage;
    readonly lastNameMandatoryErrorMessage;
    readonly EmployeeList;

    constructor(page:Page){
        this.page = page;
        this.firstName = this.page.locator("input[name='firstName']");
        this.lastName = this.page.locator("input[name='lastName']");
        this.saveButton = this.page.locator("button[type='submit']");
        this.PIMMenu = this.page.locator("//span[text()='PIM']");
        this.AddEmployee = this.page.getByText("Add Employee" ,{exact:true})
        this.CreateLoginDetailsToggle = this.page.locator("span.oxd-switch-input")
        this.userName = this.page.locator("//label[text()='Username']/following::input[1]")
        this.password = this.page.locator("//label[text()='Password']/following::input[1]")
        this.confirmPassword = this.page.locator("//label[text()='Confirm Password']/following::input[1]");
        this.fileUpload = this.page.locator("//input[@type='file']");
        this.firstNameMandatoryErrorMessage = this.page.locator("//input[@name='firstName']/following::span[text()='Required']")
        this.lastNameMandatoryErrorMessage = this.page.locator("//input[@name='lastName']/following::span[text()='Required']")
        this.EmployeeList = this.page.getByText("Employee List" ,{exact:true})
    }


    async addEmployee(){
        await this.PIMMenu.dblclick();
        //shift + click 
        await this.AddEmployee.click();
        await this.firstName.fill("Java", {timeout:2000})
        await this.lastName.fill('Script')
        await this.CreateLoginDetailsToggle.click();
        await this.userName.fill("Admin123")
        await this.password.fill("Admin123")
        await this.confirmPassword.fill("Admin123")
        await this.fileUpload.setInputFiles("C:/Users/Vihan/Desktop/Playwright-Aug-2026/Playwright-typescript-automation/FileUpload/image.png")
        await this.saveButton.click();

    }

    async verifyRequired(firstName: string, lastName: string, userName: string, password:string){
        await this.PIMMenu.click();
        //shift + click 
        await this.AddEmployee.click();
        await this.firstName.fill(firstName, {timeout:2000})
        await this.lastName.fill(lastName)
        await this.CreateLoginDetailsToggle.click();
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.confirmPassword.fill(password)
        await this.fileUpload.setInputFiles("C:/Users/Vihan/Desktop/Playwright-Aug-2026/Playwright-typescript-automation/FileUpload/image.png")
        await this.saveButton.click();
    }

    async clickOnEmplyeeListMenu(){
        await this.PIMMenu.click();
        await this.EmployeeList.click();
    }

}