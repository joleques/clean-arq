import CPF from "./CPF";
import CupomDesconto from "./CupomDesconto";
import ItemPedido from "./ItemPedido";

export default class Pedido{
    
    private cpf: CPF;

    private itens: ItemPedido[]

    private cupomDesconto: CupomDesconto

    constructor(cpf: string){
        this.cpf = new CPF(cpf);
        this.itens = []
        this.cupomDesconto = new CupomDesconto(0)
        this.validate();
    }

    private validate(){
        if (!this.cpf.validate())
            throw new Error("Pedido não pode ser realizado, pq o CPF é invalido.")
    }

    public addItem(codigoProduto: string, valor: number, quantidade: number){
        this.itens.push(new ItemPedido(codigoProduto, valor, quantidade))
    }

    public addCupomDesconto(cupomDesconto: CupomDesconto){
        this.cupomDesconto = cupomDesconto
    }

    public getTotal(){
        let total = 0
        this.itens.forEach((itemPedido)=>{
            total += itemPedido.getTotal()
        })

        if (this.cupomDesconto)
            return this.cupomDesconto.aplicarDesconto(total)

        return total
    }
}