import CPF from "./CPF";
import CupomDesconto from "./CupomDesconto";
import Dimensao from "./Dimensao";
import Frete from "./Frete";
import ItemPedido from "./ItemPedido";
import Peso from "./Peso";
import Produto from "./Produto";

export default class Pedido {

    private id: string | undefined

    private cpf: CPF;

    private itens: ItemPedido[]

    private cupomDesconto: CupomDesconto

    private date: Date

    private frete: Frete

    constructor(cpf: string, date: Date) {
        this.cpf = new CPF(cpf);
        this.itens = []
        this.cupomDesconto = new CupomDesconto(0)
        this.date = date
        this.frete = new Frete()
        this.validate();
    }

    private validate() {
        if (!this.cpf.validate())
            throw new Error("Pedido não pode ser realizado, pq o CPF é invalido.")
    }

    public addItem(descricao: string, valor: number, quantidade: number, dimensao?: Dimensao, peso?: Peso) {
        this.frete.addProdutos(new Produto("", descricao, valor, dimensao, peso), quantidade)
        this.itens.push(new ItemPedido(descricao, valor, quantidade, dimensao, peso))
    }

    public addCupomDesconto(cupomDesconto: CupomDesconto) {
        this.cupomDesconto = cupomDesconto
    }

    public getTotal() {
        let total = 0
        this.itens.forEach((itemPedido) => {
            total += itemPedido.getTotal()
        })

        total += this.getValorFrete()

        if (this.cupomDesconto)
            return this.cupomDesconto.aplicarDesconto(total, this.date)


        return total
    }

    public getValorFrete() : number{
        return this.frete.getValor();
    }

    public gerarId(quantidadePedidos: number): string {
        if (!this.id) {
            this.id = new Date().getUTCFullYear().toString() + (quantidadePedidos + 1)
        }
        return this.id
    }

    public getIdPedido(): string | undefined{
        return this.id
    }
}