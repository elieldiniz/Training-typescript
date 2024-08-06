"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getInfo() {
        return `ID: ${this.id}, title: ${this.title}`;
    }
}
exports.default = Item;
