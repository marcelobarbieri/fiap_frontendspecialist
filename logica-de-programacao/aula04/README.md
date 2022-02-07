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

### Tipos:

<details><summary>Object</summary>

Tipo genérico de objeto. Usado para representar qualquer objeto criado com *new*

> Métodos
- toString(): transforma qualquer objeto em uma representação
- stringvalueOf(): converte qualquer objeto em seu valor primitivo

> Exemplo

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

<details><summary>Number</summary>

Usado para representar números como objetos.

A principal utilidade é disponibilizar algumas constantes globais:
    
|Função|Valor|
|:---|:---:|
|Number.MAX_VALUE|1.79e+308|
|Number.MIN_VALUE|5e-324|    
|Number.NaN|NaN|
|Number.POSITIVE_INFINITY|-Infinity|
|Number.NEGATIVE_INFINITY|Infinity|
    
> Funções:
    
- toFixed()

```js
var n = new Number("80.90674");    
/* o método toFixed retorna o número de casas decimais definidas dentro do parâmetro */    

alert(n.toFixed());    
/* com os parâmetros vazios, ele retorna um número sem casas decimais. */    
/* resultado: 81 (arredondou para 81) */        
    
alert(n.toFixed(3));    
/* para obter a quantidade de casas decimais desejadas, declarar dentro dos parenteses */    
/* resultado: 81 (arredondou para 80.907) */            
```

- toPrecision()   
    
```js
var n = new Number("54.47849");    
    
alert(n.toPrecision());    
/* este parâmetro é opcional */    
/* - vazio, retornará o número informado */
/* - preenchido retornará o número com a quantidade de dígitos definida no parâmetro */    
/* resultado: 54.47849 */    
    
alert(n.toPrecision(1));    
/* resultado: 5e+1 */    
/* retorna em notação científica, cabe dentro de 1 */    
/* obs.: com precisão menor que 3, o número será convertido para notação científica */    
    
alert(n.toPrecision(5));        
/* retorna o número com a quantidade de dígitos definida no parâmetro */    
/* resultado: 54.478 */        
/* retorna um número igual ao informado com 5 dígitos */     
```
    
- toExponential()
    
```js
/* o parâmetro nessa função é opcional */    
/* se for passado algum parâmetro deve estar compreendido entre 0 e 20 */
    
var n = new Number("54.47849");    
alert(n.toExponential());    
/* aqui se não for passado nenhum parâmetro, */
/* o número será transformado em notação científica, */
/* com a precisão necessária para representar o número todo */    
/* resultado: 5.447849e+1 */    
    
var n = new Number("54.47849");    
alert(n.toExponential(5));    
/* se for declarado um parâmetro, nesse exemplo 5, */    
/* o número será transformado em notação científica, */    
/* com a precisão possível ao número declarado */    
/* resultado: 5.44785e+1 */    
```    
    
</details>    

<details><summary>String</summary>

String é uma palavra, texto ou número, colocados preferencialmente dentro de aspas duplas, ou simples.
    
```js
var x = new String("Criando uma String");    
alert(x);    
/* será apresentado em uma caixa de alerta*/    
/* resultado: Criando uma String */    
``` 

> Funções:
    
- lenght   
    
```js
/* lenght retorna o tamanho da String */    
/* conta todos os caracteres, inclusive os espaços */    
    
var x = new String("Criando um String");
alert(x.length);    
/* resultado: 18 */    
```    

- charAt()
    
```js
var x = new String("Criando uma String");
alert(x.charAt(4));    
/* resultado: n */    
/* esse método retorna a posição indicada no parâmetro e começa na posição 0 */    
/* nesse caso, como foi passado como parâmetro o número 4, o resultado será n */
/* (na posição 4 da string fica a letra n) */    
/* se fosse na posição 7, por exemplo, a janela apareceria vazia, */    
/* representando o espaço em branco, pois ele também entra na contagem */    
```    

- charCodeAt()

```js
var x = new String("Criando uma String");
alert(x.charCodeAt(x.lenght - 1));    
/* resultado: 67 */    
/* o método charCodeAt retorna da mesma forma que charAt, */    
/* só que no padrão Unicode */        
```
    
> Padrão **Unicode**

