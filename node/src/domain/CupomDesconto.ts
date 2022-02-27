
export default class CupomDesconto {

    private id: string;

    constructor(readonly percentual: number,readonly dataExpiracao?: Date) {
        this.id = "VALE" + percentual
    }

    public aplicarDesconto(valor: number, date: Date | undefined): number {
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

    public getId(): string{
        return this.id;
    }
}