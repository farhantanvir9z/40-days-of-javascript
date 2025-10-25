//// ==============================
//// Initialization Function
//// ==============================

// Function runs at start 
function init() {
    console.log("javascript is initialized successfully...");

    // Loop through all recipes and create cards dynamically
    for (let { title, ingredients, instructions } of recipes) {
        createRecipe(title, ingredients, instructions);

        // Load last searched keyword from localStorage into search input
        searchInputElem.value = localStorage.getItem("keyWord");

        // If there was a stored keyword, apply filter immediately
        if (searchInputElem.value !== "") {
            filterRecipe();
        }
    }
}

//// ==============================
//// Recipe Data
//// ==============================

// Sample recipe data (could later be fetched from an API)
const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
        instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
        instructions: "Cook onions, add chicken, spices, and tomatoes."
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheddar Cheese", "Butter"],
        instructions: "Butter bread, place cheese between slices, and grill."
    },
    {
        title: "Veggie Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
        instructions: "Stir fry vegetables and add soy sauce."
    }
];

//// ==============================
//// DOM Selections
//// ==============================

// Container where recipes will be displayed
const recipesContainer = document.querySelector(".recipes-container");

// Get search section (parent container of input + button)
const searchField = document.querySelector(".search");

// Get input element (first child of search section)
const searchInputElem = searchField.children[0];

// Get clear button (second child of search section)
const clearButton = searchField.children[1];

//// ==============================
//// Recipe Card Creation
//// ==============================

/**
 * Function to create a recipe card from template
 * @param {string} title - Recipe title
 * @param {array} ingredients - List of ingredients
 * @param {string} instructions - Cooking instructions
 */
function createRecipe(title, ingredients, instructions) {
    // Clone the template (deep copy)
    const recipeCardClone = document
        .querySelector(".template-recipe-card")
        .content.cloneNode(true);

    // Insert title into card
    const recipeHeadingElem =
        recipeCardClone.querySelector(".recipe-header").firstElementChild;
    recipeHeadingElem.innerText = title;

    // Insert ingredients (joined as comma-separated string)
    const recipeIngredientsListElem = recipeCardClone.querySelector(
        ".recipe-ingredients"
    ).firstElementChild;
    recipeIngredientsListElem.innerText = ingredients.join(", ");

    // Insert instructions
    const recipeDescripsionElem = recipeCardClone.querySelector(
        ".recipe-instructions"
    ).firstElementChild;
    recipeDescripsionElem.innerText = instructions;

    // Append the completed card into the container
    recipesContainer.appendChild(recipeCardClone);
}

//// ==============================
//// Search & Filter Logic
//// ==============================

// Run filter function whenever user types in search box
searchInputElem.addEventListener("keyup", filterRecipe);

/**
 * Filters recipes based on search input value
 */
function filterRecipe() {
    // Convert input to lowercase & remove spaces for comparison
    const searchValue = searchInputElem.value.toLowerCase().trim();

    // Get all displayed recipe cards
    const allRecipes = [...recipesContainer.children];

    // Loop through recipe cards to check if titles include search text
    allRecipes.forEach(elem => {
        const recipeTitle = elem
            .querySelector(".recipe-header")
            .children[0].innerText.toLowerCase();

        // Show recipe if title matches, hide otherwise
        elem.style.display = recipeTitle.includes(searchValue)
            ? "block"
            : "none";
    });

    // Save last searched keyword in localStorage
    localStorage.setItem("keyWord", searchValue);
}

//// ==============================
//// Clear Button Logic
//// ==============================

// When clear button is clicked, reset search
clearButton.addEventListener("click", clearFilter);

/**
 * Clears the search field and resets recipe list
 */
function clearFilter() {
    searchInputElem.value = "";
    filterRecipe();
}

//// ==============================
//// Recipe Toggle (Show/Hide Instructions)
//// ==============================

// Attach click listener to container (event delegation)
recipesContainer.addEventListener("click", showRecipe);

/**
 * Handles showing/hiding recipe details when user clicks
 */
function showRecipe(e) {
    const target = e.target;

    // If clicked directly on <h3> (title), toggle instructions
    if (target.tagName === "H3") {
        target.parentElement.nextElementSibling.classList.toggle("show");

    // If clicked on header <div>, trigger same toggle via <h3>
    } else if (
        target.tagName === "DIV" &&
        target.className === "recipe-header"
    ) {
        target.children[0].click();

    // Ignore clicks elsewhere
    } else {
        return;
    }
}

//// ==============================
//// App Entry Point
//// ==============================

// Initialize app
init();
