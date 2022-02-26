
export default class CupomDesconto {


    constructor(readonly percentual: number,readonly dataExpiracao?: Date) {
    }

    public aplicarDesconto(valor: number, date: Date): number {
        if (date && this.estaExpirado(date))
            return valor
        return valor - (valor * this.getPercentual())
    }

    public estaExpirado(date: Date): boolean{
        if (this.dataExpiracao && (date.getTime() > this.dataExpiracao.getTime()))
            return true
        return false
    }

    private getPercentual(): number {
        return this.percentual / 100
    }
}