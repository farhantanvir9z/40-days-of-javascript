import { users, createUser, fetchUser, userContainer } from "./api.js";

function renderDom() {
    const fetchElem = userContainer.querySelector(".fetch");
    userContainer.removeChild(fetchElem);
    users.forEach(user => {
        createUser(user);
    });
}

fetchUser();

setTimeout(renderDom, 3000);
