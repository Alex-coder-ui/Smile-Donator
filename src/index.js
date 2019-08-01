import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/css/style.css'
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root'));

