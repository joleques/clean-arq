package domain

import (
	"errors"
	"time"
)

type Pedido struct {
	cpf   string
	itens []ItemPedido
	cupom Cupom
}

type ItemPedido struct {
	Item       Item
	Quantidade int
}

type Item struct {
	descricao string
	valor     float64
}

type Cupom struct {
	Percentual    int
	DataExpiracao time.Time
}

func NewPedido(cpf string) (*Pedido, error) {
	ehValidoCPF := IsCPF(cpf)
	if !ehValidoCPF {
		return nil, errors.New("Pedido não pode ser realizado, pq o CPF é invalido.")
	}
	return &Pedido{cpf, nil, Cupom{0, time.Now()}}, nil
}

func (pedido *Pedido) AddItem(descricao string, valor float64, quantidade int) {
	itemPedido := ItemPedido{
		Item:       Item{descricao, valor},
		Quantidade: quantidade,
	}
	pedido.itens = append(pedido.itens, itemPedido)
}

func (pedido Pedido) GetTotal() float64 {
	total := 0.0
	for _, itemPedido := range pedido.itens {
		total += itemPedido.GetTotal()
	}
	if pedido.cupom.Percentual > 0 {
		return pedido.cupom.AplicarDesconto(total)
	}
	return total
}

func (itemPedido ItemPedido) GetTotal() float64 {
	return itemPedido.Item.valor * float64(itemPedido.Quantidade)
}

func (pedido *Pedido) AddCupomDesconto(cupom Cupom) {
	pedido.cupom = cupom
}

func (cupom Cupom) AplicarDesconto(valor float64) float64 {
	if cupom.CupomExpirado() {
		return valor
	}
	return valor - (valor * (float64(cupom.Percentual)) / 100.0)
}

func (cupom Cupom) CupomExpirado() bool {
	return time.Now().After(cupom.DataExpiracao)
}
