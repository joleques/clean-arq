package integration

import (
	"clean-arq-go/src/infra/memoryRepo"
	"clean-arq-go/src/userCase"
	"clean-arq-go/src/userCase/DTOs"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_DeveSalvarPedido(t *testing.T) {
	pedidoMemoria := memoryRepo.NewPedidoMemoria()
	pedidoDTO := DTOs.PedidoDTO{
		Cpf: "355.203.280-05",
		Itens: []DTOs.ItemDTO{
			{Descricao: "Camera", Valor: 2000, Peso: 1, Altura: 20, Largura: 15, Profundidade: 10, Quantidade: 2},
			{Descricao: "Guitarra", Valor: 1000, Peso: 3, Altura: 100, Largura: 30, Profundidade: 10, Quantidade: 1},
		},
	}

	realizacaoPedido := userCase.RealizacaoPedido{Repositorio: pedidoMemoria}

	resultadoRealizacaoPedido := realizacaoPedido.Fazer(pedidoDTO)

	assert.NotNil(t, resultadoRealizacaoPedido.IdPedido)

	assert.Equal(t, "20221", resultadoRealizacaoPedido.IdPedido)
	assert.Equal(t, "Pedido realizado com sucesso!", resultadoRealizacaoPedido.Messagem)

}
