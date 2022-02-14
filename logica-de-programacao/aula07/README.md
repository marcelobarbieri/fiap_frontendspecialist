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
    |:------------------------------------|:---------------------------------------|
    |document.getElementById(id)          |Encontra um elemento pelo ID            |
    |document.getElementsByTagName(name)  |Encontra um elemento por sua tag        |
    |document.getElementsByClassName(name)|Encontra um elemento pelo nome da classe|
    
</details>

<!--
<details><summary></summary>
  
</details>
-->
