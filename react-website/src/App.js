import logo from './logo.svg';
import React from "react";
//import Navbar from "./components/NavBar";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/signup';

function Navbar () {
  return (
    <nav>
      <Link className = {"link-styles"} to="/">Home</Link>
      <Link className = {"link-styles"} to="/about">About</Link>
      <Link className = {"link-styles"} to="/signup">Contact</Link>
      
    </nav>
   )
}

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              
              <Route
                  path="/sign-up"
                  element={<SignUp />}
              />
          </Routes>
      </Router>
  );
}


export default App;
