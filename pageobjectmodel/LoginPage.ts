//POM: Page object model : Design pattern
// It repositiory where you will keep all your webelement locator
import { expect, Expect , type Locator , type Page } from "@playwright/test";
export class LoginPage{
    readonly page: Page;
    readonly UserName;
    readonly passWord;
    readonly loginButton;

    constructor(page: Page){
        this.page = page;
        this.UserName = this.page.getByRole('textbox', { name: 'Username' });
        this.passWord = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async LoginToApplication(userName: string, password:string){
        await this.UserName.fill(userName);
        await this.passWord.fill(password,{force: true });
        await this.loginButton.click({force:true});
    }
}
