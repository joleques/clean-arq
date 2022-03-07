package integration

import (
	"clean-arq-go/src/infra/memoryRepo"
	"clean-arq-go/src/userCase"
	"clean-arq-go/src/userCase/DTOs"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_ValidaCupomQuandoCupomEhValido(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := userCase.DescontoValidador{Repositorio: repoCupom}

	resultado := validador.EhValido(DTOs.CupomDTO{Codigo: "VALE20"})

	assert.Equal(t, true, resultado.EhValido)
}

func Test_ValidaCupomQuandoCupomInvalido(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := userCase.DescontoValidador{Repositorio: repoCupom}

	resultado := validador.EhValido(DTOs.CupomDTO{Codigo: "VALE40"})

	assert.Equal(t, false, resultado.EhValido)
}

func Test_ValidaCupomQuandoCupomInexistente(t *testing.T) {

	repoCupom := memoryRepo.NewCumpoMemoria()

	validador := userCase.DescontoValidador{Repositorio: repoCupom}

	resultado := validador.EhValido(DTOs.CupomDTO{Codigo: "VALE50"})

	assert.Equal(t, false, resultado.EhValido)
}
