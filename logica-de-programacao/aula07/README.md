# Aula 7 - DOM - Document Object Model

Este é um dos conceitos mais importantes no momento em que precisamos **interagir** com a página web que desenvolvemos.

Assim, para utilizarmos elementos, criar e até alterar o texto do HTML pelo JavaScript, nós utilizamos o **DOM**.

Então, é possível dizer que manipulamos o **Documento Object Model com o JavaScript**.

Porém, apesar da forte ligação com a linguagem JavaScript, ele **não é uma parte dela**: podemos pensar no DOM como uma **API** que pode ser acessada pelo JavaScript.

O Modelo de Objeto de Documento (DOM) é uma **interface de programação** para documentos HTML, XML e SVG. Ele fornece uma representação estruturada do documento como uma **árvore**, além de definir **métodos** que permitem acesso à árvore, a fim de que eles possam alterar a estrutura, o estilo e o conteúdo do documento, e fornecer uma representação do documento como um **grupo estruturado de nós e objetos**, possuindo várias **propriedades e métodos**.

Os nós também podem contar com manipuladores de eventos que lhe são inerentes, e, uma vez que um evento é acionado, os manipuladores de eventos são executados. Essencialmente, ele conecta páginas web a scripts ou linguagens de programação.

## Árvore DOM

![Árvore DOM](https://github.com/marcelobarbieri/fiap_frontendspecialist/blob/main/logica-de-programacao/aula07/assets/arvore-dom.png)

Com o DOM, o JavaScript possui todo o poder que necessita para criar um HTML dinâmico:

- Alterar todos os elementos HTML na página;
- Alterar todos os atributos HTML na página;
- Alterar todos os estilos CSS na página;
- Remove elementos e atributos HTML existentes;
- Adicionar novos elementos e atributos HTML;
- Reagir a todos os eventos HTML existentes na página;
- Criar novos eventos HTML na página.

<details><summary>JavaScript - Métodos DOM HTML</summary>

Os métodos HTML DOM são **ações** qie você pode executar em elementos HTML.

As propriedades DOM HTML são **valores** de elementos HTML que você pode definir ou alterar.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <p id="exemplo"></p>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

```js
document.getElementById("exemplo").innerHTML = "Hello World!";
```

O método getElementById acessa um elemento pelo seu id.

A propriedade innerHTML acessa o conteúdo de um elemento podendo alterá-lo.

</details>

<details><summary>JavaScript - Métodos DOM HTML - Document Object</summary>

O **DOCUMENT OBJECT** representa sua página da web.
    
Caso você queira acessar qualquer elemento em uma página HTML, sempre comece acessando o DOCUENT OBJECT.
    
Exemplos:
    
### Encontrando Elementos HTML
    
|Método                               |Descrição                               |
|:---                                 |:---                                    |
|document.getElementById(id)          |Encontra um elemento pelo ID            |
|document.getElementsByTagName(name)  |Encontra um elemento por sua tag        |
|document.getElementsByClassName(name)|Encontra um elemento pelo nome da classe|
    
### Alterando Elementos HTML

|Propriedade                          |Descrição                                        |
|:---                                 |:---                                             |
|element.innerHTML = new html content |Altera o inner HTML de um elemento               |
|element.attribute = new value        |Altera o atributo value de um elemento           |
|element.style.property = new style   |Altera o style de um elemento HTML               |
    
|Método                               |Descrição                                        |    
|:---                                 |:---                                             |
|element.setAttribute(attribute,value)|Altera o valor de um atributo de um elemento HTML|    
    
### Adicionando e excluindo elementos HTML
    
|Método                         |Descrição                |
|:---                           |:---                     |
|document.createElement(element)|Cria um elemento HTML    |
|document.removeChild(element)  |Remove um elemento HTML  |
|document.appendChild(element)  |Adiciona um elemento HTML|
|document.replaceChild(new,old) |Altera um elemento HTML  |
|document.write(text)           |Escreve no documento     |
    
### Manipuladores de eventos
    
|Método                                                |Descrição                                 |
|:---                                                  |:---                                      |
|document.getElementById(id).onclick = function(){code}|Adiciona um evento de clique a um elemento|    

### Encontrando elemento pelo ID
    
A maneira mais fácil de encontrar um elemento HTML no DOM é utilizando o id do elemento.
    
Se o elemento for encontrado, o método o retornará como um objeto (em myElement).
    
Se, por sua vez, o elemento não for encontrado, myElement conterá null.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>JavaScript HTML DOM</h2>
        
        <p id="paragrafo1">Encontrando elementos HTML pelo ID</p>
        <p>Demonstrando o método <b>getElementsById</b>.</p>
        
        <p id="paragrafo2"></p>
        
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>    
```    
    
```js
const element = documento.getElementById("paragrafo1");

document.getElementById("paragrafo2").innerHTML = 
    "O texto do primeiro parágrafo é: " + element.innerHTML;
```    
    
### Encontrando elemento pelo nome de tag

Este exemplo encontra todos os elementos <p>
    
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>JavaScript HTML DOM</h2>
        
        <p>Encontrando elementos HTML pelo ID</p>
        <p>Demonstrando o método <b>getElementsById</b>.</p>
        <p id="demo"></p>
        
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>    
```        
    
```js
const element = documento.getElementByTagName("p");

document.getElementById("demo").innerHTML = 
    "O texto do primeiro parágrafo é (index 0) é: " + element[0].innerHTML;
```    

### Alterando o conteúdo HTML
    
A maneira mais fácil de modificar o conteúdo de um elemento HTML é utilizando a **propriedade innerHTML**    
    
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>JavaScript HTML DOM</h2>
        
        <p id="p1">Hello World!</p>
        <p>O parágrafo acima foi alterado por um script.</p>        
        
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>    
```   
    
```js
document.getElementById("p1").innerHTML = 
    "Novo conteúdo";
```      
    
### Alterando o atributo HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>JavaScript HTML DOM</h2>
        
        <img id="image" src="https://observatoriodocinema.uol.com.br/wp-content-uploads/2.png" width="160" height="120">
        <p>A imagem original era o Home de Ferro, mas via script alteramos para homem aranha</p>
        
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>    
```    
    
```js
document.getElementById("image").src = 
    "https://t2.tudocdn.net/492362?w=5";
```  
    
</details>

### Conteúdo HTML Dinâmico

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>JavaScript HTML DOM</h2>
        
        <p id="demo"></p>
        
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>    
```   

```js
let data = new Date();
document.getElementById("demo").innerHTML = "Data: " + data.toLocaleString();
```

<!--
<details><summary></summary>
  
</details>
-->
