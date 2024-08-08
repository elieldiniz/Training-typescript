// Classe CaucularEnergia
// Implementa a interface Energia para realizar cálculos básicos de energia
import Energia from "./energia";

export default class CaucularEnergia implements Energia {
    preco: number;
    tarifa: number;

    constructor(preco: number, tarifa: number) {
        this.preco = preco;
        this.tarifa = tarifa;
    }

    // Método para calcular a energia
    calcularEnergia(): number {
        const caucula = this.preco / this.tarifa;
        return caucula;
    }
}