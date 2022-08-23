import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar.js'
import Home from './components/Homepage';
import Categories from './components/Categories';
import EventCategory from './components/EventCategory';
import IndividualEvent from './components/IndividualEvent';
import Profile from './components/User/Profile';
import Form from './components/Form';
import Register from './components/User/Register';
import Login from './components/User/Login';

function App() {
  // all events
  const [events, setEvents] = useState(null)
  // all users
  const [users, setUsers] = useState(null)
  // currently logged in user
  const [currentUser, setCurrentUser] = useState(null)
  // authorisation
  const [authorised, setAuthorised] = useState(null)
  // navigate for redirecting
  const navigate = useNavigate()

  // Fetching all events and setting them in the events variable

  const getEvents = async () => {
    const url = "/events"
    const res = await fetch(url)
    const data = await res.json()
    setEvents(data)
  }

  useEffect(() => {
    getEvents()
  }, [])

  // Fetching all users and setting them in the users variable


  const getUsers = async () => {
    const url = "/users"
    const res = await fetch(url)
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  // Setting authorisation for the register route

  const handleAuth = (authed) => {
    setAuthorised(authed.authorised)
    setCurrentUser(authed.user)
    navigate("/")
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/categories" element={<Categories />} />
        <Route path="/events/:category" element={events && <EventCategory events={events} />} />
        <Route path="/events/:category/:eventID" element={users && events && <IndividualEvent events={events} users={users} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events/new" element={<Form />} />
        <Route path="/register" element={<Register handleRegister={handleAuth} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
