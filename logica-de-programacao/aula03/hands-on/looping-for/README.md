# Looping for

## Somatório

```
index.html
js/
    script.js
```

<details>
    <summary>index.html</summary>
    
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Looping For
        </title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <h2>Somatório</h2>
        <input type="number" id="num1">
        <input type="number" id="num2">
        <input type="button" value="Somar" onclick="somar()">
        <p id="resultado"></p>
    </body>
</html>  
```

</details>

<details>
    <summary>script.js</summary>
        
```js
function somar() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let res = 0;

    for(let i = num1 + 1; i < num2; i++){
        res += i;
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}
```    
        
</details>
