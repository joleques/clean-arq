import Peso from "../../src/domain/Peso"


test("Calcular densidade do peso quando passar o volume", () => {
    const peso = new Peso(1)
    const volume = 0.003
    expect(333).toEqual(peso.calcularDensidade(volume))
})