O que aparece como texto na tela está armazenado como *valores numéricos* no arquivo de texto.
O computador traduz os valores numéricos em *caracteres visíveis*.
Ele faz isso usando um *padrão de codificação*.
Um padrão de codificação é um esquema numérico que atribui cada caractere de texto, em um conjunto de caracteres, a um valor numérico.
Um conjunto de caracteres pode incluir caracteres alfa-numéricos, números e outros símbolos. 
*Idiomas diferentes consistem normalmente de conjuntos diferentes de caracteres.*    
Muitos padrões de codificação diferentes existem para representar os conjuntos de caracteres usados em idiomas diferentes.    
    
- concat()
    
```js
var x = new String("Criando uma String");    
alert(x.concat(" e concatenado com outra"));    
/* resultado: criando uma string e concatenando com outra o método concat, concatena duas strings */    
```    
  
- fromCharCode()
    
```js
var x = new String();
alert(String.fromCharCode(66));    
/* resultado: B */    
/* método estático (acessado direto da classe String) */    
/* converte o valor unicode para uma string */    
/* exemplo: o valor unicode da letra a é... */    
```
    
- indexOf()
    
```js
var x = new String("Criando uma String");    
alert(x.indexOf("uma"));    
/* retorna a posição de uma determinada string */    
/* nesse exemplo uma, começa na posição 8 */    
/* resultado: 8 */     
```    
    
- lastIndexOf()
    
```js
var x = new String("String. Criando uma String");    
alert(x.lastIndexOf("String"));    
/* resultado: 20 */    
/* retorna a última posição de uma determinada string */    
/* nesse exemplo string, começa na posição 20 */    
```    
    
- match()
    
```js
/* a função match é usada junto com Regex, que são expressões regulares */    
var x = new String("String. Criando uma String");    
    
var re = /i/; /* sempro dentro de barras */    
alert(x.match(re));    
/* resultado: i */    
    
var re2=/z/;
alert(x.match(re2)); 
/* como a letra z não está presente na string, o retorno é null*/
```   
    
- replace()
    
```js
/* substitui uma determinada string por outra em um texto */    
var x = new String("String.Criando uma String");    
alert(x.replace("String","Teste"));    
/* faz a atualização na primeira ocorrência da palavra String */    
/* resultado: Teste. Criando uma Teste */    
```    
    
- substring()
    
```js
/* recorta uma determinada string, especificada dentro do parênteses */    

var x = new String("String. Criando uma String");
alert(x.substring(7,15));    
/* resultado: Criando */    
```    
    
- substr()
    
```js
/* é o mesmo que substring(), só que mais rigoroso */
    
/* também tem dois parâmetro e extrai os caracteres entre dois índices especificados */    
/* informa o parâmetro do índice inicial, nesse caso o C, e mais 15 caracteres na frente */    

    
var x = new String("String. Criando uma String");
alert(x.substr(7,15));    
/* resultado: Criando uma St */     
    
alert(x.substr(15,7));    
/* se o número maior vier primeiro ele não dará retorno */    
/* resultado: sem retorno */    
```        

- split()    
    
```js
/* Faz o recorte com base em um separador */    
var x = new String("String, Criando uma String");    
alert(x.split(",") [0]);    
/* Resultado: Criando uma String */    
```    
    
- toUpperCase() e toLowerCase()

```js
/* o primeiro deixa o texto em letras maiusculas e o segundo em letras minúsculas */    
var x = new String("String, Criando uma String");    
alert(x.toUpperCase());    
alert(x.toLowerCase());        
/* resultado: STRING, CRIANDO UMA STRING */    
/* resultado: string, criando uma string */
```    
    
</details>    

<details><summary>Date</summary>
    
O objeto Date utiliza datas disponíveis no sistema operacional da máquina que está rodando o script.
Ao solicitar para o JavaScript, data e hora atual, estas serão recuperadas do SO do computador do usuário.
Se forem alteradas, isso terá consequências no script utilizado.
Deve-se observar a diferença nos dois horários.    
    
Lembrete: Existem funções no objeto Date que servem para trabalhar a hora local e a hora mundial. A hora é determinada pelo meridiano de Greenwich, que serve de referência 
para calcular distâncias em longitudes e estabelecer fusos horários. Cada fuso horário corresponde a uma faixa de quinze graus de longitude de largura, sendo a hora de Greenwich chamada de Greenwich Mean Time (GMT). Alguém que está no Brasil, não poderá se orientar, se uma vídeo conferência for marcada na hora local da Inglaterra, por exemplo. Mas se for feita, no horário mundial, os envolvidos, terão a mesma referência. Isto é resolvido, com as funções que têm UTC = Universal Time Coordinated.
    
