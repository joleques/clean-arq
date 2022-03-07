package unit

import (
	"clean-arq-go/src/domain"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFrete_GetValorQuandoValorFreteMenorQue10(t *testing.T) {
	camera := domain.Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  domain.Dimensao{20, 15, 10},
		Peso:      domain.Peso{1},
	}
	frete := domain.Frete{}
	frete.AddProdutos(camera, 1)

	assert.Equal(t, 10.00, frete.GetValor())
}

func TestFrete_GetValorQuandoValorFreteMaiorQue10(t *testing.T) {
	camera := domain.Produto{
		Codigo:    "2323-AFSRDHDKDL-456",
		Descricao: "Camera",
		Dimensao:  domain.Dimensao{20, 15, 10},
		Peso:      domain.Peso{1},
	}
	guitarra := domain.Produto{
		Codigo:    "465454LKHLKHIOGK-789",
		Descricao: "Guitarra",
		Dimensao:  domain.Dimensao{100, 30, 10},
		Peso:      domain.Peso{3},
	}
	frete := domain.Frete{}
	frete.AddProdutos(camera, 1)
	frete.AddProdutos(guitarra, 1)

	assert.Equal(t, 39.99, frete.GetValor())
}
