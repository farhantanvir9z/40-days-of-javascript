# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

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
        const data = await fetch(URL).then(res => res.json());

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
- 
Element,Description,Hex Code

Primary Background,Main app background (dark gray-black),#121212
Secondary Background,Navigation bar and subtle overlays (darker gray),#0A0A0A
Card Background 1,"Top-left card (Inception, blue-gray)",#1E3A5F
Card Background 2,"Top-middle card (The Dark Knight, teal-gray)",#0F4C5C
Card Background 3,"Top-right card (Interstellar, neutral gray)",#374151
Card Background 4,"Bottom-left card (Dunkirk, olive-gray)",#4B5E40
Card Background 5,"Bottom-middle card (Tenet, purple-gray)",#4C3D5E
Card Background 6,"Bottom-right card (Oppenheimer, brown-gray)",#5D4037
Icon Overlay,Play buttons and clapperboard icons (white),#FFFFFF
Text Primary,Movie titles and labels (light gray-white),#F5F5F5
Text Secondary,Dropdown labels and placeholders (medium gray),#9CA3AF
Accent Blue,Search bar highlight and + button,#3B82F6
Navigation Active,Bottom tab icons/labels (light gray),#D1D5DB
Navigation Inactive,Bottom tab backgrounds (dark gray),#1F2937
Border/Subtle Shadow,Card edges and dividers (very dark gray),#1F2937