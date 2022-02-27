import Pedido from "../../domain/Pedido";
import PedidoRepositorio from "../../domain/PedidoRepositorio";
import PedidoDTO from "../dto/PedidoDTO";
import ResultadoPedido from "../dto/ResultadoPedido";
import PedidoDTOConverter from "../service/PedidoDTOConverter";

export default class RealizacaoPedido{

    private pedidoRepositorio: PedidoRepositorio
    private pedidoDTOConverter: PedidoDTOConverter;

    constructor(pedidoRepositorio: PedidoRepositorio, pedidoDTOConverter: PedidoDTOConverter){
        this.pedidoRepositorio = pedidoRepositorio;
        this.pedidoDTOConverter = pedidoDTOConverter;
    }

    fazer(pedidoDTO: PedidoDTO): ResultadoPedido {
        const pedido = this.pedidoDTOConverter.convert(pedidoDTO);
        this.pedidoRepositorio.salvar(pedido);
        return new ResultadoPedido("Pedido realizado com sucesso!", pedido.getIdPedido());
    }

}