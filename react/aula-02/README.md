# Estrutura do React

## Projeto MVC

- Controller
- View
- Model

```ps
src/pages/home/
    HomeController.js
    HomeModel.js
    HomeView.js
```

index.js

```ps
ReactDOM.render(
  <React.StrictMode>
    <HomeController />
  </React.StrictMode>,
```

## React Bootstrap

```ps
npm install react-bootstrap bootstrap@5.1.3
```

index.js

```ps
import 'bootstrap/dist/css/bootstrap.min.css';
```

https://react-bootstrap.github.io/

## Material UI

```ps
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto @mui/icons-material  fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

https://mui.com/
