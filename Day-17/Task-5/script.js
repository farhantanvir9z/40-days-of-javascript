const links = [...document.querySelectorAll("a")];
const resultShowerElem = document.querySelector("#result");

const uniqueLinks = new Set();

links.forEach((link) => {
  uniqueLinks.add(link.getAttribute("href"))
})

resultShowerElem.innerText = `Unique links count: ${uniqueLinks.size}`