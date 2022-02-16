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

> Validando Números
<details><summary></summary>
</details>    

> Validação Automática
<details><summary></summary>
</details>    

> Elemento Radio
<details><summary></summary>
</details>    

> Elemento Select
<details><summary></summary>
</details>    

## Eventos

> Click
<details><summary></summary>
</details>    

> OnLoad
<details><summary></summary>
</details>    

> OnChange
<details><summary></summary>
</details>    

> OnMouseOver e OnMouseOut
<details><summary></summary>
</details>    

> OnMouseDown e OnMouseUp
<details><summary></summary>
</details>    

## Event Listener

> AddEventListener()
<details><summary></summary>
</details>    

> Adicionando um manipulador de eventos
<details><summary></summary>
</details>    

> Vários métodos em um mesmo elemento
<details><summary></summary>
</details>    

> Passagem de Parâmetro
<details><summary></summary>
</details>    

## Bibliografia
    
- **LINDEN, M.G.V**, JavaScript: Eventos e Objetos Nativos. [s.d.] Disponível em <http://docplayer.com.br/17393758-Javascript-eventos-e-objetos-nativos.html>. Acesso em: 08 dez.2021
    
- **MDN WEB DOCS**, Array. 2012. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array>. Acesso em: 08 dez. 2021
    
- **MDN WEB DOCS**, JavaScript. 2016. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript>. Acesso em: 08 dez. 2021    
    
- **MDN WEB DOCS**, Math. 2014. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math>. Acesso em: 08 dez. 2021        
    
- **MDN WEB DOCS**, Modelo de Objeto de Documento (DOM). 2013. Disponível em: <https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM>. Acesso em: 08 dez. 2021
    
- **MDN WEB DOCS**, String. 2021. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String>. Acesso em: 08 dez. 2021
    
- **W3SCHOOLS**    , W3Schools. 2021. Disponível em: <https://www.w3schools.com/>. Acesso em: 08 dez. 2021.
