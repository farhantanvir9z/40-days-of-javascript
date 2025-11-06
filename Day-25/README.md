# Tasks

## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console

## Done!

```js
async function fetchData() {
  try {
    const URL = "https://jsonplaceholder.typicode.com/";
    const endPoint = "users";

    const response = await fetch(`${URL}/${endPoint}`);

    if (!response.ok) {
      throw new Error(
        `Opps! Data not fetch. response status:${response.status}`
      );
    }
    const users = await response.json();
    printName(users);
  } catch (error) {
    console.error(error.message);
  }
}
function printName(usersArr) {
  if (!usersArr || usersArr.length === 0) {
    console.error("No user found.");
  } else {
    usersArr.forEach((user) => {
      const { name } = user;
      console.log(name);
    });
  }
}
fetchData();
```

## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM

## Done!

> See the task-2 folder.

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
  body: "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
};

async function createPost(post) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to Create the post. response status: ${response.status}`
      );
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error();
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
  body: "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
};

async function updatePost(post) {
  try {
    const response = await fetch(`${URL}/?id=${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to update the post. response status: ${response.status}`
      );
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}

updatePost(post); // 404 error!
```

## 5. Send a `PATCH` request to update just the title of post `ID = 1`

## Done!

```js
const URL = "https://jsonplaceholder.typicode.com/posts";

const id = 1;

const post = {
  title: "40 Days of Javascript || Day 25 || fetch API",
};

async function updatePost(post) {
  try {
    const response = await fetch(`${URL}/?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to update the post. response status: ${response.status}`
      );
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}

updatePost(post); // 404 error!
```

## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response

## Done!

```js
const URL = "https://jsonplaceholder.typicode.com/posts";

const id = 1;

const post = {
  title: "40 Days of Javascript || Day 25 || fetch API",
};

async function deletePost(post) {
  try {
    const response = await fetch(`${URL}/?id=${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        `Failed to update the post. response status: ${response.status}`
      );
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}

deletePost(post); // 404 error!
```

## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response

## Done!

```js
const URL = "https://jsonplaceholder.typicode.com/posts";

const post = {
  userId: 8,
  postId: crypto.randomUUID(),
  title: "40 Days of Javascript || Day 25 || fetch API",
  author: "Farhan",
  postDate: `${new Date()}`,
  body: "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
};

async function createPost(post) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to Create the post. response status: ${response.status}`
      );
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error();
  }
}

createPost(post);
```

## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post

## Done!

```js
const URL = "https://jsonplaceholder.typicode.com/posts";

async function request(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("data not fetched.");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchUserData(url) {
  const data = await request(url);
  console.log(data);
}

fetchUserData(URL);

async function createNewUser(userObj) {
  const newUser = await request(URL, {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
  console.log(newUser);
}

const user = {
  userId: 10,
  id: 70,
  title: "Hello from javaScript",
  body: "Hello, I am From Bangladesh. It is a sample data for posting.",
};

createNewUser(user);
```

## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message

## Done!

```js
const URL = "https://jsonplaceholder.typicode.c/posts";
async function fetchData() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `Error: Data not fetched. response Status:${response.status}`
      );
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

## Done!

```js
let controller;

const downloadButtonElem = document.querySelector(".downloadBtn");

downloadButtonElem.addEventListener("click", downloadFile);

const abortButtonElem = document.querySelector(".abortBtn");

abortButtonElem.addEventListener("click", () => {
  controller.abort("User has aborted the download action.");
});

const url = "./practise.html";

async function downloadFile() {
  console.log("Downloading The file...");
  controller = new AbortController();
  const signal = controller.signal;

  setTimeout(async () => {
    try {
      const response = await fetch(url, { signal });
      const blob = await response.blob();

      const objectUrl = URL.createObjectURL(blob);

      const linkElem = document.createElement("a");
      linkElem.href = objectUrl;
      linkElem.download = "index.html";
      linkElem.click();
      URL.revokeObjectURL(objectUrl);
      console.log("download completed!");
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Download aborted:", error.message);
      } else {
        console.error("Download failed:", error);
      }
    }
  }, 3000);
}
```
