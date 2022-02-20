import CupomDesconto from "../../domain/CupomDesconto"
import Pedido from "../../domain/Pedido"

test("Não deve fazer um pedido com cpf inválido", () => {
    try{
        new Pedido("1234567899")
        fail("erro....")
    }catch(error: any){
        expect(error.message).toEqual("Pedido não pode ser realizado, pq o CPF é invalido.")
    }
})

test("Deve fazer um pedido com cpf valido", () => {
    try{
        new Pedido("355.203.280-05")
    }catch(error: any){
        fail("erro....")
    }
})

test("Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)", () => {
    const pedido = new Pedido("355.203.280-05");
    pedido.addItem("123-ASGRTO-789", 1500, 2)
    pedido.addItem("79845132-DSDUASYDKKN-879", 500, 1)
    pedido.addItem("789-ARSGSHDJDY-456", 100, 1)

    expect(3600).toEqual(pedido.getTotal());
})

test("Total do pedido deve ser zero quando não tem item", () => {
    const pedido = new Pedido("355.203.280-05");
    expect(0).toEqual(pedido.getTotal());
})

test("Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)", () => {
    const cupom = new CupomDesconto(10)
    const pedido = new Pedido("355.203.280-05");
    pedido.addItem("852-GSTRUDJSHAST-741", 2000, 2)
    pedido.addItem("79845132-DSDUASYDKKN-879", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(4500).toEqual(pedido.getTotal());
})

test("Não deve aplicar cupom de desconto expirado", () => {
    const cupom = new CupomDesconto(10, new Date(Date.now() - 100000))
    const pedido = new Pedido("355.203.280-05");
    pedido.addItem("852-GSTRUDJSHAST-741", 2000, 2)
    pedido.addItem("79845132-DSDUASYDKKN-879", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(5000).toEqual(pedido.getTotal());
})


test("Deve aplicar cupom de desconto quando a data de expiração é maior que a data atual", () => {
    const cupom = new CupomDesconto(10, new Date(Date.now() + 100000))
    const pedido = new Pedido("355.203.280-05");
    pedido.addItem("852-GSTRUDJSHAST-741", 2000, 2)
    pedido.addItem("79845132-DSDUASYDKKN-879", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(4500).toEqual(pedido.getTotal());
})