import { test as base , expect} from '@playwright/test';

import { LoginPage } from '../pageobjectmodel/LoginPage';
import { PIMPage } from '../pageobjectmodel/PIMPage';
import { EmployeeListPage } from '../pageobjectmodel/EmployeeListPage';
import { APIPage } from '../pageobjectmodel/API/Assertion';

type Fixtures = {
      loginPage: LoginPage;
      pimPage: PIMPage;
      employeeListPage: EmployeeListPage;
      apiPage: APIPage;
}

export const test = base.extend<Fixtures>({

     loginPage: async({ page },  use)=>{
        await use(new LoginPage(page))
     },

     pimPage: async( {page},  use) => {
        await use(new PIMPage(page));
     },

     employeeListPage: async({ page }, use) => {
        await use(new EmployeeListPage(page));
     },

     apiPage: async( {page}, use )=>{
        await use(new APIPage());
     }
})

export {expect};