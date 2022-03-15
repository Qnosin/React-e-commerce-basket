//Hooks and main React lib
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//css file
import './index.css';
//Components
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import BasketPage from './Pages/BasketPage';
import { BasketContext } from './context/BasketContext';
//React Router
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
// States
import { configureStore } from '@reduxjs/toolkit';



ReactDOM.render(
  <React.StrictMode>
   <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

