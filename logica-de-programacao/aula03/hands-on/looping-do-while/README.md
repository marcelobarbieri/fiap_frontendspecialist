# Looping do-while

## Quantidade

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
            Looping Do While
        </title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <h2>Quantidade</h2>
        <input type="number" id="num1">
        <input type="number" id="num2">
        <input type="button" value="Contar" onclick="quantidade()">
        <p id="resultado"></p>        
    </body>
</html>  
```

</details>

<details>
    <summary>script.js</summary>
        
```js
function quantidade() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num=num1;
    let res = 0;    

    do{
        num++;
        if(num%2==0){
            res++;
        }
    } while(num<num2);
    
    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}  
```    
        
</details>
