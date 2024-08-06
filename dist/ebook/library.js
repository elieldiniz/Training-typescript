"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    constructor() {
        this.items = [];
    }
    addItems(items) {
        this.items.push(items);
    }
    borrowItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return undefined;
    }
    returnItems(item) {
        this.items.push(item);
    }
    listItems() {
        this.items.forEach(item => console.log(item.getInfo));
    }
}
exports.default = Library;
