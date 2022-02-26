package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFrete_GetValorQuandoValorFreteMenorQue10(t *testing.T) {
	camera := Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  Dimensao{20, 15, 10},
		Peso:      Peso{1},
	}
	frete := Frete{}
	frete.AddProdutos(camera, 1)

	assert.Equal(t, 10.00, frete.GetValor())
}

func TestFrete_GetValorQuandoValorFreteMaiorQue10(t *testing.T) {
	camera := Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  Dimensao{20, 15, 10},
		Peso:      Peso{1},
	}
	guitarra := Produto{
		Codigo:    "465454LKHLKHIOGK-789",
		Descricao: "Guitarra",
		Dimensao:  Dimensao{100, 30, 10},
		Peso:      Peso{3},
	}
	frete := Frete{}
	frete.AddProdutos(camera, 1)
	frete.AddProdutos(guitarra, 1)

	assert.Equal(t, 39.99, frete.GetValor())
}
