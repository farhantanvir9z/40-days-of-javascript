import { Admin } from "./models/admin.js"
import { Member } from "./models/member.js"
import { Book } from "./models/book.js"
import { LibrarySystem } from "./services/librarySystem.js"

const userSwichSection = document.querySelector("#switch-user");

const addBookSection = document.querySelector("#addBookSec");

const bookForm = document.querySelector("#bookForm");

const availableBooksUl = document.querySelector("#availableBooks");

const borrowedBookSec = document.querySelector("#borrowedBookSec");

const borrowedBooksUl = document.querySelector("#borrowedBooks");

let currentUser = new Member("gag", "hahs@ksks.com");

const library = new LibrarySystem();


function switchUser(currentUser) {
  const role = currentUser.getRole();
  addBookSection.style.display = isAdmin() ? "block" : "none";
  borrowedBookSec.style.display = isAdmin()  ? "none" : "block";
  renderBooks();
  renderBorrowedBooks();
}

function renderBooks() {
  availableBooksUl.innerHTML = "";
  const availableBooks = library.getAvailableBooks();
  let control = "";
  availableBooks.forEach((book) => {
    const li = document.createElement("li");
    li.className = "bg-white p-3 flex justify-between items-center shadow"
    if (isMember() && book.isAvailable) {
      control = `<button class="px-3 py-2 text-white bg-green-500 rounded" data-action="borrow" data-id="${book.id}">Borrow<button>`
    } else if (isAdmin()) {
     control = `<span>${book.isAvailable ? "Available" : "Borrowed"}</span>`
    }
    li.innerHTML = `
    <div class="flex w-[60%] justify-evenly items-center">
    <strong>${book.title}</strong> 
    by 
    ${book.author} 
    <em>(${book.genre})</em> 
    </div>
    ${control}
    `
    availableBooksUl.appendChild(li);
  });
}

function renderBorrowedBooks() {
  borrowedBooksUl.innerHTML = "";
  
  if (isAdmin()) return;
  const borrowedBooks = currentUser.getBorrowedBook();
  let control = "";
  borrowedBooks.forEach((book) => {
    const li = document.createElement("li");
    control = `<button class="px-3 py-2 text-white bg-red-500 rounded" data-action="returnBook" data-id="${book.id}">Return</button>`;
    li.className = "bg-white p-3 flex justify-between items-center shadow";
    li.innerHTML = `
    <div class="flex w-[60%] justify-evenly items-center">
    <strong>${book.title}</strong> 
    by 
    ${book.author} 
    <em>(${book.genre})</em> 
    </div>
    ${control}
    `
    borrowedBooksUl.appendChild(li);
  })
}

function isAdmin() {
  return currentUser.getRole() === "admin";
}
function isMember() {
  return currentUser.getRole() === "member";
}

switchUser(currentUser);

userSwichSection.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  currentUser = (selectedValue === "admin") ? new Admin("Tapas", "tapas@email.com") : new Member("gag", "hahs@ksks.com");
  switchUser(currentUser)
})

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const genre = document.querySelector("#genre").value;
  
  const book = new Book(title, author, genre);
  library.addBook(book);
  renderBooks();
  bookForm.reset();
})

availableBooksUl.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "BUTTON") {
    const action = target.getAttribute("data-action");
    const id = target.getAttribute("data-id");
    const book = library.getBookById(id);
    console.log(book); 
    if (action === "borrow" && currentUser.getRole() === "member" && book.isAvailable) {
      currentUser.borrowBook(book);
      renderBooks();
      renderBorrowedBooks();
    }
  }
})

borrowedBooksUl.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "BUTTON") {
    const action = target.getAttribute("data-action");
    const id = target.getAttribute("data-id");
    const book = library.getBookById(id);
    console.log(book); 
    if (action === "returnBook" && isMember()) {
      currentUser.returnBook(book);
      renderBooks();
      renderBorrowedBooks();
    }
  }
})

// problem: when the borrowedBooks's isAvailable property updates, the books   isAvailable property does not update;
// TODO: update both borrowedBooks's isAvailable property & books   isAvailable property