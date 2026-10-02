import { expect, request}  from '@playwright/test'

import {ENV} from '../utilities/Environment.ts'

import {test} from '../utilities/test-fixtures.ts'


test("Get Record from post api", async ({request, apiPage})=>{
    //  await apiPage.GetPosts(request, 1)
    const response = await request.get(ENV.apiURL+"posts/1"); //URI ==URL +API endpoint
    //Path parameter /  , to identify the resource
    //Query Parameter ? , filter 
    await apiPage.verifyStatusCode(response, 200);
     expect(response.status()).toBe(200)

     expect(response.statusText()).toBe('OK')
    const data = await response.json();

     expect(data).toHaveProperty('body')
     expect(data).toHaveProperty('title')
     console.log(data.title)
     expect(data.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    const body = await response.json();

    console.log(await body)
})


test("Post request verification", async({request})=>{
  const response =  await request.post(ENV.apiURL+"posts", 
    {
        data:{
            title: "Automation test",
            userId: 200,
            body: "This is playwright session"
        }
    })
    const body = await response.json();

    console.log(body);
    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe('Created')
    expect(body.title).toBe("Automation test")

})



test("Put request verification", async({request})=>{
  const response =  await request.put(ENV.apiURL+"/posts/100", 
    {
        data:{
            title: "at nam consequatur ea labore ea harum",
            userId: 400,
            body: "This is playwright session"
        }
    })
    const body = await response.json();

    console.log(body);
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    expect(body.title).toBe("Automation test")

})


test("patch request verification", async({request})=>{
  const response =  await request.patch(ENV.apiURL+"/posts/100", 
    {
        data:{
            title:"This is automation test"
        }
    })
    const body = await response.json();

    console.log(body);
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    // expect(body.title).toBe("Automation test")

})

test("delete request verification", async({request})=>{

  const response =  await request.delete(ENV.apiURL+"/posts/100",{
    headers:{
        ContentType : 'application/json',
        Authorization: 'xyz'
    }
  })
    const body = await response.json();
    console.log(body);
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    // expect(body.title).toBe("Automation test")

})

