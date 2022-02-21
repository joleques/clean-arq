package domain

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"time"
)

func Test_naoDeveFazerPedioComCPFInvalido(t *testing.T) {
	pedido, err := NewPedido("1234567899")
	assert.Equal(t, "Pedido não pode ser realizado, pq o CPF é invalido.", err.Error())
	assert.Nil(t, pedido)
}

func Test_deveFazerPedioComCPFValido(t *testing.T) {
	pedido, err := NewPedido("355.203.280-05")
	assert.Nil(t, err)
	assert.Equal(t, "355.203.280-05", pedido.cpf)
}

func Test_deveFAzerPedidoComTresItens(t *testing.T) {
	pedido, err := NewPedido("355.203.280-05")
	pedido.AddItem("123-ASGRTO-789", 1500, 2)
	pedido.AddItem("Guitarra", 500, 1)
	pedido.AddItem("Geladeira", 100, 1)

	assert.Nil(t, err)
	assert.Equal(t, 3600.0, pedido.GetTotal())
}

func Test_totalPedidoDeveSerZeroQuandoNaoTemItem(t *testing.T) {
	pedido, err := NewPedido("355.203.280-05")
	assert.Nil(t, err)
	assert.Equal(t, 0.0, pedido.GetTotal())
}

func Test_deveFazerPedidoComCupomDesconto(t *testing.T) {
	tempoExpiracao, _ := time.ParseDuration("10m")
	dataExpiracao := time.Now().Add(tempoExpiracao)
	cupom := Cupom{10, dataExpiracao}
	pedido, err := NewPedido("355.203.280-05")
	pedido.AddItem("Camera", 2000, 2)
	pedido.AddItem("Guitarra", 1000, 1)
	pedido.AddCupomDesconto(cupom)

	assert.Nil(t, err)
	assert.Equal(t, 4500.0, pedido.GetTotal())
}

func Test_naoDeveAplicarDescontoExpirado(t *testing.T) {
	dataExpiracao := time.Date(2021, 12, 5, 12, 45, 0, 0, time.Local)
	cupom := Cupom{10, dataExpiracao}
	pedido, err := NewPedido("355.203.280-05")
	pedido.AddItem("Camera", 2000, 2)
	pedido.AddItem("Guitarra", 1000, 1)
	pedido.AddCupomDesconto(cupom)

	assert.Nil(t, err)
	assert.Equal(t, 5000.0, pedido.GetTotal())
}

func Test_deveAplicarDescontoQuandoNaoEstaExpirado(t *testing.T) {
	tempoExpiracao, _ := time.ParseDuration("10m")
	dataExpiracao := time.Now().Add(tempoExpiracao)
	cupom := Cupom{10, dataExpiracao}
	pedido, err := NewPedido("355.203.280-05")
	pedido.AddItem("Camera", 2000, 2)
	pedido.AddItem("Guitarra", 1000, 1)
	pedido.AddCupomDesconto(cupom)

	assert.Nil(t, err)
	assert.Equal(t, 4500.0, pedido.GetTotal())
}
