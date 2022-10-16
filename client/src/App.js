import React from "react";
// import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Slots from "./pages/Slots";
// import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About"
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpForm/>} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
