import CauculoSistema from "./cauculodesistema";



// Instancia a classe CauculoSistema com valores de preço, tarifa e cauculo
const cauculo = new CauculoSistema(700, 0.80, 117)
 // Caucula Kwh de acordo com a tarifa do estado e gasto de energia mensal//
 


console.log(cauculo.calcularEnergia())
