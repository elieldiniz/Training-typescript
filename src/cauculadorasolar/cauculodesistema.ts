import CaucularEnergia from "./caucular";

export default class CauculoSistema extends  CaucularEnergia {
    cauculo: number

    constructor(preco: number, tarifa: number, cauculo: number){
        super(preco, tarifa)
        this.cauculo = cauculo
    }

    calcularEnergia(): number {
        return  super.calcularEnergia() / this.cauculo
    }
}