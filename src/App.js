import './App.css';
import React from "react";

import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;1,200&family=Raleway:wght@675&display=swap');
      </style>
      <About />
      <Project />
    </div>
  );
}

export default App;
