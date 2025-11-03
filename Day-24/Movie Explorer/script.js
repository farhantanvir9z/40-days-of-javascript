console.log("Js loaded successfully.");

/*
first i will add an eventListener on search button which will be triggerred when click event fire.
Then event handler function will be called named `queryMovie()` => it first resolves the response object then return an array of movies then forEach movie I will call a function named `displayMovie()` => that basically clone the template's content of movie box and append every time the cloned movie box in the movie container.
*/

const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=17ee6f3f";
const searchButton = document.querySelector(".searchBtn");

searchButton.addEventListener("click", queryMovie);

async function queryMovie() {
  const searchInputElem = document.querySelector(".searchInput");
  const searchKeyWord = searchInputElem.value;
  const response = await fetch(`${BASE_URL}&s=${searchKeyWord}`).then(response => response.json());
  const movies = response.Search;
  displayMovie(movies);
}
function displayMovie(moviesArray) {
try {
  if (!moviesArray) {
    throw new Error("Movies not found!");
    return
  } else {
    moviesArray.forEach((movie) => {
      const {Title, Poster, Year} = movie;
      console.log(Title, Year, Poster)
    })
  }
} catch (error) {
  console.error(error);
}
}