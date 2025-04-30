import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";

// const Home: React.FC = () => <h2>Home Page</h2>;
// const About: React.FC = () => <h2>About Page</h2>;
// const Contact: React.FC = () => <h2>Contact Page</h2>;
// const Login: React.FC = () => <h2>Login Page</h2>;
// const Register: React.FC = () => <h2>Register Page</h2>;

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
