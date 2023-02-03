import React from "react";
import Landing from "./components/Landing"
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
