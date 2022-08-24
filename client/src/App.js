import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar.js'
import Home from './components/Homepage';
import Categories from './components/Categories';
import EventCategory from './components/EventCategory';
import IndividualEvent from './components/IndividualEvent';
import Profile from './components/User/Profile';
import MyEvents from './components/MyEvents';
import Form from './components/Form';
import Edit from './components/Edit';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import EditProfile from './components/User/EditProfile';


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
    // console.log(authed);
    setAuthorised(authed.success)
    setCurrentUser(authed.user)
    navigate("/")
  }

  // Check login status/ authorisation

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const res = await fetch(`/is-authenticated`)
      const data = await res.json()
      setAuthorised(data.success)
      setCurrentUser(data.user)
    }
    checkIfLoggedIn()
  }, [])

  // Logout function

  const handleLogout = () => {
    setAuthorised(false)
    navigate("/")
  }

  // Edit Event Function

  const handleEdit = async (edit, index, image) => {
    const formData = new FormData()
    for (let key in edit) {
      formData.append(key, edit[key])
    }
    formData.append("image", image)
    const res = await fetch(`/profile/edit-event/${edit.id}`, {
      method: "PUT",
      body: formData,
    })
    const editedEvents = await res.json()
    setEvents([
      ...events.slice(0, index),
      editedEvents,
      ...events.slice(index + 1),
    ])
  }

    // Edit Profile Function

    const handleProfileEdit = async (profile, index, image) => {
      const formData = new FormData()
      for (let key in profile) {
        formData.append(key, profile[key])
      }
      formData.append("image", image)
      console.log(...formData)
      const res = await fetch(`/profile/edit-profile/${profile.id}`, {
        method: "PATCH",
        body: formData,
      })
      const editedProfile = await res.json()
      setUsers([
        ...users.slice(0, index),
        editedProfile,
        ...users.slice(index + 1),
      ])
      navigate("/profile/" + profile.id)
    }

  // Delete Event Function

  const handleDelete = async (eventID) => {
    await fetch(`/profile/edit-event/${eventID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/ json"
      }
    })
    setEvents(events.filter((event) => event.id !== eventID))
  }

  // Create Event Function

  const createEvent = (fields, image) => {
    const formData = new FormData()
    for (let key in fields) {
      formData.append(key, fields[key])
    }
    formData.append("image", image)
    fetch("/events/new", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setEvents([...events, data])
        navigate("/profile/" + currentUser.id)
      })
  }

  return (
    <div className="App">
      <NavBar authorised={authorised} handleLogout={handleLogout} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/categories" element={<Categories />} />
        <Route path="/events/:category" element={events && <EventCategory events={events} />} />
        <Route path="/events/:category/:eventID" element={users && events && <IndividualEvent events={events} users={users} />} />
        <Route path="/profile/:userID" element={users && events && <Profile currentUser={currentUser} events={events} users={users} />} />
        <Route path="/profile/:userID/myevents" element={users && events && <MyEvents currentUser={currentUser} events={events} />} />
        <Route path="/events/new" element={users && <Form createEvent={createEvent} user={currentUser} />} />
        <Route path="/profile/edit-event/:eventID" element={users && events && <Edit events={events} currentUser={currentUser} handleEdit={handleEdit} handleDelete={handleDelete} />} />
        <Route path="/register" element={<Register handleRegister={handleAuth} />} />
        <Route path="/login" element={<Login handleLogin={handleAuth} />} />
        <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        <Route path="/profile/edit-profile/:userID" element={users && <EditProfile currentUser={currentUser} users={users} handleProfileEdit={handleProfileEdit} />} />
      </Routes>
    </div>
  );
}

export default App;
