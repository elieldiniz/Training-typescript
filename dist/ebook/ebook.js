"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
class Book extends items_1.default {
    constructor(id, title, author, pages) {
        super(id, title);
        this.author = author;
        this.pages = pages;
    }
    getInfo() {
        return `${super.getInfo()}, Author: ${this.author}, Page: ${this.pages}`;
    }
}
exports.default = Book;
