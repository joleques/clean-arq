import Dimensao from "../../domain/Dimensao";

test("Deve retornar o volume da dimensao", () => {
    const dimensao = new Dimensao(20,15,10);

    expect(0.003).toEqual(dimensao.getVolume())
})