import { debounce } from "./debounce.js"

// grabbing elements from DOM
const searchElem = document.querySelector("#search-input");
const loadingSkeleton = document.querySelector("#skeleton-loading");
const resultsContainer = document.querySelector("#results-container");


// this function filters users by name
async function filterUser(name) {
  try {

    // if input is empty, just stop here
    if (name === "") {
      return;
    } else {

      // clear previous results before new search
      resultsContainer.innerHTML = "";

      // show loading skeleton if it's hidden
      if (loadingSkeleton.classList.contains("hidden")) {
        loadingSkeleton.classList.remove("hidden");
      }

      // fetching users database from github
      const response = await fetch("https://raw.githubusercontent.com/farhantanvir9z/DB/main/users.db");
      const users = await response.json();

      // filter users by name
      const filtered = users.filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase());
      });

      // if no users found
      if (filtered.length === 0) {
        setTimeout(() => {
          loadingSkeleton.classList.add("hidden");
          resultsContainer.innerText = "Oops, No result found!";
        }, 3000); 
      }

      // if users found, create cards
      filtered.forEach((user) => {
        setTimeout(() => {
          createCard(user);
        }, 1000); // delay to show loading
      });
    }

  } catch (err) {
    // if fetch fails, log error
    console.error("Fetch error:", err.message);
  }
}


// wrapping filterUser with debounce (600ms delay)
const debouncedSearch = debounce(filterUser, 600);


// this function creates a user card
function createCard(user) {

  // hide loading skeleton when card is about to show
  if (!loadingSkeleton.classList.contains("hidden")) {
    loadingSkeleton.classList.add("hidden");
  }

  // cloning template card
  const cloneCard = document.querySelector("#tempUserCard").content.cloneNode(true);

  // selecting elements inside cloned template
  const showNameElem = cloneCard.querySelector("#name");
  const showReposElem = cloneCard.querySelector("#publicRepoes");
  const showFollowersElem = cloneCard.querySelector("#followers");

  // destructuring user object
  const { name, publicRepos, followers } = user;

  // setting values
  showNameElem.innerText = name;
  showReposElem.innerText = `📦 ${publicRepos} Repos`;
  showFollowersElem.innerText = `📦 ${followers} followers`;

  // appending card to results container
  resultsContainer.appendChild(cloneCard);
}


// listening for input event
searchElem.addEventListener("input", (e) => {

  // getting typed value
  const searchKey = e.target.value;

  // clearing results before new search
  resultsContainer.innerHTML = "";

  // calling debounced search
  debouncedSearch(searchKey);
});