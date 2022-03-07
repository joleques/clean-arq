package DTOs

import "time"

type PedidoDTO struct {
	Cpf   string
	Data  time.Time
	Itens []ItemDTO
}

type ItemDTO struct {
	Descricao    string
	Valor        float64
	Quantidade   int
	Altura       float64
	Largura      float64
	Profundidade float64
	Peso         float64
}

type CupomDTO struct {
	Codigo string
}

type ResultadoPedido struct {
	Messagem string
	IdPedido string
}

type ResultadoSimulacao struct {
	Messagem string
	Valor    float64
}

type ResultadoCupomValidador struct {
	Messagem string
	EhValido bool
}
