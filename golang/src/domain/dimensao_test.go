package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestDimensao_GetVolume(t *testing.T) {
	dimensao := Dimensao{20, 15, 10}

	assert.Equal(t, 0.003, dimensao.GetVolume())
}