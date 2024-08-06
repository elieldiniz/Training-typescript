"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ebook_1 = require("./ebook/ebook");
const library_1 = require("./ebook/library");
const user_1 = require("./ebook/user");
const library = new library_1.default();
const book1 = new ebook_1.default(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 218);
const book2 = new ebook_1.default(2, '1984', 'George Orwell', 328);
library.addItems(book1);
library.addItems(book2);
console.log('Livros na biblioteca:');
library.listItems();
const user = new user_1.default('John Doe');
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
