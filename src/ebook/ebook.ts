import Item from "./items"

export default class Book extends Item {
    constructor(id: number, title: string, public author: string, public pages: number ){
        super(id, title)
    }

    getInfo(): string{
        return`${super.getInfo()}, Author: ${this.author}, Page: ${this.pages}`
    }
}