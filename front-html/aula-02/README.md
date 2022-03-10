# Aula 2 - Listas, Links, Imagens, Divs e Posicionamento

> Links

[BEM](https://en.bem.info/methodology/)

[Normalize](https://necolas.github.io/normalize.css/)

[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

## Listas

### <details><summary>Ordenadas</summary>

<p>A tag **<ol>** define uma lista ordenada (numerada).
Use a tag **<ol>** junto com a tag **<li>** para criar os itens da lista.</p>

<p>A lista será exibida no navegador com uma numeração à esquerda do item.</p>

```html
<ol>
  <li>Web</li>
  <li>Mobile</li>
  <li>Games</li>
</ol>
```

```
1. Web
2. Mobile
3. Games
```

</details>

### <details><summary>Não Ordenadas</summary>

</details>

### <details><summary>Definição</summary>

</details>

## Links

### Links Internos

### Links Externos

### Links em Novas Abas

## Imagens

## DIVS

### Tamanho das DIVS

### Largura Máxima - Mínima

Caso a largura não seja definida, o padrão utilizado é **100%**, ou seja, todo a largura da janela.
Este é um padrão para elementos chamados de BLOCK.

Seria o mesmo que definir o estilo abaixo:

```css
div {
  width: 100%;
}
```

### Altura

Caso a altura não seja definida, o padrão utilizado é **auto**, ou seja, conforme você insere conteúdo ele aumenta.

Seria o mesmo que definir o estilo abaixo:

```css
div {
  height: auto;
}
```

> min-height

Padrão quando não informado:

```css
div {
  min-height: auto;
}
```

> max-height

## Box Model

### Margin

Espaçamento externo.

### Border

### Padding

Espaçamento interno.
Adiciona o padding ao tamanho do elemento.

### Sizing

Não permite adicionar o padding

```css
.box {
  box-sizing: border-box;
}
```

## Float - Display

### Float

### Clear

### Display

## Position

### Static

### Relative

### Absolute

### Fixed

## Unidades de Medida

### Pixel (px)

Valores definidos em pixels (px) nunca mudam.

### Porcentagem (%)

Valor definidos em percentual (%) tem relação com o tamanho do elemento pai (onde ele foi inserido/ posicionado)

### VH-VW

### EM

### REM
