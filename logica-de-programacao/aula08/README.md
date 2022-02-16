# DOM - Document Object Model

## Formulários

A validação do formulário HTML pode ser realizada por **JavaScript**.

Se um campo de formulário (fname) estiver vazio, esta função exibe uma mensagem e retorna falso, a fim de evitar que o formulário seja enviado.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <h2>JavaScript Validação</h2>
        
        <form name="meuForm" onsubmit="return validarForm()" method="post">
            Nome: <input type="text" name="fNome">
            <input type="submit" value="Enviar">
        </form>
    </body>
</html>
```

```js
function validarForm() {
    let x = document.forms["meuForm"]["fNome"].value;
    if (x == "") {
        alert("Preencha o campo nome");
        return false;
    }
}
```

<details>
    <summary>Validando Números</summary>
    
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <h2>JavaScript Validação</h2>
        
        <p>Insira um número</p>
        <input id="numero">
        <button type="button" onclick="validarNumero()">Submit</button>
        <p id="demo"></p>
    </body>
</html>
```
    
```js
function validaNumero() {
    // lendo o valor inserido na input
    let x = document.getElementById("numero").value;
    // se não for um número ou estiver vazio
    let texto;
    
    if (isNan(x) || x=="") {
        texto = "Entrada inválida";
    } else {
        texto = "OK";
    }
}
```    
    
</details>    

<details>
    <summary>Validação Automática</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            JavaScript DOM     
        </title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <form method="post">
            <input type="text" name="fNome" required>
            <input type="submit" value="Submit">
        </form>
        
        <p>Se clicar no botão submit com a input em branco, 
            seu navegador irá exibir uma mensagem
        </p>
    </body>
</html>
```    
</details>    

<details>
    <summary>Elemento Radio</summary>
</details>    

<details>
    <summary>Elemento Select</summary>
</details>    

## Eventos

<details>
    <summary>Click</summary>
</details>    

<details>
    <summary>OnLoad</summary>
</details>    

<details>
    <summary>OnChange</summary>
</details>    

<details>
    <summary>OnMouseOver e OnMouseOut</summary>
</details>    

<details>
    <summary>OnMouseDown e OnMouseUp</summary>
</details>    

## Event Listener

<details>
    <summary>AddEventListener()</summary>
</details>    

<details>
    <summary>Adicionando um manipulador de eventos</summary>
</details>    

<details>
    <summary>Vários métodos em um mesmo elemento</summary>
</details>    

<details>
    <summary>Passagem de Parâmetro</summary>
</details>    

## Bibliografia
    
- **LINDEN, M.G.V**, JavaScript: Eventos e Objetos Nativos. [s.d.] Disponível em <http://docplayer.com.br/17393758-Javascript-eventos-e-objetos-nativos.html>. Acesso em: 08 dez.2021
    
- **MDN WEB DOCS**, Array. 2012. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array>. Acesso em: 08 dez. 2021
    
- **MDN WEB DOCS**, JavaScript. 2016. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript>. Acesso em: 08 dez. 2021    
    
- **MDN WEB DOCS**, Math. 2014. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math>. Acesso em: 08 dez. 2021        
    
- **MDN WEB DOCS**, Modelo de Objeto de Documento (DOM). 2013. Disponível em: <https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM>. Acesso em: 08 dez. 2021
    
- **MDN WEB DOCS**, String. 2021. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String>. Acesso em: 08 dez. 2021
    
- **W3SCHOOLS**    , W3Schools. 2021. Disponível em: <https://www.w3schools.com/>. Acesso em: 08 dez. 2021.
