# Aula 1

> Definição e histórico.

> Fundamentos Básicos da Programação - Tipos de dados, variáveis e estruturas básicas; usando o GIT


## Instalando o Visual Studio Code
### VSCode Extensions

> Color Highlight

> Prettier - Code formatter

## JavaScript
### Um pouco da história
### Tipos de Dados

```js
Boolean
Null
Undefined
Number
String
```

### Tipagem Dinâmica

JavaScript é uma linguagem de tipagem dinâmica.

Não necessita declarar o tipo de variável antes de sua atribuição.

O tipo será automaticamente determinado quando o programa for processado.

### Declaração de Variável

*let* vs *var*
|Declaração/ Escopo|Global|Local|Bloco|
|:---|:---:|:---:|:---:|
|*let*|x|x|x|
|*var*|x|x||

O que muda é o escopo.

Quando uma variável é declarada com a palavra:
|Declaração|Observações|
|*var*|pode corresponder aos escopos global e local|
|*let*|pode corresponder aos escopos gloval, local e de bloco|

(1) var e let são acessíveis em outras funções quando no escopo global e local
(2) let não são acessíveis em outras funções quando no escopo de bloco

(3) utilizar preferencialmente o let por haver limitação
(4) Na tipagem dinâmica quando não for informado let ou var, será assumido var

# Aula 2
