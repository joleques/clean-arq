import CupomDesconto from "../../../src/domain/CupomDesconto"


test("Criar cupom desconto expirado", () =>{
    const cupom = new CupomDesconto(20, new Date("2022-02-12"))

    expect(true).toEqual(cupom.estaExpirado(new Date()))

})

test("Aplicar desconto de 20%", () =>{
    const cupom = new CupomDesconto(20, new Date(Date.now() + 1000))

    expect(800).toEqual(cupom.aplicarDesconto(1000, new Date()))

})