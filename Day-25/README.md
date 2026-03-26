# Day 25 tasks complete!

## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console

### Done!

```javascript
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    });
    if (!res.ok) {
      throw new Error("No, User found!", res.status)
    }
    const users = await res.json();
    for (let user of users) {
      const {name} = user;
      console.log(name)
    }
  } catch (err) {
    console.error(err.message)
  }
}

fetchUser()
```

## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM

### Done!

[Task 2](./Task-2)

## 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console

### Done!

```javascript

async function createPost(post) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(post)
    })
    const data = await res.json();
    console.log(data)
  } catch (err) {
    console.error(err.message)
  }
}

const post1 = {
  title: "What is the LLMS?",
  body: "Large Language Models (LLMs) are advanced AI systems trained on massive, diverse text datasets to understand, summarize, generate, and predict human-like language, code, and content",
  userId: 2
}

createPost(post1)
```

## 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint

### Done!
```javascript

async function updatePost(post) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(post)
    })
    const data  = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message)
  }
}

const post1 = {
  title: "What is the AI?",
  body: "Artificial intelligence (AI) encompasses the fields of computer and data science focused on building machines with human intelligence to perform tasks like learning, reasoning, problem-solving, perception, and language understanding."
}

updatePost(post1)

```
## 5. Send a `PATCH` request to update just the title of post `ID = 1`

### Done!

```javascript

async function updatePost(post) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(post)
    })
    const data  = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message)
  }
}

const post1 = {
  title: "What is the AI?",
}

updatePost(post1)
```

## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response

### Done!

```javascript 

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
async function deletePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/postId`,
    {
      method: "DELETE"
    })
    console.log(res.status);
  } catch (err) {
    console.error(err.message)
  }
}

deletePost(1)

```

## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response

### Done!

```javascript

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
async function createPost(post) {
    try {
        const res = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
const post1 = {
    title: "What is a MCP server?",
    body: "An MCP (Model Context Protocol) server is an open-standard program that acts as a secure, standardized bridge connecting Large Language Models (LLMs) to external data, tools, and systems."
};
createPost(post1);
```

## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post

### Done!

```javascript

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function request(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`No, action is occured! Status code: ${res.status}`)
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message)
  }
}



const post1 = {
    title: "What is a MCP server?",
    body: "An MCP (Model Context Protocol) server is an open-standard program that acts as a secure, standardized bridge connecting Large Language Models (LLMs) to external data, tools, and systems."
};

// GET USER
request(BASE_URL, {
  method: "GET"
})

// POST A post

request(BASE_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(post1)
})
```
## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message

### Done!

```javascript
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/user", {
      method: "GET"
    });
    if (!res.ok) {
      throw new Error(`No User found!, status code: ${res.status}`)
    }
    const users = await res.json();
    for (let user of users) {
      const {name} = user;
      console.log(name)
    }
  } catch (err) {
    console.error(err.message)
  }
}

fetchUser()

```
## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

### Done!
[Task 10](./Task-10)