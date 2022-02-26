import Dimensao from "./Dimensao";
import Peso from "./Peso";
import Produto from "./Produto";

export default class ItemPedido{

    private produto: Produto;

    constructor(descricao: string, valor: number, readonly quantidade: number, readonly dimensao?: Dimensao, readonly peso?: Peso){
        this.produto = new Produto("", descricao, valor, dimensao, peso)
    }

    public getTotal(): number{
        return this.produto.valor * this.quantidade
    }
    
}