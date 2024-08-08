// Classe CauculoSistema
// Extende a classe CaucularEnergia para realizar cálculos mais complexos, ajustando o resultado pelo valor de cauculo
import CaucularEnergia from "./caucular";

export default class CauculoSistema extends CaucularEnergia {
    cauculo: number;

    constructor(preco: number, tarifa: number, cauculo: number) {
        super(preco, tarifa);
        this.cauculo = cauculo;
    }

    // Método para calcular a energia ajustada pelo valor de cauculo
    calcularEnergia(): number {
        return super.calcularEnergia() / this.cauculo;
    }
}