package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_deveRetronarFalseQuandoCPFInvalido(t *testing.T) {
	assert.Equal(t, false, IsCPF("12345678996"))
}

func Test_deveRetronarTrueQuandoCPFValido(t *testing.T) {
	assert.Equal(t, true, IsCPF("355.203.280-05"))
}
