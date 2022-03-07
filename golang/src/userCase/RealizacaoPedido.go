package userCase

import (
	"clean-arq-go/src/domain"
	"clean-arq-go/src/userCase/DTOs"
	"clean-arq-go/src/userCase/service"
)

type RealizacaoPedido struct {
	Repositorio domain.PedidoRepositorio
}

func (realizacaoPedido RealizacaoPedido) Fazer(pedidoDto DTOs.PedidoDTO) DTOs.ResultadoPedido {

	pedido, err := service.Convert(pedidoDto)
	if err != nil {
		return DTOs.ResultadoPedido{Messagem: err.Error()}
	}
	err = realizacaoPedido.Repositorio.Salvar(pedido)
	if err != nil {
		return DTOs.ResultadoPedido{Messagem: err.Error()}
	}

	return DTOs.ResultadoPedido{Messagem: "Pedido realizado com sucesso!", IdPedido: pedido.Id}
}
