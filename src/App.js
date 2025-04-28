import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Speaking from './pages/speaking';
import SignUp from './pages/signup';
import { NavLink } from 'react-router-dom';
import './index.css';

function Navbar () {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "link-styles active" : "link-styles"}
      >Home</NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? "link-styles active" : "link-styles"}
      >About</NavLink>

      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "link-styles active" : "link-styles"}
      >Projects</NavLink>

      <NavLink 
        to="/speaking" 
        className={({ isActive }) => isActive ? "link-styles active" : "link-styles"}
      >Speaking</NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "link-styles active" : "link-styles"}
      >Contact
      </NavLink>

      <a
        href="/DanielaRamosOjedaResume.pdf" // Replace with your resume's actual path
        download="DaniRamosOjedaResume.pdf" // Optional: The file name you want users to see
        className="link-styles"
        style={{ marginLeft: '0px' }} // Adjust the margin as needed
      >
        Resume
      </a>
    </nav>
  );
}


function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/about" element={<About />} />
              
              
              <Route
                  path="/contact"
                  element={<SignUp />}
              />
          </Routes>
      </Router>
  );
}


export default App;
