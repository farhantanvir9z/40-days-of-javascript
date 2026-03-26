const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");
const status = document.getElementById("status");

let controller;

startBtn.addEventListener("click", () => {
  controller = new AbortController();
  fetchData(controller.signal);
});

cancelBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

async function fetchData(signal) {
  try {
    status.textContent = "Fetching started...";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal });
    await new Promise(resolve => setTimeout(resolve, 5000));

    const data = await response.json();

    status.textContent = "Fetch completed!";
    console.log(data);

  } catch (err) {
    if (err.name === "AbortError") {
      status.textContent = "Fetch cancelled!";
    } else {
      status.textContent = "Error occurred!";
      console.log(err);
    }
  }
}