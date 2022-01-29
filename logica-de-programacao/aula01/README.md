# Aula 1

> Definição e histórico.

> Fundamentos Básicos da Programação - Tipos de dados, variáveis e estruturas básicas; usando o GIT


## Instalando o Visual Studio Code
### VSCode Extensions

> Color Highlight

> Prettier - Code formatter

## JavaScript
### Um pouco da história
### Tipos de Dados

```js
Boolean
Null
Undefined
Number
String
```

### Tipagem Dinâmica [^1]

JavaScript é uma linguagem de tipagem dinâmica.

Não necessita declarar o tipo de variável antes de sua atribuição.

O tipo será automaticamente determinado quando o programa for processado.

[^1]: Na tipagem dinâmica quando não for informado let ou var, será assumido var


### Declaração de Variável

*let* vs *var* [^2]
|Declaração/ Escopo|Global|Local|Bloco|
|:---|:---:|:---:|:---:|
|*let*[^3] [^4]|x|x|x|
|*var*|x|x||

O que muda é o escopo.

Quando uma variável é declarada com a palavra:

|Declaração|Observações|
|:---|:---|
|*var*|pode corresponder aos escopos global e local|
|*let*|pode corresponder aos escopos gloval, local e de bloco|

[^2]: *var* e *let* são acessíveis em outras funções quando no escopo global e local
[^3]: *let* não são acessíveis em outras funções quando no escopo de bloco
[^4]: Utilizar preferencialmente o let por haver limitação de escopo


### Constantes [^5]

As contantes recebem valores no momento da sua declaração e não podem ter seu valor alterado.

[^5]: As constantes tem escopo de bloco como variáveis declaradas com *let*


### Operadores Aritméticos

|Operador|Descrição|
|:---:|:---|
|+|Adição|
|-|Subtração|
|*|Multiplicação|
|**|Exponenciação|
|/|Divisão|
|%|Módulo, resto da divisão|
|++|Incremento|
|--|Decremento|


## GIT

```ps
git config --global user.email "<email>"
git config --global user.name "<nome>"

git init
git add .
git commit -m "<mensagem>"

git remote add origin <link>
git remote -v
git push -f origin master
``` 
