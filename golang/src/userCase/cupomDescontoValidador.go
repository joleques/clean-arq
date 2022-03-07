package userCase

import (
	"clean-arq-go/src/domain"
	"clean-arq-go/src/userCase/DTOs"
)

type DescontoValidador struct {
	repositorio domain.CupomRepositorio
}

func (validador DescontoValidador) ehValido(cupomDTO DTOs.CupomDTO) DTOs.ResultadoCupomValidador {
	cupom := validador.repositorio.GetCupom(cupomDTO.Codigo)
	if cupom != nil {
		expirado := cupom.CupomExpirado()
		if !expirado {
			return DTOs.ResultadoCupomValidador{Messagem: "Cupom é valido", EhValido: true}
		}
	}
	return DTOs.ResultadoCupomValidador{Messagem: "Cupom é invalido", EhValido: false}
}
