import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Self from "./Self/Self";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  ,
  document.getElementById('root')
);


