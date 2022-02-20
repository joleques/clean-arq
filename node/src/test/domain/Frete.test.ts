import Dimensao from "../../domain/Dimensao"
import Frete from "../../domain/Frete"
import Peso from "../../domain/Peso"
import Produto from "../../domain/Produto"


test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", () => {
    const frete = new Frete()
    const camera = new Produto("2323-AFSRDHDKDL-456", "Camera", new Dimensao(20,15,10), new Peso(1))
    const guitarra = new Produto("8965-ASDFGHHJK-785", "Guitarra", new Dimensao(100,30,10), new Peso(3))
    frete.addProdutos(camera)
    frete.addProdutos(guitarra)

    expect(39.99).toEqual(frete.getValor())
})

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado" , () => {
    const frete = new Frete()
    const camera = new Produto("2323-AFSRDHDKDL-456", "Camera", new Dimensao(20,15,10), new Peso(1))
    frete.addProdutos(camera)

    expect(10.00).toEqual(frete.getValor())
})