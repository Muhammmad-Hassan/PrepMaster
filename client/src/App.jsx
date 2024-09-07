import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";


// import RouteWrapper from "./components/RouteWrapper.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import TeacherSignIn from "./pages/auth/TeacherSignIn.jsx";
import TeacherSignUp from "./pages/auth/TeacherSignUp.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />}  />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/techersigin" element={<TeacherSignIn/>}/>
          <Route path="/techersignup" element={<TeacherSignUp/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
