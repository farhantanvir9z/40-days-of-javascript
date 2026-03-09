import { debounce } from "./modules/debounce.js";
import { throttle } from "./modules/throttle.js";
import { memoize } from "./modules/memoize.js";
let productArr;
const strategyBtnElems = document.querySelector("#strategies");
const resultsShowerElem = document.querySelector("#results-grid");
const searchInputElem = document.querySelector("#search-input");
const productCardSkeletonElem = document.querySelector(
    "#product-card-skeleton"
);
const tempProductCard = document.querySelector("#temp-product-card");

const funcCallsShowerElem = document.querySelector("#function-calls");
const execTimeShowerElem = document.querySelector("#exec-time");

let strategy = "debounce";

let funcCallCount = 0;

function createProduct(productObj) {
    if (!productCardSkeletonElem.classList.contains("hidden")) {
        productCardSkeletonElem.classList.add("hidden");
    }
    const { name, category, price, rating, city } = productObj;

    const clonedProductCard = tempProductCard.content.cloneNode(true);
    const categoryShower = clonedProductCard.querySelector("#category");
    const productNameShower = clonedProductCard.querySelector("#product-name");
    const ratingsShower = clonedProductCard.querySelector("#ratings");
    const priceShower = clonedProductCard.querySelector("#price");
    const cityShower = clonedProductCard.querySelector("#city");

    categoryShower.innerText = category;
    productNameShower.innerText = name;
    ratingsShower.innerText = rating;
    priceShower.innerText = `$${price}`;
    cityShower.innerText = city;

    resultsShowerElem.appendChild(clonedProductCard);
}

async function searchProduct(searchKey) {
    const startTime = performance.now();
    resultsShowerElem.innerHTML = "";
    funcCallCount++;
    funcCallsShowerElem.innerText = funcCallCount;
    if (searchKey === "") {
        return;
    } else {
        try {
            if (productCardSkeletonElem.classList.contains("hidden")) {
                productCardSkeletonElem.classList.remove("hidden");
            }
            const res = await fetch(
                "https://raw.githubusercontent.com/farhantanvir9z/DB/main/products.db"
            );
            const products = await res.json();
            const searchedProducts = products.filter(product => {
                return product.name
                    .toLowerCase()
                    .includes(searchKey.toLowerCase());
            });
            renderProduct(searchedProducts)
        } catch (err) {
            console.error("Error occured:", err.message);
        }
    }
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    execTimeShowerElem.innerText = totalTime.toFixed(2);
}

function renderProduct(productArr) {
   
    if (productArr.length === 0) {
        setTimeout(() => {
            productCardSkeletonElem.classList.add("hidden");
            resultsShowerElem.innerHTML = `<p class="text-xl text-red-700">Opps! Product not found.</p>`;
        }, 3000);
    } else {
        productArr.forEach(product => {
            createProduct(product);
        });
    }
}

const debouncedSearch = debounce(searchProduct, 300);
const throttledSearch = throttle(searchProduct, 300);
const memoizedSearch = memoize(searchProduct);

strategyBtnElems.addEventListener("click", e => {
    const target = e.target;
    const x = [...strategyBtnElems.children];
    if (target.tagName === "BUTTON") {
        strategy = target.innerText.toLowerCase().trim();
        x.forEach(element => {
            element.classList.remove("bg-indigo-600");
            element.classList.remove("text-white");
        });
        target.classList.add("bg-indigo-600");
        target.classList.add("text-white");
        target.classList.remove("text-zinc-500");

        console.log(strategy);
    }
});

searchInputElem.addEventListener("input", e => {
    const searchKey = e.target.value.trim();
    switch (strategy) {
        case "debounce":
            debouncedSearch(searchKey)
            break;
        case "throttle":
            throttledSearch(searchKey)
            break;
        default:
            debouncedSearch(searchKey);
    }
});
