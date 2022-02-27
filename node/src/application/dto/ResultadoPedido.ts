
export default class ResultadoPedido{

    constructor(readonly mensagem: string, readonly idPedido: string | undefined){}

    public getMensagem() : string{
        return this.mensagem
    }

    public getIdPedido(): string | undefined{
        return this.idPedido
    }
}