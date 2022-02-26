package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPeso_CalcularDensidade(t *testing.T) {
	produto := Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  Dimensao{20, 15, 10},
		Peso:      Peso{1},
	}

	assert.Equal(t, 0.00999, produto.getIndiceCalculoFrete())
}
