import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your Main, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
