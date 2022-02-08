# Aula 5

> Arrays, Filter, Map

> Reduce, Splite, forEach, for in, for of

## Arrays JavaScript

Arrays indexados são arrays que ao serem adicionados um elemento, estes recebem uma posição dentro do array. 
Por padrão, a posição inicial do Array é 0 (zero). 
Todos os elementos dentro de um array estão armazenados dentro de um conjunto de chave e valor.

Criando um array:
```js
const carros = ["Renegade","Toro","Ranger"];

const carros = [
    "Renegade",
    "Toro",
    "Ranger"
];

const carros = [];
cars[0] = "Renegade";
cars[1] = "Toro";
cars[2] = "Ranger";

const carros = new Array("Renegade","Toro","Ranger");
```

Acessando um elemento:
```js
const carros = ["Renegade","Toro","Ranger"];
let x = carros[0];
alert(x); 
// resultado: Renegade
```

Alterando um elemento:
```js
const carros = ["Renegade","Toro","Ranger"];
carros[0] = "Onix";
let x = carros[0];
alert(x);
// resultado: Onix
```

Acessando todo vetor:
```js
const carros = ["Renegade","Toro","Ranger"];
alert(carros); 
// resultado: Renegade,Toro,Ranger
```
