## POCs com clean architecture

Nesse projeto tem os exercicios propostos ao longo do curso de clean architecture, o objetivo esta abaixo.

- Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

- Ideia inicial é implementar em Nodejs e Golang

## Exercicios


## Parte 1: 

- Não deve fazer um pedido com cpf inválido
- Deve fazer um pedido com 3 itens (com descrição, preço e antidade)
- Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)

## Parte 2: 

- Não deve aplicar cupom de desconto expirado
- Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
- Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado

## Parte 3:
- Deve gerar o código do pedido
- Deve fazer um pedido (caso de uso)
- Deve simular o frete (caso de uso)
- Deve validar o cupom de desconto (caso de uso) 

Obs:
```
Considere

O valor do frete será calculado de acordo com a fórmula
Preço do Frete = distância (km) * volume (m3) * (densidade/100)
O valor mínimo é de R$10,00
Não existem diferentes modalidades de frete (normal, expresso, …) 
e a origem dos produtos é sempre a mesma, além disso não existe 
diferença no destino, se é capital ou interior, o cálculo 
é feito basicamente considerando a distância, o volume e a 
densidade transportados

O código do pedido é formado por AAAAPPPPPPPP onde AAAA representa o ano e o PPPPPPPP representa um sequencial do pedido
Implementar um mecanismo de persistência desacoplado utilizando banco de dados


distância: 1000 (fixo)
volume: 0,003
densidade: 333
preço: R$9,90 (1000 * 0,003 * (333/100))
```