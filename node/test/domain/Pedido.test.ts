import CupomDesconto from "../../src/domain/CupomDesconto"
import Dimensao from "../../src/domain/Dimensao"
import Pedido from "../../src/domain/Pedido"
import Peso from "../../src/domain/Peso"

test("Não deve fazer um pedido com cpf inválido", () => {
    try{
        const today = new Date()
        new Pedido("1234567899", today)
        fail("erro....")
    }catch(error: any){
        expect(error.message).toEqual("Pedido não pode ser realizado, pq o CPF é invalido.")
    }
})

test("Deve fazer um pedido com cpf valido", () => {
    try{
        const today = new Date()
        new Pedido("355.203.280-05", today)
    }catch(error: any){
        fail("erro....")
    }
})

test("Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)", () => {
    const today = new Date()
    const pedido = new Pedido("355.203.280-05", today);
    pedido.addItem("123-ASGRTO-789", 1500, 2)
    pedido.addItem("Guitarra", 500, 1)
    pedido.addItem("Geladeira", 100, 1)

    expect(3600).toEqual(pedido.getTotal());
})

test("Total do pedido deve ser zero quando não tem item", () => {
    const today = new Date()
    const pedido = new Pedido("355.203.280-05", today);
    expect(0).toEqual(pedido.getTotal());
})

test("Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)", () => {
    const today = new Date()
    const cupom = new CupomDesconto(10)
    const pedido = new Pedido("355.203.280-05", today);
    pedido.addItem("Camera", 2000, 2)
    pedido.addItem("Guitarra", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(4500).toEqual(pedido.getTotal());
})

test("Não deve aplicar cupom de desconto expirado", () => {
    const today = new Date()
    const cupom = new CupomDesconto(10, new Date(Date.now() - 100000))
    const pedido = new Pedido("355.203.280-05", today);
    pedido.addItem("Camera", 2000, 2)
    pedido.addItem("Guitarra", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(5000).toEqual(pedido.getTotal());
})


test("Deve aplicar cupom de desconto quando a data de expiração é maior que a data atual", () => {
    const today = new Date()
    const cupom = new CupomDesconto(10, new Date(Date.now() + 100000))
    const pedido = new Pedido("355.203.280-05", today);
    pedido.addItem("Camera", 2000, 2)
    pedido.addItem("Guitarra", 1000, 1)
    pedido.addCupomDesconto(cupom)

    expect(4500).toEqual(pedido.getTotal());
})


test("Deve calcular o total adicionando o frete com base pela dimensao e peso", () => {
    const today = new Date()
    const pedido = new Pedido("355.203.280-05", today);
    pedido.addItem("Camera", 2000, 2, new Dimensao(20,15,10), new Peso(1))
    pedido.addItem("Guitarra", 1000, 1, new Dimensao(100,30,10), new Peso(3))
    
    expect(5049.98).toEqual(pedido.getTotal());
})