import Dimensao from "./Dimensao"
import Peso from "./Peso";

export default class Produto{

    constructor(readonly id: string, readonly description: string, readonly dimensao: Dimensao, readonly peso: Peso){}

    public getIndiceCalculoFrete() :number{
        const volume = this.dimensao.getVolume();
        const densidade = this.peso.calcularDensidade(volume) 
        return volume * (densidade / 100)
    }
}