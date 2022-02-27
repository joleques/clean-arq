import Pedido from "./Pedido";

export default interface PedidoRepositorio{

    salvar(pedido: Pedido): Pedido
}