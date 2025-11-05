# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console

## Done!

```js
async function fetchData() {
    try {
        const URL = "https://jsonplaceholder.typicode.com/";
        const endPoint = "users";

        const response = await fetch(`${URL}/${endPoint}`);

        if (!response.ok) {
            throw new Error(`Opps! Data not fetch. response status:${response.status}`);
        }
        const users = await response.json();
        printName(users);
    } catch (error) {
        console.error(error.message)
    }
}
function printName(usersArr) {
    if (!usersArr || usersArr.length === 0) {
        console.error("No user found.");
    } else {
        usersArr.forEach(user => {
            const { name } = user;
            console.log(name);
        });
    }
}
fetchData();
```

## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM

## 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console

## Done!

```js
const URL = "https://jsonplaceholder.typicode.com/posts";

const post = {
    userId: 8,
    postId: crypto.randomUUID(),
    title: "40 Days of Javascript || Day 25 || fetch API",
    author: "Farhan",
    postDate: `${new Date()}`,
    body: 
        "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval."
}

async function createPost(post) {
    try {
        const response = await fetch(URL, {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        throw new Error(`Failed to Create the post. response status: ${response.status}`);
    } else {
        const result = await response.json();
        console.log(result);
    }
    } catch (error) {
        console.error()
    }
   
}

createPost(post);
```


## 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint

## Done!

```js

const URL = "https://jsonplaceholder.typicode.com/posts";

const postId = 10;

const post = {
    userId: 1,
    postId: crypto.randomUUID(),
    title: "40 Days of Javascript || Day 24 || Async/Await",
    author: "Farhan",
    postDate: `${new Date()}`,
    body: 
        "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval."
}

async function updatePost(post) {
    try {
        const response = await fetch(`${URL}/?postId=${postId}`, {
        method: "PUT", 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        throw new Error(`Failed to update the post. response status: ${response.status}`);
    } else {
        const result = await response.json();
        console.log(result);
    }
    } catch (error) {
        console.error(error);
    }
   
}

updatePost(post);
```

## 5. Send a `PATCH` request to update just the title of post `ID = 1`

## Done!

## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response

## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response

## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post

## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message

## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)