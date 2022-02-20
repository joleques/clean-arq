package domain

type Dimensao struct {
	Altura       float64
	Largura      float64
	Profundidade float64
}

func (dimensao Dimensao) GetVolume() float64 {
	alturaEmMetros := converteMetros(dimensao.Altura)
	larguraEmMetros := converteMetros(dimensao.Largura)
	profundidadeEmMetros := converteMetros(dimensao.Profundidade)

	return alturaEmMetros * larguraEmMetros * profundidadeEmMetros
}

func converteMetros(distancia float64) float64 {
	return distancia / 100
}
