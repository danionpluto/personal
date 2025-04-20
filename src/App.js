import logo from './logo.svg';
import React from "react";
//import Navbar from "./components/NavBar";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Speaking from './pages/speaking';
import SignUp from './pages/signup';

function Navbar () {
  return (
    <nav >
      <Link className = {"link-styles2"} to="/">Dani Ramos Ojeda</Link>
      <Link className = {"link-styles"} to="/projects">Projects</Link>
      <Link className = {"link-styles"} to="/speaking">Speaking</Link>
      <Link className = {"link-styles"} to="/about">About</Link>
      <Link className = {"link-styles"} to="/contact">Contact</Link>
      
    </nav>
   )
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
