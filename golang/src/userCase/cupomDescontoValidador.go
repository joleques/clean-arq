package userCase

import (
	"clean-arq-go/src/domain"
	"clean-arq-go/src/userCase/DTOs"
)

type DescontoValidador struct {
	Repositorio domain.CupomRepositorio
}

func (validador DescontoValidador) EhValido(cupomDTO DTOs.CupomDTO) DTOs.ResultadoCupomValidador {
	cupom := validador.Repositorio.GetCupom(cupomDTO.Codigo)
	if cupom != nil {
		expirado := cupom.CupomExpirado()
		if !expirado {
			return DTOs.ResultadoCupomValidador{Messagem: "Cupom é valido", EhValido: true}
		}
	}
	return DTOs.ResultadoCupomValidador{Messagem: "Cupom é invalido", EhValido: false}
}
