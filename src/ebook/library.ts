import Item from "./items";

export default class Library<T extends Item>{
    private items: T[] = []

    addItems(items: T):void {
        this.items.push(items)
    }

    borrowItem(id: number): T |undefined{
        const index = this.items.findIndex(item => item.id === id)
        if(index !== -1){
            return this.items.splice(index, 1)[0]
        }

        return undefined
    }

    returnItems(item: T){
        this.items.push(item)
    }

    listItems(): void {
        this.items.forEach(item => console.log(item.getInfo))
    }
}