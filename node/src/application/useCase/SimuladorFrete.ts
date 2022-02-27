import Pedido from "../../domain/Pedido";
import PedidoDTO from "../dto/PedidoDTO";
import ResultadoSimulacao from "../dto/ResultadoSimulacao";
import PedidoDTOConverter from "../service/PedidoDTOConverter";

export default class SimulacaoFrete{

    private conversor: PedidoDTOConverter;

    constructor(conversor: PedidoDTOConverter){
        this.conversor = conversor;
    }

    public simular(pedidoDTO: PedidoDTO): ResultadoSimulacao{
        const pedido: Pedido = this.conversor.convert(pedidoDTO);
        return new ResultadoSimulacao(pedido.getValorFrete());
    }
}