import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar.js'
import Home from './components/Homepage';
import Categories from './components/Categories';
import EventCategory from './components/EventCategory';
import Profile from './components/User/Profile';
import Form from './components/Form';
import Register from './components/User/Register';
import Login from './components/User/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/categories" element={<Categories />} />
        <Route path="/events/:category" element={<EventCategory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events/new" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
