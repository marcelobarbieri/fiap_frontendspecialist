# Aula 2

> Estruturas condicionais, operadores lógicos e switch case


## Desvios Condicionais

Estruturas de programação que permite realizar instruções dependendo do resultado de uma condição booleana.

Uma condição booleana é aquela cujo resultado só pode ser **verdadeiro** ou **falso**

|Desvio Condicional|Descrição|
|:---|:---|
|*if*||
|Encadeado (concatenado)|Trata-se do uso de um desvio condicional dentro de outro|

**Desvio condicional encadeado (concatenado)** é utilizado quando deseja-se que um determinado teste lógico somente aconteça dependendo do resultado de um teste lógico anterior.

### Projeto Jogo ONG

Nova pasta/ arquivos

    js/
        script.js
    index.html

index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogo ONG
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

script.js (exemplo 1)

```js
let idade=parseInt(prompt("Digite a sua idade:"));
if(idade>=12){
    alert("Você pode jogar!");
} else {
    alert("Sua idade não permite que você jogue!");
}
```

script.js (exemplo 2)

```js
// pessoas até 11 anos não podem jogar
// pessoas com 12 anos, somente com a permissão dos pais
// pessoas acima de 12 anos, podem jogar
let idade=parseInt(prompt("Digite a sua idade:"));
if(idade<12){
    alert("Sua idade não permite que você jogue!");
} else if (idade==12) {
    alert("Você pode jogar com a permissão dos pais!");
} else {
    alert("Você pode jogar!");
}
```

---

### Projeto Estatuto ONG

Nova pasta/ arquivos

    js/
        script.js
    index.html

index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Estatuto ONG
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>O valor do investimento será de:</h2>
        <p id="investimento"></p>        

        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

script.js

```js
// O estatuto de uma ONG determina que todas as doações recebidas devem gerar um valor para investimento, 
// para cobrir momentos de necessidade. 
//
// O valor do investimento deve ser de 5% da doação. 
// Porém, em casos em que as doações ultrapassem R$ 1.000,00 o investimento deve ser de 15% da doação.
// Sua missão é criar um programa capaz de fazer os cálculos necessários e indicar quanto deve ser investido.

let doacao = parseFloat(prompt("Digite o valor da doação: "));
let percentual;
if (doacao <= 1000) {
    percentual = 0.05;
} else {
    percentual = 0.15;
}
let investimento = doacao * percentual;

document.getElementById("investimento").innerHTML = investimento.toString();
```

---

### Projeto Estatuto ONG

Nova pasta/ arquivos

    js/
        script.js
    index.html

index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Transporte eleitor
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>Sua situação</h2>
        <p id="situacao"></p>

        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

script.js

```js
let idade=parseInt(prompt("Digite sua idade:"));
let retorno
if (idade < 16) {
    retorno = "Você não pode votar e nem embarcar!";    
} else if (idade < 18) {
    retorno = "Seu voto é facultativo."
} else {
    retorno = "Voto obrigatório, pode embarcar!"
}

document.getElementById("saida").innerHTML = retorno;
```





## Comparações

> Tipos numéricos

|Operador|Descrição|
|:---:|:---|
|==|Os dois valores são iguais|
|=|Atribuição do valor| (não é uma comparação)
|>|O valor da esquerda é maior que o da direita|
|<|O valor da esquerda é menor que o da direita|
|>=|O valor da desquerda é maior ou igual que o da direita|
|<=|O valor da esquerda é menor ou igual que o da direita|
|!=|O valor da esquerda é diferente do valor da direita|
