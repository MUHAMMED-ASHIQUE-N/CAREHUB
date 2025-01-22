import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/contact-Us" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App