
export default class CupomDesconto {


    constructor(readonly percentual: number,readonly dataExpiracao?: Date) {
    }

    public aplicarDesconto(valor: number): number {
        if (this.cupomExpirado())
            return valor
        return valor - (valor * this.getPercentual())
    }

    private cupomExpirado(): boolean{
        if (this.dataExpiracao && (new Date().getTime() > this.dataExpiracao.getTime()))
            return true
        return false
    }

    private getPercentual(): number {
        return this.percentual / 100
    }
}