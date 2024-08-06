import Book from "./ebook";
import Library from "./library";
import User from "./user";
const library = new Library();
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 218);
const book2 = new Book(2, '1984', 'George Orwell', 328);
library.addItems(book1);
library.addItems(book2);
console.log('Livros na biblioteca:');
library.listItems();
const user = new User('John Doe');
const borrowedBook = library.borrowItem(1);
if (borrowedBook) {
    console.log(`\n${user.name} emprestou:`);
    user.borrowItem(borrowedBook);
    user.listBorrowedItems();
    user.returnItem(borrowedBook);
    library.returnItems(borrowedBook);
    console.log(`\n${user.name} devolveu o livro.`);
}
console.log('\nLivros na biblioteca após devolução:');
library.listItems();
