package domain

type Produto struct {
	Codigo    string
	Descricao string
	Valor     float64
	Dimensao  Dimensao
	Peso      Peso
}

func (produto Produto) getIndiceCalculoFrete() float64 {
	volume := produto.Dimensao.GetVolume()
	densidade := produto.Peso.CalcularDensidade(volume)

	return volume * (densidade / 100)
}
