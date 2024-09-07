import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";


// import RouteWrapper from "./components/RouteWrapper.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />}  />
          <Route path="/SignUp" element={<SignUp />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
