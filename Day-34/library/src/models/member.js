import { User } from "./user.js";

const borrowedBookMap = new WeakMap();

export class Member extends User {
    constructor(name, email) {
        super(name, email);
        const borrowedBookFromLocalStorage =
            JSON.parse(localStorage.getItem("borrowedBook")) || [];
        borrowedBookMap.set(this, borrowedBookFromLocalStorage);
    }
    
    getRole() {
        return "member";
    }
    
    borrowBook(book) {
        const borrowed = borrowedBookMap.get(this);
        borrowed.push(book);
        book.isAvailable = false;
        const storedBookArr = JSON.parse(localStorage.getItem("books"));
      const targetedStoredBook = storedBookArr?.find((bookItem) => {
        return bookItem.id === book.id 
      });
      targetedStoredBook.isAvailable = false;
      localStorage.setItem("books", JSON.stringify(storedBookArr));
        localStorage.setItem("borrowedBook", JSON.stringify(borrowed));
    }
    
    getBorrowedBook() {
        return borrowedBookMap.get(this);
    }
    
    returnBook(book) {
      const borrowed = borrowedBookMap.get(this);
      const targetBookIndex = borrowed.findIndex((bookItem) => {
        return bookItem.id === book.id;
      });
      
      const storedBookArr = JSON.parse(localStorage.getItem("books"));
      const targetedStoredBook = storedBookArr?.find((bookItem) => {
        return bookItem.id === book.id 
      });
      targetedStoredBook.isAvailable = true;
      localStorage.setItem("books", JSON.stringify(storedBookArr));
      
      book.isAvailable = true;
      borrowed.splice(targetBookIndex, 1);
      localStorage.setItem("borrowedBook", JSON.stringify(borrowed));
    }
}
