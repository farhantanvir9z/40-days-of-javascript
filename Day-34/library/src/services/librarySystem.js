export class LibrarySystem {
  #books;
  constructor() {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    this.#books = storedBooks;
  }
  addBook(book) {
    this.#books.push(book);
    localStorage.setItem("books", JSON.stringify(this.#books));
  }
  getAvailableBooks() {
    return this.#books.filter(book => book.isAvailable);
  }
  getAllBooks() {
    return this.#books;
  }
  getBookById(id) {
    return this.#books.find(book => book.id === id)
  }
  
}