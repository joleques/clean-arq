package service

import (
	"clean-arq-go/src/domain"
	"clean-arq-go/src/userCase/DTOs"
)

func Convert(pedidoDTO DTOs.PedidoDTO) (*domain.Pedido, error) {

	pedido, err := domain.NewPedido("355.203.280-05")
	if err != nil {
		return nil, err
	}

	for _, item := range pedidoDTO.Itens {
		dimensao := convertDimensao(item)
		peso := convertPeso(item)
		pedido.AddItem(item.Descricao, item.Valor, item.Quantidade, dimensao, peso)
	}

	return pedido, nil
}

func convertDimensao(item DTOs.ItemDTO) domain.Dimensao {
	if item.Largura != 0.0 && item.Altura != 0.0 && item.Profundidade != 0.0 {
		return domain.Dimensao{Altura: item.Altura, Largura: item.Largura, Profundidade: item.Profundidade}
	}
	return domain.Dimensao{}
}

func convertPeso(item DTOs.ItemDTO) domain.Peso {
	if item.Peso != 0.0 {
		return domain.Peso{Valor: item.Peso}
	}
	return domain.Peso{}
}
