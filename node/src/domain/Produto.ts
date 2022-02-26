import Dimensao from "./Dimensao"
import Peso from "./Peso";

export default class Produto{

    constructor(readonly id: string, readonly description: string, readonly valor: number, readonly dimensao?: Dimensao, readonly peso?: Peso){}

    public getIndiceCalculoFrete() :number{
        const volume = this.dimensao ? this.dimensao.getVolume(): 0;
        const densidade = this.peso ? this.peso.calcularDensidade(volume) : 0
        return volume * (densidade / 100)
    }
}