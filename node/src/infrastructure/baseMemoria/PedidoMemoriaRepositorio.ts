import Pedido from "../../domain/Pedido";
import PedidoRepositorio from "../../domain/PedidoRepositorio";

export default class PedidoMemoriaRepositorio implements PedidoRepositorio{

    private pedidos: Array<Pedido>

    constructor(){
        this.pedidos = []
    }

    salvar(pedido: Pedido): Pedido {
        pedido.gerarId(this.pedidos.length)
        this.pedidos.push(pedido)
        return pedido
    }

}