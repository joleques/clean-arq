package domain

const distancia = 1000

type Frete struct {
	Valor float64
}

func (frete *Frete) AddProdutos(produto Produto, quantidade int) {
	if quantidade == 0 {
		quantidade = 1
	}
	frete.Valor += (distancia * produto.GetIndiceCalculoFrete()) * float64(quantidade)
}

func (frete Frete) GetValor() float64 {
	if frete.Valor > 0 && frete.Valor < 10 {
		return 10.0
	}

	return frete.Valor
}
