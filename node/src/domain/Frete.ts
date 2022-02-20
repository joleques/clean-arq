import Produto from "./Produto"

export default class Frete{

    private distancia: number

    private produtos: Produto[]

    constructor(){
        this.distancia = 1000
        this.produtos = []
    }

    public addProdutos(produto: Produto){
        this.produtos.push(produto)
    }

    public getValor(): number{
        let valor = 0
        this.produtos.forEach((produto) => {
            valor += this.distancia * produto.getIndiceCalculoFrete()
        })
        return valor < 10 ? 10.00 : valor
    }
}