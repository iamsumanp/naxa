import React from "react";
import "./globle.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Services } from "./components/Services";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Services />
    </Router>
  );
}

export default App;
