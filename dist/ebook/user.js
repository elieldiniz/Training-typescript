"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
        this.borrowedItems = [];
    }
    borrowItem(item) {
        this.borrowedItems.push(item);
    }
    returnItem(item) {
        const index = this.borrowedItems.findIndex(borrowedItem => borrowedItem.id === item.id);
        if (index !== -1) {
            this.borrowedItems.splice(index, 1);
        }
    }
    listBorrowedItems() {
        this.borrowedItems.forEach(item => console.log(item.getInfo()));
    }
}
exports.default = User;
