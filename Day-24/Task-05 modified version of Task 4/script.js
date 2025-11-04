// Select the container where user info cards will be displayed
const userContainerElem = document.querySelector(".container");

async function fetchUserData() {
  // Fetch a single user's data from API
  const URL = "https://jsonplaceholder.typicode.com/users/1";
  
  try {
  const user = await fetch(URL).then((response) => {
    if (!response.ok) {
        return;
      } else {
        return response.json()
      }
  });
      
       displayUserData(user)
    }
   catch (error) {
     displayError(`Oops! Could not load user info. (${error.message})`);

     console.error(error)
  }

}
function displayUserData(user) {
  if (!user) {
    console.log("no data found")
    return
  } else {
    console.log(user);
    
  // 1️⃣ Destructure user object for cleaner access
  const {
    name = "unknown",
    email = "unspecified" ,
    address: { street = "", suite = "", city = "" }
  } = user;

  // 2️⃣ Clone the <template> content (deep clone)
  const userCardTemplate = document
    .querySelector(".user-card-template")
    .content.cloneNode(true);

  // 3️⃣ Select elements inside the cloned template
  const userNameElem = userCardTemplate.querySelector(".user-name");
  const userEmailElem = userCardTemplate.querySelector(".user-email");
  const userAddressElem = userCardTemplate.querySelector(".user-address");

  // 4️⃣ Fill in user data
  userNameElem.textContent = name;
  userEmailElem.textContent = email;
  userAddressElem.textContent = `${suite} ${street}, ${city}`;


  // creating a wrapper for userName, userEmail, userAddress
   const userCard = document.createElement("div");
   userCard.classList.add("user-card");
   
   // Appending the userName, userEmail, userAddress into the wrapper
   userCard.appendChild(userNameElem);
   userCard.appendChild(userEmailElem);
   userCard.appendChild(userAddressElem);
   
  // 5️⃣ Append the filled userCard to the container
  userContainerElem.appendChild(userCard);
  }
}

function displayError(message) {
  
  const errorMessageDisplayerElem = document.createElement("p");
  
    errorMessageDisplayerElem.classList.add("error");
  
    errorMessageDisplayerElem.innerText = message;
  
    userContainerElem.appendChild(errorMessageDisplayerElem);
}
// 🔄 Fetch and display user info
fetchUserData();
