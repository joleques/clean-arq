
export default class Peso{

    constructor(readonly valor: number){}

    public calcularDensidade(volume: number){
        return parseFloat((this.valor / volume).toFixed(0))
    }
}