package memoryRepo

import (
	"clean-arq-go/src/domain"
	"errors"
	"strconv"
	"time"
)

type PedidoMemoria struct {
	Pedido map[string]*domain.Pedido
}

type CupomMemoria struct {
	Cupom map[string]domain.Cupom
}

func NewCumpoMemoria() *CupomMemoria {
	dataExpiracao := time.Date(2025, 12, 5, 12, 45, 0, 0, time.Local)
	dataExpirada := time.Date(2020, 12, 5, 12, 45, 0, 0, time.Local)
	cumpomMemoria := CupomMemoria{
		Cupom: map[string]domain.Cupom{
			"VALE20": {20, dataExpiracao},
			"VALE30": {30, dataExpiracao},
			"VALE40": {30, dataExpirada},
		},
	}
	return &cumpomMemoria
}

func NewPedidoMemoria() *PedidoMemoria {
	return &PedidoMemoria{
		Pedido: map[string]*domain.Pedido{},
	}
}

func (base *PedidoMemoria) Salvar(pedido *domain.Pedido) error {
	if pedido == nil {
		return errors.New("Pedido invalido.")
	}
	indice := len(base.Pedido) + 1
	ano := time.Now().Year()
	id := strconv.Itoa(ano) + strconv.Itoa(indice)
	pedido.Id = id
	base.Pedido[id] = pedido
	return nil
}

func (base *CupomMemoria) GetCupom(codigo string) *domain.Cupom {
	cupomResult, ok := base.Cupom[codigo]
	if ok {
		return &cupomResult
	} else {
		return nil
	}
}
