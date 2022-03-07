package userCase

import (
	"clean-arq-go/src/userCase/DTOs"
	"clean-arq-go/src/userCase/service"
)

func Simular(pedidoDto DTOs.PedidoDTO) DTOs.ResultadoSimulacao {

	pedido, err := service.Convert(pedidoDto)
	if err != nil {
		return DTOs.ResultadoSimulacao{Messagem: err.Error()}
	}
	return DTOs.ResultadoSimulacao{Messagem: "Simulação executada com sucesso", Valor: pedido.Frete.GetValor()}
}
