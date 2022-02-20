import Item from "./Item";

export default class ItemPedido{

    private item: Item

    constructor(codigoProduto: string, valor: number, readonly quantidade: number){
        this.item = new Item(codigoProduto, valor)
    }

    public getTotal(): number{
        return this.item.valor * this.quantidade
    }
    
}