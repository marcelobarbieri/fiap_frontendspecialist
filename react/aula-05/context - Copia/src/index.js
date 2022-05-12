import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MuiThemes from './Utils/Common/MuiThemes';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes/RouteController';
import { InfoContextProvider } from './store/InfoContext';

//npm install react-router-dom@6
ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      <BrowserRouter>
        <InfoContextProvider>
          <Routes />
        </InfoContextProvider>
      </BrowserRouter>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();