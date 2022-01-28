# Aula 2

## Desvios Condicionais

### Projeto JogoONG

Nova **Pasta/ Arquivos**
js/
**script.js**
**index.html**

index.html

```
<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogo ONG
        </title>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
```

script.js

```
let idade=parseInt(prompt("Digite a sua idade:"));
if(idade>=12){
    alert("Você pode jogar!");
} else {
    alert("Sua idade não permite que você jogue!");
}
```
