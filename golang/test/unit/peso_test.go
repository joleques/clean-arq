package unit

import (
	"clean-arq-go/src/domain"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPeso_CalcularDencidade(t *testing.T) {
	peso := domain.Peso{1.0}
	volume := 0.003

	densidade := peso.CalcularDensidade(volume)

	assert.Equal(t, 333.0, densidade)
}