UTC = GMT (Greewich Mean Time)
Hora Brasil = Hora GMT - 3 Horas
    
> Funções:
    
- Construtor
    
```js
// sem parâmetros: retorna o dia e a hora atual
var data = new Date();
alert(data);    
    
// com strings
var data = new Date("Dec/03/1958 11:20:30");    
alert(data);    
// resultado: Wed Dec 03 1958 11:20:30 GMT-0200 (Hora oficial do Brasil)    
    
var data = new Date(1986,4,24,8,30);
// começa o mês em zero
alert(data);
// resultado: Thu Apr 24 08:30:00 UTC-0300 1986    
```    
    
- Hora Local e Universal
    
```js
// diferença entre hora local e hora universal
var data = new Date();
alert(`Hora local ${data.getHours()}`);    
alert(`Hora universal ${data.getUTCHours()}`);    
    
// formato americano
var data = new Date("Dec/22/2013 09:51:20");    
alert(`Hora local ${data.getHours()}`);    
alert(`Hora universal ${data.getUTCHours()}`);        
```    

- Método get()
    
```js
// os métodos gets são para recuperar uma informação
var dias = ["Domingo","segunda","terça","quarta","quinta","sexta","sábado"];    
    
// construtor vazio, retorna a hora atual    
var data = new Date(); 
    
alert(data.getHours());         // retorna a hora
alert(data.getMilliseconds());  // retorna os milissegundos
alert(data.getMinutes());       // retorna os minutos
alert(data[data.getDay()]);     // retorna o dia da semana
alert(data.getDate());          // retorna o dia do mês
alert(data.getFullYear());      // ano com quatro dígitos
```   
    
- Método set()
    
```js
var dias = ["Domingo","segunda","terça","quarta","quinta","sexta","sábado"];    
    
var mes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];    
    
var data = new Date("Oct/17/2021 13:30:40");    
data.setFullYear(2016);
data.setDate(04);    
data.setMonth(11);
    
alert(data);
```    
    
</details>    

<details><summary>Math</summary>
    
O objeto Math auxilia na criação de scripts para realizar operações matemáticas. Este objeto não precisa de um construtor. Para os outro objetos cria-se um new, mas math tem as funções e as propriedades estáticas (acesso direto pela classe Math.) As propriedades do objeto são constantes matemáticas notáveis.

> Funções

```js
alert(Math.PI);                 // valor de PI = 3.14...
alert(Math.abs(-5.9));          // número absoluto = 5.9
alert(Math.max(5.9,6,12,-80));  // maior número = 12
alert(Math.round(12.7));        // arredonda para o inteiro mais próximo = 13
alert(Math.ceil(12.2));         // arredonda para cima = 13
alert(Math.floor(12.9));        // arredonda para baixo = 12
alert(Math.pow(3,2));           // exponencial = 9
alert(Math.sqrt(16));           // raiz quadrada = 4
``` 

> Número Aleatórios    

Um gerador de números aleatórios é um dispositivo computacional ou físico que gera uma sequência de números ou símbolos sem qualquer padrão, (pseudo)aleatoriamente. Ele gera números entre 0 e 1. Em JavaScript esses números são gerados com o método random() do objeto Math que permite obter números (pseudo)aleatórios para diversos usos em scripts.
    
- random()
    
```js
```    
    
> Funções Diversas
    
```js
alert(Math.log(5));     // logaritmo de 5   
alert(Math.sin(5));     // retorna o seno do angulo informado
alert(Math.cos(5));     // retorna o cosseno do angulo informado
alert(Math.tan(5));     // retorna a tangente do angulo informado
alert(Math.asin(0));    // retorna o valor em radianos, representando o arco, cujo seno foi informado
alert(Math.acos(0));    // retorna o valor em radianos, representando o arco, cujo cosseno foi informado
alert(Math.atan(0));    // retorna o valor em radianos, representando o arco, cujo tangente foi informado
alert(Math.atan2(2,2)); // retorna o valor numérico entre -pi e pi, representando o arco em radianos, cuja atangente é igual ao quociente dos parâmetros informados
```    
    
</details>    


<!--
<details><summary>Number</summary>

</details>    
-->
