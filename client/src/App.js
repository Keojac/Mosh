import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar.js'
import Home from './components/Homepage';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
