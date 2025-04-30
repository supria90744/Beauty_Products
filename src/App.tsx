

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";



const App: React.FC = () => {
  return (


    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
 
  );
};

export default App;