import { debounce } from "./debounce.js"

const list = new Array(1000);
const AscendingSortBtn = document.querySelector("#Ascending-sort-btn");
const descendingSortBtn = document.querySelector("#descending-sort-btn");
const shuffleBtn = document.querySelector("#shuffle-btn");
const filterInput = document.querySelector("#filter-input");
const listContainer = document.querySelector("#main-list");
const performanceShowerElem = document.querySelector("#perf-timer");

const length = list.length;
for (let i = 0; i <= length; i++) {
    list[i] = `item - ${i}`;
}

function renderList(listArr) {
    const renderingStart = performance.now();
    listContainer.innerHTML = "";
    const domFragment = new DocumentFragment();
    listArr.forEach(item => {
        const li = document.createElement("li");
        li.className = "border-2 border-indigo-400 p-2 rounded-full pl-5";
        li.innerText = item;
        domFragment.appendChild(li);
    });
    listContainer.appendChild(domFragment);
    const renderingEnd = performance.now();
    const renderingTime = renderingEnd - renderingStart;
    performanceShowerElem.innerText = renderingTime.toFixed(2);
}

renderList(list);

function filter(key) {
  const filteringStart = performance.now();
  if (key === "") return;
  const liItemElems = [...listContainer.children];
  liItemElems.forEach((liItem) => {
    liItem.style.display = (liItem.innerText.toLowerCase().includes(key.toLowerCase())) ? "block" : "none";
  })
  const filteringEnd = performance.now();
  const filteringTime = filteringEnd - filteringStart;
  performanceShowerElem.innerText = filteringTime;
}

const debouncedFilter = debounce(filter, 600);

function ascendingSort() {
    const sortingWithRenderingStart = performance.now();
    const sortedList = list.toSorted((a, b) => a - b);
    renderList(sortedList);
    const sortingWithRenderingEnd = performance.now();
    const sortingWithRenderingTime =
        sortingWithRenderingEnd - sortingWithRenderingStart;

    performanceShowerElem.innerText = sortingTime.toFixed(2);
}
function descendingSort() {
    const sortingWithRenderingStart = performance.now();
    const sortedList = list.toSorted((a, b) => a - b).reverse();
    renderList(sortedList);
    const sortingWithRenderingEnd = performance.now();
    const sortingWithRenderingTime =
        sortingWithRenderingEnd - sortingWithRenderingStart;

    performanceShowerElem.innerText = sortingTime.toFixed(2);
}

function shuffle() {
    const shufflingWithRenderingStart = performance.now();
    const shuffledList = list.toSorted((a, b) => randNum(-1, 1));

    renderList(shuffledList);

    const shufflingWithRenderingEnd = performance.now();
    const shufflingWithRenderingTime =
        shufflingWithRenderingEnd - shufflingWithRenderingStart;

    performanceShowerElem.innerText = sortingTime.toFixed(2);
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

AscendingSortBtn.addEventListener("click", ascendingSort);
descendingSortBtn.addEventListener("click", descendingSort);
shuffleBtn.addEventListener("click", shuffle);
filterInput.addEventListener("input", (e) => {
  const searchKey = e.target.value;
  debouncedFilter(searchKey);
})