package domain

import (
	"errors"
	"time"
)

type Pedido struct {
	cpf   string
	itens []ItemPedido
	cupom Cupom
	Frete Frete
}

type ItemPedido struct {
	Item       Produto
	Quantidade int
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
	return &Pedido{cpf: cpf, itens: nil, cupom: Cupom{0, time.Now()}, Frete: Frete{}}, nil
}

func (pedido *Pedido) AddItem(descricao string, valor float64, quantidade int, dimensao Dimensao, peso Peso) {
	produto := Produto{
		Descricao: descricao,
		Valor:     valor,
		Dimensao:  dimensao,
		Peso:      peso,
	}

	itemPedido := ItemPedido{
		Item:       produto,
		Quantidade: quantidade,
	}

	pedido.itens = append(pedido.itens, itemPedido)
	pedido.Frete.AddProdutos(produto, quantidade)
}

func (pedido Pedido) GetTotal() float64 {
	total := 0.0
	for _, itemPedido := range pedido.itens {
		total += itemPedido.GetTotal()
	}
	total += pedido.Frete.GetValor()

	if pedido.cupom.Percentual > 0 {
		return pedido.cupom.AplicarDesconto(total)
	}
	return total
}

func (itemPedido ItemPedido) GetTotal() float64 {
	return itemPedido.Item.Valor * float64(itemPedido.Quantidade)
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
