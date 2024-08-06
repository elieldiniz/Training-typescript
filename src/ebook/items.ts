

export default class Item{
    

    constructor(public id: number, public title: string){

    }

    getInfo(): string {
        return`ID: ${this.id }, title: ${this.title}`
    }
    
}