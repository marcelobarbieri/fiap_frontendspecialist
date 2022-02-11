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

- Operador Rest

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

- Parâmetro Padrão

Outra novidade, surgida no mesmo pacote de especificações ES6, foi a dos parâmetros padrão.
Vamos entender a utilidade deles.

Se for declarado um parâmetro em uma função e não atribuir valor a ele, seu valor padrão será **undefined**.

Usando parâmetro padrão, ao não passar um argumento, **o padrão será aplicado**.

E passando um argumento, ele será atribuído **normalmente** ao parâmetro.

- Outros Parâmetros

- Escopo de Funções

Escopos são **limitadores** de acesso em programação, e podem ser utilizados para estabelecer, por exemplo, que determinados dados **não devem estar visíveis
