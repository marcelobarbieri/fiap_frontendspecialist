# Aula 5 - Arrays, Filter, Map, Reduce, Splite, forEach, for in, for of

> Arrays, Filter, Map

> Reduce, Splite, forEach, for in, for of

## Arrays JavaScript

Arrays indexados são arrays que ao serem adicionados um elemento, estes recebem uma posição dentro do array. 
Por padrão, a posição inicial do Array é 0 (zero). 
Todos os elementos dentro de um array estão armazenados dentro de um conjunto de chave e valor.

Diferentes formas para criar um array:

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

## Arrays são objetos

Arrays são um tipo especial de objetos. 
O operador typeof em JavaScript retorna "objeto" para arrays.
Os arrays usam números para acessar seus "elementos". 
Pode-se armazenar diferentes tipos de dados em um Array. 

Exemplo:

```js
const pessoas = ["José","João",46];
alert(pessoas[0]);
// resultado: José
```

Os objetos usam nomes para acessar seus "membros":

```js
const passageiro = {primeiroNome:"José", ultimoNome:"Silva", Idade:46};
alert(passageiro.primeiroNome);
// resultado: José
```

Elementos do Array podem ser Objetos:

```js
const meuArray=[];
const carros=["Renegade","Toro","Ranger"];
meuArray[0]=Date.now;
meuArray[1]=carros;
```

## Propriedade e métodos dos arrays

O grande diferencial dos Arrays são suas propriedades e métodos integrados. 
Vamos ver alguns deles.

<details><summary>length()</summary>

Retorna a quantidade de elementos

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas.length); 
// resultado: 4

alert(frutas[0]);
// resultado: Banana

alert(frutas[length-1]);
// resultado: Manga
```

</details>

<details><summary>push()</summary>

Adiciona novo elemento

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

frutas.push("Morango");
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga,Morango

```

</details>

<details><summary>pop()</summary>

Remove o último elemento de um array

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

frutas.pop();
alert(frutas);
// resultado: Banana,Laranja,Maça
```

</details>

<details><summary>shift()</summary>

Remove o primeiro elemento do vetor e traz todos os outros elementos para um índice antes.

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

frutas.shift();
alert(frutas);
// resultado: Laranja,Maça,Manga
```

</details>

<details><summary>unshift()</summary>

Adiciona um novo elemento no início da fila empurrando os demais para baixo

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

frutas.unshift("Limão");
// resultado: Limão,Banana,Laranja,Maça,Manga
```

</details>    

<details><summary>delete()</summary>
    
Remove um elemento do Array.
Deixa lacunas no Array

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

delete frutas[1];
alert(frutas);
// resultado: Banana,,Maça,Manga
```

</details>    
    
<details><summary>splice()</summary>

Adiciona novos elementos no Array.

• O primeiro parâmetro define a posição onde novos elementos devem ser adicionados (emendados).
• O segundo parâmetro define quantos elementos devem ser removidos.
• O resto dos parâmetros ("Limão", "Kiwi") definem os novos elementos a serem adicionados .

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas);
// resultado: Banana,Laranja,Maça,Manga

frutas.splice(2,0,"Limão","Kiwi");
alert(frutas);
// resultado: Banana,Laranja,Limão,Kiwi,Maça,Manga
```
    
</details>        

<details><summary>join()</summary>

O join() método também une todos os elementos do array em uma string. Ele se comporta exatamente como toString(), mas, além disso, você pode especificar o separador.

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
alert(frutas.join(" - "));
// resultado: Banana - Laranja - Maça - Manga
```

</details>
    
<details><summary>concat()</summary>

O concat() cria uma nova matriz mesclando (concatenando) matrizes existentes.

```js
const frutas = ["Banana","Laranja","Maça","Manga"];
const verduras = ["Couve","Brócolis"];

const comidas = frutas.concat(verduras);
alert(comidas);
// resultado: Banana,Laranja,Maça,Manga,Couve,Brócolis
```

</details>

<details><summary>slice()</summary>

O slice() divide uma parte de uma matriz em uma nova matriz, a partir do valor do parâmetro

```js
const comidas = ["Banana","Laranja","Maçã","Manga","Couve","Brócolis"]
const verduras = comidas.slice(4);
alert(verduras);
// resultado: Couve,Brócolis
```

</details>

<details><summary>sort e reverse</summary>

O sort() ordena um array, enquanto o reverse coloca os elementos em ordem inversa

```js
const frutas = ["Banana","Laranja","Maçã","Manga"];

frutas.sort();
alert(frutas);
// resultado: Banana,Laranja,Maçã,Manga

frutas.reverse();
alert(frutas);
// resultado: Manga,Maçã,Laranja,Banana
```

</details>    
    
<details><summary>Percorrendo um array</summary>

As duas melhores maneiras de se percorrer um Array são utilizando um FOR, um FOR EACH ou um MAP.

```
index.html
js/
    script.js
```

index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Array
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <p id="saida"></p>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

<details><summary>for</summary>

script.js
```js
const frutas = ["Banana","Laranja","Maçã","Manga"];

let text = "<ul>";
for (let i=0; i < frutas.length; i++) {
    text += "<li>" + frutas[i] + "</li>";
}
text += "</ul>";
document.getElementById("saida").innerHTML = text;
```

</details>
                                
<details><summary>foreach</summary>

script.js
```js
const frutas = ["Banana","Laranja","Maçã","Manga"];

let text = "<ul>";
frutas.forEach(minhaFuncao);
text += "</ul>";
document.getElementById("saida").innerHTML = text;

function minhaFuncao(value) {
    text += "<li>" + value + "</li>";
}
```

</details>    
    
<details><summary>map</summary>    
    
script.js
```js
const frutas = ["Banana","Laranja","Maçã","Manga"];

let text = "<ul>";
frutas.map(minhaFuncao);
text += "</ul>";
document.getElementById("saida").innerHTML = text;

function minhaFuncao(value) {
    text += "<li>" + value + "</li>";
}
```

</details>
    
</details>
