package domain

const distancia = 1000

type Frete struct {
	produtos []Produto
}

func (frete *Frete) AddProdutos(produto Produto) {
	frete.produtos = append(frete.produtos, produto)
}

func (frete Frete) GetValor() float64 {
	valor := 0.0
	for _, produto := range frete.produtos {
		valor += distancia * produto.getIndiceCalculoFrete()
	}
	if valor > 10 {
		return valor
	}

	return 10.0
}
