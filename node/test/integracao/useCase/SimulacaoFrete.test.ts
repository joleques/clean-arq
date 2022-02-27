import ItemDTO from "../../../src/application/dto/ItemDTO";
import PedidoDTO from "../../../src/application/dto/PedidoDTO";
import ResultadoSimulacao from "../../../src/application/dto/ResultadoSimulacao";
import PedidoDTOConverter from "../../../src/application/service/PedidoDTOConverter";
import SimulacaoFrete from "../../../src/application/useCase/SimuladorFrete";


test("Deve simular o frete", () =>{
    const pedido = new PedidoDTO();
    pedido.cpf = "355.203.280-05"
    const camera = new ItemDTO()
    camera.descricao = "Camera"
    camera.valor = 2000
    camera.quantidade = 2
    camera.altura=20
    camera.largura=15
    camera.profundidade=10
    camera.peso = 1


    const guitarra = new ItemDTO()
    guitarra.descricao = "Guitarra"
    guitarra.valor = 1000
    guitarra.quantidade = 1
    guitarra.altura=100
    guitarra.largura=30
    guitarra.profundidade=10
    guitarra.peso = 3

    pedido.itens = [camera, guitarra]

    const conversor: PedidoDTOConverter = new PedidoDTOConverter()
    const simulacaoFrete = new SimulacaoFrete(conversor)

    const resultadoSimulacao: ResultadoSimulacao = simulacaoFrete.simular(pedido);

    expect(resultadoSimulacao.getValor()).toEqual(49.98)

})
