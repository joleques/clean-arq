package unit

import (
	"clean-arq-go/src/domain"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_deveRetronarFalseQuandoCPFInvalido(t *testing.T) {
	assert.Equal(t, false, domain.IsCPF("12345678996"))
}

func Test_deveRetronarTrueQuandoCPFValido(t *testing.T) {
	assert.Equal(t, true, domain.IsCPF("355.203.280-05"))
}
