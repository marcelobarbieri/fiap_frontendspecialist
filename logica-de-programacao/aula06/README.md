# Aula 6 - Funções JavaScript

> Tipos, declarações, escopo, retorno, clousers, call-back, IIFE, factory

Sintaxe:

```js
function name(params: any) {
  // code
}
```

## Funções Auto-Invocáveis

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

## Object Arguments

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

## Operador Rest

A partir do ES6, surgiu o operador **rest**.
Ele é representado por **reticências...**
Esse operador, quando colocado antes do último parâmetro nomeado de uma função, **coleta todos os argumentos passados para esse parâmetro e coloca-os em um array**

No exemplo abaixo, o rest coletará, do **segundo argumento** em diante. Pois o primeiro, foi mapeado para o parâmetro a

```js
function frutas(a, ...b) {
    alert(a); // Laranja
    alert(b); // Maçã,Kiwi,Mamão,Pera
}

frutas("Laranja","Maçã","Kiwi","Mamão","Pera");
```

## Parâmetro Padrão

Outra novidade, surgida no mesmo pacote de especificações ES6, foi a dos parâmetros padrão.
Vamos entender a utilidade deles.

Se for declarado um parâmetro em uma função e não atribuir valor a ele, seu valor padrão será **undefined**.

Usando parâmetro padrão, ao não passar um argumento, **o padrão será aplicado**.

E passando um argumento, ele será atribuído **normalmente** ao parâmetro.

```js
// exemplo 1

function retorna(a=2) {
    return a;
}
alert(retorna(3)); // 3
alert(retorna());; // 2

// function retorna(valor) {
//     let a = 2;
//     if (valor != undefined)
//         a = valor;
//     return a;
// }

// exemplo 2

function gravarAluno(nome,telefone,cidade="São Paulo") {
    return `${nome}, ${telefone}, ${cidade}`;
}

alert(gravarAluno("Alex","2222-2222"));
alert(gravarAluno("Eduardo","3333-3333","Guarulhos"));

// function gravarAluno(cidade) {
//     let x="São Paulo";
//     if (cidade != undefined)
//         x=cidade;
//     alert(x);
// }

// exemplo 3

const pessoa = {
    nome: "Alex",
    idade: 45
}

function exibir(x) {
    alert(`${x.nome} - ${x.idade}`);
}

exibir(pessoa);
```

## Outros Parâmetros

Acabamos de ver como invocar funções passando como argumentos, valores **primitivos**. 
Mas como funções são especiais, podem também **receber objetos e outras funções como argumentos**.

Pode-se criar objetos separadamente e passá-los depois para dentro da função.

```js
const pessoa = [
    {
        nome: "Alex",
        idade: 45
    }, 
    {
        nome:"José",
        idade: 60
    }]

function exibir(x) {
    alert(`${x.nome} - ${x.idade}`);
}

exibir(pessoa[0]);
exibir(pessoa[1]);
```

## Escopo de Funções

Escopos são **limitadores** de acesso em programação, e podem ser utilizados para estabelecer, por exemplo, que determinados dados **não devem estar visíveis para além das fronteiras** delimitadas por ele.

Funções criam escopo e, quando invocadas, retornam para o mundo externo, apenas aquilo que estiver indicado através da instrução **return**

```js
function minhaFuncao() {
    let minhaVariavel = "Variável no escopo de função";
    return minhaVariavel;
}
alert(minhaFuncao()); // Variável no escopo de função
alert(minhaVariavel); // Uncaught ReferenceError: minhaVariavel is not defined

// utilizando let ou var 
// alert(minhaVariavel); // Uncaught ReferenceError: minhaVariavel is not defined

// sem utilizar let e var, escopo global 
// alert(minhaVariavel); // Variável no escopo de função
```

# Referências

- https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model
- https://www.w3schools.com/
- http://docplayer.com.br/17393758-Javascript-eventos-e-objetos-nativos.html
- http://adalgisa-souza.appspot.com/javaScript

<!--[Bibliografia](https://github.com/marcelobarbieri/fiap_frontendspecialist/blob/main/assets/logica-bbl-aula06.png)-->
