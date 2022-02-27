import ItemDTO from "./ItemDTO";

export default class PedidoDTO{
    public cpf: string | undefined;
    public data: Date | undefined;
    public itens: Array<ItemDTO> | undefined;

    constructor(cpf?: string, data?: Date, itens?: Array<ItemDTO>){
        this.cpf = cpf
        this.data = data
        this.itens = itens
    }

    getItens(): Array<ItemDTO>{
        if (this.itens)
            return this.itens
        
        return []
    }

}