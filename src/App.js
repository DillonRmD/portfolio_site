import './App.css';
import React from "react";

import Project from "./components/Project";
import About from "./components/About"

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
