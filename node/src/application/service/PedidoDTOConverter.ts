import Dimensao from "../../domain/Dimensao";
import Pedido from "../../domain/Pedido";
import Peso from "../../domain/Peso";
import PedidoDTO from "../dto/PedidoDTO";

export default class PedidoDTOConverter{

    public convert(pedidoDTO: PedidoDTO): Pedido{
        const pedido = new Pedido(pedidoDTO.cpf ? pedidoDTO.cpf : "", pedidoDTO.data ? pedidoDTO.data : new Date());
        pedidoDTO.getItens().forEach(item => {
            if (item.descricao && item.valor && item.quantidade){
                let dimensao = undefined;
                if (item.altura && item.largura && item.profundidade)
                    dimensao = new Dimensao(item.altura, item.largura, item.profundidade);
                
                let peso = undefined;
                if (item.peso)
                    peso = new Peso(item.peso)

                pedido.addItem(item.descricao, item.valor, item.quantidade, dimensao, peso);
            }
                
        })
        return pedido;
    }
}