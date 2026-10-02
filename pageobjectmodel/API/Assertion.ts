import { APIRequestContext, expect } from "@playwright/test"
import { ENV } from "../../utilities/Environment"

export class APIPage{


    async verifyStatusCode( response:any , statusCode:number){
        await expect(await response.status()).toBe(statusCode)
    }

    async GetPosts(request:any, postId:number){
        const response = await request.get(ENV.apiURL+'/posts/"+postId+"')
        this.verifyStatusCode(response, 200)
        
    }
}