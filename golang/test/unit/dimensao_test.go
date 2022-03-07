package unit

import (
	"clean-arq-go/src/domain"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_deveRetornarVolumeDaDimensao(t *testing.T) {
	dimensao := domain.Dimensao{20, 15, 10}

	assert.Equal(t, 0.003, dimensao.GetVolume())
}
