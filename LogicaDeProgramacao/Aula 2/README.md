# Aula 2

## Desvios Condicionais

### Projeto Jogo ONG

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

script.js (exemplo 1)

```
let idade=parseInt(prompt("Digite a sua idade:"));
if(idade>=12){
    alert("Você pode jogar!");
} else {
    alert("Sua idade não permite que você jogue!");
}
```

script.js (exemplo 2)

```
// pessoas até 11 anos não podem jogar
// pessoas com 12 anos, somente com a permissão dos pais
// pessoas acima de 12 anos, podem jogar
let idade=parseInt(prompt("Digite a sua idade:"));
if(idade<12){
    alert("Sua idade não permite que você jogue!");
} else if (idade==12) {
    alert("Você pode jogar com a permissão dos pais!");
} else {
    alert("Você pode jogar!");
}
```
