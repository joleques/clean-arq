package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFrete_GetValorQuandoValorFreteMenorQue10(t *testing.T) {
	camera := Produto{
		"2323-AFSRDHDKDL-456",
		"Camera",
		Dimensao{20, 15, 10},
		Peso{1},
	}
	frete := Frete{}
	frete.AddProdutos(camera)

	assert.Equal(t, 10.00, frete.GetValor())
}

func TestFrete_GetValorQuandoValorFreteMaiorQue10(t *testing.T) {
	camera := Produto{
		"2323-AFSRDHDKDL-456",
		"Camera",
		Dimensao{20, 15, 10},
		Peso{1},
	}
	guitarra := Produto{
		"465454LKHLKHIOGK-789",
		"Guitarra",
		Dimensao{100, 30, 10},
		Peso{3},
	}
	frete := Frete{}
	frete.AddProdutos(camera)
	frete.AddProdutos(guitarra)

	assert.Equal(t, 39.99, frete.GetValor())
}
