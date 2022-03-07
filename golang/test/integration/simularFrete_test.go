package integration

import (
	"clean-arq-go/src/userCase"
	"clean-arq-go/src/userCase/DTOs"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_DeveCalcularValorDoFrete(t *testing.T) {
	pedidoDTO := DTOs.PedidoDTO{
		Cpf: "355.203.280-05",
		Itens: []DTOs.ItemDTO{
			{Descricao: "Camera", Valor: 2000, Peso: 1, Altura: 20, Largura: 15, Profundidade: 10, Quantidade: 2},
			{Descricao: "Guitarra", Valor: 1000, Peso: 3, Altura: 100, Largura: 30, Profundidade: 10, Quantidade: 1},
		},
	}
	resultadoSimulacao := userCase.Simular(pedidoDTO)

	assert.Equal(t, 49.980000000000004, resultadoSimulacao.Valor)
}
