import React from "react";

import "./globle.css";
import { useDispatch, useSelector } from "react-redux";
import { getServicesFetch } from "./actions/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Services } from "./components/Services";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
function App() {
  const dispatch = useDispatch();

  const services = useSelector((state: any) => state.fetchServices.services);
  // const helloServices = () => {
  //   dispatch(getServicesFetch());
  //   console.log("services", services);
  // };
  return (
    <Router>
      <NavBar />
      <Hero />
      {/* <Routes>
        <Route path="services" element={<Services />} />
      </Routes> */}
      <Services />
    </Router>
  );
}

export default App;
