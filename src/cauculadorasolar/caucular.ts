import Energia from "./energia";

export default class CaucularEnergia implements Energia {
    preco: number
    tarifa: number

    constructor(preco: number, tarifa: number) {
        this.preco = preco
        this.tarifa = tarifa
    }

    calcularEnergia(): number {
        const caucula = this.preco / this.tarifa
        return caucula
    }

}