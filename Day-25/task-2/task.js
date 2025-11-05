const BASE_URL = "https://jsonplaceholder.typicode.com";

const ENDPOINT = "posts";

const queryParams = {
    "userId": 1,
}

const queryParamsStr = new URLSearchParams(queryParams).toString();

const bodyElem = document.querySelector("body");

async function fetchData() {
    try {
        const response = await fetch(`${BASE_URL}/${ENDPOINT}?${queryParamsStr}`);

        if (!response.ok) {
            throw new Error("Data not fetched.");
        }

        const data = await response.json();

        renderPostTitles(data);
        
    } catch(error) {
        console.error(error.message);
        showError("Sorry, Data not loaded!");
    }
}

function showError(errorMessage) {
    const pElem = document.createElement("p");

    pElem.innerText = errorMessage;

    pElem.classList.add("error");

    bodyElem.innerHTML = "";

    bodyElem.appendChild(pElem);

}

function renderPostTitles(dataArr) {
    if (!dataArr || dataArr.length === 0) {
        console.error("No data found.");
        showError("No posts found for the user.");
        return;
    }
    dataArr.forEach(({ title }) => {
        displayTitle(title);
    });
}

function displayTitle(title) {
    const pElem = document.createElement("p");
    pElem.classList.add("message");
    pElem.innerText = title;

    bodyElem.appendChild(pElem);
}

fetchData()