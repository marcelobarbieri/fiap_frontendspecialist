# Aula 4

> Date, String, Math

## Objetos Nativos JavaScript 

- Criados e mantidos pelo navegador para acessar os elementos do documento.
Fazem parte do núcleo da linguagem.

- Nem todos os objetos nativos tem construtores.
Ou seja, não são criado automaticamente.
Exceções: **Global** e **Math**

- Englobam praticamente tudo o que a linguagem oferece.

- Qualquer elemento torna-se um objeto em JavaScript, desde uma string primitiva (que é convertida em objeto quanto necessário) até um array.

![Objetos Nativos](https://github.com/marcelobarbieri/fiap_frontendspecialist/blob/main/assets/objetosnativos.png)

### Tipos

<details><summary>Object</summary>

Tipo genérico de objeto. Usado para representar qualquer objeto criado com *new*

> Métodos
- toString(): transforma qualquer objeto em uma representação
- stringvalueOf(): converte qualquer objeto em seu valor primitivo

<details><summary>Exemplo</summary>

```
index.html
js/
    script.js
```    
    
index.html    
    
```html
<!DOCTYPE html>  
<html>
    <head>
        <title>Objetos Nativos</title>
    </head>
    <body>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>  
```
  
script.js

```js
d=new Date();
alert(d.toString());    
    
n=new Number(1000);
alert(n.valueOf());    
```
</details>
    
</details>    

<details><summary>Number</summary>

</details>    

<!--
<details><summary>Number</summary>

</details>    
-->
