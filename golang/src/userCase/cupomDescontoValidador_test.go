package userCase

import (
	"clean-arq-go/src/infra/memoryRepo"
	"clean-arq-go/src/userCase/DTOs"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_ValidaCupomQuandoCupomEhValido(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := DescontoValidador{repositorio: repoCupom}

	resultado := validador.ehValido(DTOs.CupomDTO{Codigo: "VALE20"})

	assert.Equal(t, true, resultado.EhValido)
}

func Test_ValidaCupomQuandoCupomInvalido(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := DescontoValidador{repositorio: repoCupom}

	resultado := validador.ehValido(DTOs.CupomDTO{Codigo: "VALE40"})

	assert.Equal(t, false, resultado.EhValido)
}

func Test_ValidaCupomQuandoCupomInexistente(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := DescontoValidador{repositorio: repoCupom}

	resultado := validador.ehValido(DTOs.CupomDTO{Codigo: "VALE50"})

	assert.Equal(t, false, resultado.EhValido)
}
