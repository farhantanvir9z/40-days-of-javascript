console.log("Javascript is loaded successfully...");
// access the tabs menu
const navBar = document.querySelector(".tab-headers");

function switchToTab(tabNumber) {
    // select all the button in navBar then remove the class `active` from the buttons.
    const arrayOfNavBarChildren = [...navBar.children];
    arrayOfNavBarChildren.forEach(elem => {
        elem.classList.remove("active");
    });
    // Adding the class `active` to the current button that is clicked currently.
    const currentTab = document.querySelector(`[data-tab="${tabNumber}"]`);
    currentTab.classList.add("active");

    // adding the class `active` to the current button's correspondent page
    const tabContent = document.querySelector(".tab-contents");
    const contents = tabContent.querySelectorAll(".content");
    contents.forEach(elem => {
        elem.classList.remove("active");
        if (elem.getAttribute("data-tab") === tabNumber) {
            elem.classList.add("active");
        }
    });
}

navBar.addEventListener("click", (event) => {
    const target = event.target;
    tabNumber = target.getAttribute("data-tab");
    switchToTab(tabNumber);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
        switchToTab("1");
        document.querySelector('[data-tab="1"]').focus();
    }
    if (e.key === "2") {
        switchToTab("2");
        document.querySelector('[data-tab="2"]').focus();
    }
    if (e.key === "3") {
        switchToTab("3");
        document.querySelector('[data-tab="3"]').focus();
    }
});