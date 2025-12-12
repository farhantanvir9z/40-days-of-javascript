# Tasks

## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

### Solved!

```js
async function wait(ms = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I am resolved! after ${ms} milliseconds.`);
        }, ms);
    });
}
async function tacklePromise() {
const result = await wait(3000);
console.log(result)
}
tacklePromise()
```

## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

### Solved!
```js
async function fetchData() {
  try {
    const result = await fetch(`.data.json`).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`Failed to fetch ${response.status}`)
      } 
    });
    console.log(result);
  } catch(error) {
    console.error(error)
  }
}
fetchData();

```
## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page

## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

## 6. Refactor then/catch to async/await

```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Done!
#### The refactored version of the code is :

```js
async function fetchData() {
  const URL = "/api/data";
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

```
## Project Task

Let's Build a “Movie Explorer” App

Build an app that lets users search movies using the OMDB API:
`http://www.omdbapi.com/?apikey=yourkey&s=movieName`

`http://www.omdbapi.com/?i=tt3896198&apikey=17ee6f3f ||               apikey = 17ee6f3f`

Hints:

- Input box for search term
- Display movie title, poster, and year
- Show “No results found” if search fails
- Use async/await, DOM manipulation, and try/catch

