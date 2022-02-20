import Dimensao from "../../src/domain/Dimensao"
import Peso from "../../src/domain/Peso"
import Produto from "../../src/domain/Produto"

test("Deve calcular o indice de calculo para o frete com base no volume e densidade", () => {

    const produto = new Produto("2323-AFSRDHDKDL-456", "Camera", new Dimensao(20,15,10), new Peso(1)) 

    expect(0.00999).toEqual(produto.getIndiceCalculoFrete())
})