import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./Components/aboutus";
import Contact from "./Components/contactus";
import Menu from "./Components/menu";
import Navbar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
