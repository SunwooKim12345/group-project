import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './CSS/App.css';
import Home from './components/Home';
import Instruction from './components/Instruction';
import PreviousCourses from './components/PreviousCourses';
import Login from './components/Login';
import SelectCourses from './components/SelectCourses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="instruction" element={<Instruction />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/previous-courses" element={<PreviousCourses />}/>
      <Route path="/select-courses" element={<SelectCourses />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
