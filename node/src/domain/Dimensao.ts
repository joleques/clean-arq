
export default class Dimensao{

    constructor(readonly altura: number, readonly largura: number, readonly profundidade: number){}

    public getVolume(){
        const alturaEmMetros = this.converterMetros(this.altura)
        const larguraEmMetros = this.converterMetros(this.largura)
        const profundidadeEmMetros = this.converterMetros(this.profundidade)
        return (alturaEmMetros * larguraEmMetros * profundidadeEmMetros)
    }

    private converterMetros(valor: number): number{
        return valor/100
    }
}