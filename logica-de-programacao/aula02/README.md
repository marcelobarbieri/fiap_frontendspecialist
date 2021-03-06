# Aula 2

> Estruturas condicionais, operadores lógicos e switch case

## Desvios Condicionais

Estruturas de programação que permite realizar instruções dependendo do resultado de uma condição booleana.

Uma condição booleana é aquela cujo resultado só pode ser **verdadeiro** ou **falso**

| Desvio Condicional      | Descrição                                                |
| :---------------------- | :------------------------------------------------------- |
| _if_                    |                                                          |
| Encadeado (concatenado) | Trata-se do uso de um desvio condicional dentro de outro |

**Desvio condicional encadeado (concatenado)** é utilizado quando deseja-se que um determinado teste lógico somente aconteça dependendo do resultado de um teste lógico anterior.

## Comparações

> Tipos numéricos

|Operador|Descrição|
|:---:|:---|
|   ==    | Os dois valores são iguais                             |
|   =     | Atribuição do valor (não é uma comparação) |
|   >     | O valor da esquerda é maior que o da direita           |
|   <     | O valor da esquerda é menor que o da direita           |
|   >=    | O valor da desquerda é maior ou igual que o da direita |
|   <=    | O valor da esquerda é menor ou igual que o da direita  |
|   !=    | O valor da esquerda é diferente do valor da direita    |

## Operadores Lógicos

|Operador|Nome|Significado|
|:---:|:---:|:---| 
|!|não (*not*)|Inverte o estado lógico da condição|
|&&|e condicional (*and*)|Retorna verdadeiro se aprimeira condição e a segybda forem verdadeiras. Caso a primeira condição seja falsa, a segunda nem chega a ser avaliada|
|\|\||ou condicional (*or*)|Retorna verdadeiro se pelo menos uma das condições forem verdadeiras. Caso a primeira condição seja fala, a segunda nem chega a ser avaliada|

### Tabela Verdade

|Condição 1|Condição 2|Operador E|Operador OU|
|:---:|:---:|:---:|:---:|
|Verdadeiro|Verdadeiro|Verdadeiro|Verdadeiro|
|Verdadeiro|Falso|Falso|Verdadeiro|
|Falso|Verdadeiro|Falso|Verdadeiro|
|Falso|Falso|Falso|Falso|

|Condição|Operador NÃO|
|:---:|:---:|
|Verdadeiro|Falso|
|Verdadeiro|Verdadeiro|

## Switch Case

Estrutura de seleção.

Indicado para situações em que todos os casos possíveis de valor para uma variável são conhecidos, sem considerar intervalos.


# Referências

- https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String 
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math 
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array 
- https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM
- https://www.w3schools.com/
