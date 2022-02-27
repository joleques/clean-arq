import Produto from "./Produto"

export default class Frete{

    private distancia: number

    private valor: number;

    constructor(){
        this.distancia = 1000
        this.valor = 0
    }

    public addProdutos(produto: Produto, quantidade?: number){
        if (!quantidade) quantidade = 1
        if (produto)
            this.valor += (this.distancia * produto.getIndiceCalculoFrete()) * quantidade
        
    }

    public getValor(): number{
        return this.valor > 0 && this.valor < 10 ? 10.00 : parseFloat(this.valor.toFixed(2))
    }
}