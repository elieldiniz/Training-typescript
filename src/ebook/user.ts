import Item from "./items";

export default class User {
    public borrowedItems: Item[] = [];

    constructor(public name: string) {}

    borrowItem(item: Item): void {
        this.borrowedItems.push(item);
    }

    returnItem(item: Item): void {
        const index = this.borrowedItems.findIndex(borrowedItem => borrowedItem.id === item.id);
        if (index !== -1) {
            this.borrowedItems.splice(index, 1);
        }
    }

    listBorrowedItems(): void {
        this.borrowedItems.forEach(item => console.log(item.getInfo()));
    }
}
