package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPeso_CalcularDensidade(t *testing.T) {
	produto := Produto{
		"2323-AFSRDHDKDL-456",
		"Camera",
		Dimensao{20, 15, 10},
		Peso{1},
	}

	assert.Equal(t, 0.00999, produto.getIndiceCalculoFrete())
}
