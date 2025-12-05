
// script started
console.log("Js loaded successfully.");

// base URL for OMDb (keeps the api key and base params)
const BASE_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=17ee6f3f";

// grab the bits from the page
const searchInputElem = document.querySelector(".search-input");
const searchButton = document.querySelector(".searchBtn");
const movieBoxTemplate = document.querySelector(".movie-box-template");
const movieContainer = document.querySelector(".movie-container");

// run search when the button is clicked
searchButton.addEventListener("click", queryMovie);

// fetch movies from OMDb using the text from the input
async function queryMovie() {
  try {
    const searchKeyWord = searchInputElem.value;
    if (searchKeyWord === "") {
      showError("Please, type movie name");
    } else {
    console.log(`Searching for movie: ${searchKeyWord}...`);
    const response = await fetch(`${BASE_URL}&s=${searchKeyWord}`);
    const data = await response.json();
    const movies = data.Search;
    renderMovies(movies);
    }
    
  } catch (error) {
    console.error("Error fetching movies:", error);
    showError("Failed to load movies. Please try again.");
  }
}

// show a list of movies (or do nothing if none)
function renderMovies(moviesArray) {
  try {
    if (!moviesArray) {
      throw new Error("Movies not found!");
    } else {
      movieContainer.innerHTML = "";
      moviesArray.forEach((movie) => {
        let { Title, Poster, Year } = movie;
        Poster = (Poster === "N/A") ? "default-movie-poster.png" : Poster;
        createMovieBox(Title, Poster, Year);
      });
    }
  } catch (error) {
       showError("Failed to load movies. Please try again later.");
    console.error(error);
  }
}

function showError(errorMessage) {
   const errorMessageElem = document.createElement("p");
    errorMessageElem.classList.add("error");
    errorMessageElem.innerText = errorMessage;
    movieContainer.innerHTML = "";
    movieContainer.appendChild(errorMessageElem);
}
// build one movie box from the template and data
function createMovieBox(Title = "Movie title", Poster = "default-movie-poster.png", Year = 2005) {
  const cloneMovieBox = movieBoxTemplate.content.cloneNode(true);
  const moviePoster = cloneMovieBox.querySelector(".poster");
  const movieTitleElem = cloneMovieBox.querySelector(".movie-title");
  const movieReleaseYearDisplayElem = cloneMovieBox.querySelector(".movie-release-date");

  moviePoster.setAttribute("src", Poster);
  movieTitleElem.innerText = Title;
  movieReleaseYearDisplayElem.innerText = Year;

  const movieWrapperDiv = document.createElement("div");
  movieWrapperDiv.classList.add("movie-box");

  // put the parts into the wrapper
  movieWrapperDiv.appendChild(moviePoster);
  movieWrapperDiv.appendChild(movieTitleElem);
  movieWrapperDiv.appendChild(movieReleaseYearDisplayElem);

  showMovieBox(movieWrapperDiv);
}

// add the movie box to the page
function showMovieBox(movieBoxElem) {
  movieContainer.appendChild(movieBoxElem);
}
