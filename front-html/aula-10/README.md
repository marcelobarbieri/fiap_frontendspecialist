# Sass

> Sass - Syntactically Awesome Style Sheets

> SCSS - Sassy Cascading Style Sheets

## Instalação

```ps
node -v
v16.14.0
```

```ps
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install -g npm@latest

npm -v
8.1.1
```

```ps
npm install -g sass

sass --version
1.49.11 compiled with dart2js 2.16.2
```

## Compilação SCSS

### Manual

```ps
sass .\scss\style.scss:.\css\style.css
```

### Watch

```ps
sass --watch .\scss\style.scss:.\css\style.css
```

## Compilação SASS

### Manual

```ps
sass .\sass\style.sass:.\css\style.css
```

## Minificado

```ps
sass --watch  .\sass\style.sass:.\css\style.min.css --style compressed
```

# Links

https://sass-lang.com/

[Scalable and Modular Architecture for CSS](http://smacss.com/)
