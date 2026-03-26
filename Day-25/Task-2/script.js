const titlesElement = document.querySelector(".titles");

const API_URL = "https://jsonplaceholder.typicode.com/posts?userId=1";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const posts = await response.json();

    posts.forEach(({ title }) => {
      console.log(title);
      renderTitle(title);
    });

  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

function renderTitle(title) {
  const listItem = document.createElement("li");
  listItem.textContent = title;
  titlesElement.appendChild(listItem);
}

fetchPosts();