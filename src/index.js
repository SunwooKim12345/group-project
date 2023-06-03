import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './CSS/App.css';
import Home from './components/Home';
import Instruction from './components/Instruction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Home/> */}
    <Instruction />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
