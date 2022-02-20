package domain

import "math"

type Peso struct {
	Valor float64
}

func (peso Peso) CalcularDensidade(volume float64) float64 {
	densidade := math.Floor(peso.Valor / volume)
	return densidade
}
