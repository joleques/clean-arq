import ItemDTO from "../../../src/application/dto/ItemDTO";
import PedidoDTO from "../../../src/application/dto/PedidoDTO";
import ResultadoPedido from "../../../src/application/dto/ResultadoPedido";
import PedidoDTOConverter from "../../../src/application/service/PedidoDTOConverter";
import RealizacaoPedido from "../../../src/application/useCase/RealizadorPedido"
import PedidoMemoriaRepositorio from "../../../src/infrastructure/baseMemoria/PedidoMemoriaRepositorio";

test("Pedido realizado com sucesso", () =>{
    const baseMemoria = new PedidoMemoriaRepositorio();
    const convesor = new PedidoDTOConverter();
    const realizacaoPedido = new RealizacaoPedido(baseMemoria, convesor);
    const pedido = new PedidoDTO();
    pedido.cpf = "355.203.280-05"
    const item = new ItemDTO()
    item.descricao = "Guitarra"
    item.quantidade = 1
    item.valor = 30
    pedido.itens = []
    pedido.itens.push(item)

    const resultadoPedido: ResultadoPedido = realizacaoPedido.fazer(pedido);

    expect(resultadoPedido.getMensagem()).toEqual("Pedido realizado com sucesso!")
    expect(resultadoPedido.getIdPedido()).toEqual("20221")
})