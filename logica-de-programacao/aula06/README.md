# Aula 6 - Funções JavaScript

> Tipos, declarações, escopo, retorno, clousers, call-back, IIFE, factory

Sintaxe:

```js
function name(params: any) {
  // code
}
```

- Funções Auto-Invocáveis

Esse tipo de construção recebe o nome de função **auto-invocável**.
Ou seja, ela executa assim que é **definida**.
Em inglês, é também chamada de **Immediately Invoked Function Expression (IIFE)**.

```js
(
    function() {
        alert('Oi! Ninguém me chamou, mas executei mesmo assim!');
    }
) ()
```

- Object Arguments

Os argumentos que uma função recebe são guardados em um **objeto do tipo array** chamado de **arguments**.
Quando você cria uma função, ela já vem com esse objeto embutido.

Então você pode usar diretamente esse objeto dentro de uma função para **manipular os argumentos que ela recebe**

```js
// argumentos dinâmicos

function frutas() { 
    let texto="";
    for(let i=0;i<arguments.length;i++){
        texto += (arguments[i] + "<br>");
    }
    document.getElementById("resultado").innerHTML = texto;
}

frutas("Laranja","Maçã","Kiwi","Mamão","Pera");

// Laranja
// Maçã
// Kiwi
// Mamão
// Pera
```
