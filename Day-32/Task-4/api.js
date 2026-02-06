const users = [
    {
        name: "Arafat Hossain",
        email: "arafat.hossain@email.com",
        address: "12 no road, Dhanmondi, Dhaka"
    },
    {
        name: "Nusrat Jahan",
        email: "nusrat.jahan@email.com",
        address: "45 lake view, Gulshan 2, Dhaka"
    },
    {
        name: "Rafiul Islam",
        email: "rafiul.islam@email.com",
        address: "8 block C, Mirpur 10, Dhaka"
    },
    {
        name: "Sabbir Ahmed",
        email: "sabbir.ahmed@email.com",
        address: "22 main road, Chawkbazar, Chattogram"
    },
    {
        name: "Tahmina Akter",
        email: "tahmina.akter@email.com",
        address: "19 station road, Rajshahi"
    }
];

const userContainer = document.querySelector(".userContainer");

function createUser(user) {
    const templateCard = document
        .querySelector(".userCardTemp")
        .content.cloneNode(true);

    const userNameElem = templateCard.querySelector(".userName");

    const userEmailElem = templateCard.querySelector(".email");

    const userAddressElem = templateCard.querySelector(".userAddress");

    userNameElem.innerText = user.name;
    userEmailElem.innerText = user.email;
    userAddressElem.innerText = user.address;

    const wrapper = document.createElement("div");

    wrapper.classList.add("userCard");

    wrapper.appendChild(templateCard);

    userContainer.appendChild(wrapper);
}

function fetchUser() {
    const pElem = document.createElement("p");
    pElem.classList.add("fetch");
    pElem.innerText = "Fetching Users....";
    userContainer.appendChild(pElem);
}

export { users, createUser, fetchUser, userContainer };
