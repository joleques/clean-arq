package unit

import (
	"clean-arq-go/src/domain"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPeso_CalcularDensidade(t *testing.T) {
	produto := domain.Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  domain.Dimensao{20, 15, 10},
		Peso:      domain.Peso{1},
	}

	assert.Equal(t, 0.00999, produto.GetIndiceCalculoFrete())
}
