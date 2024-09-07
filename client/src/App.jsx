import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./feature/authSlice.jsx";



// import RouteWrapper from "./components/RouteWrapper.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import TeacherSignIn from "./pages/auth/TeacherSignIn.jsx";
import TeacherSignUp from "./pages/auth/TeacherSignUp.jsx";
import ProtectedRoutes from "./Protected/ProtectedRoutes.jsx";
import Student from "./pages/Student.jsx";
import TeacherGreeting from "./pages/TeacherGreeting.jsx";


function App() {
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  let authtoken = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("app.jsx token : ", token)
    dispatch(login(token));
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed
  
    // Clear the timer on component unmount (cleanup)
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
        <Route
              path="*"
              element={ <h1>404 error</h1>} />
            
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />}  />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/techersigin" element={<TeacherSignIn/>}/>
          <Route path="/techersignup" element={<TeacherSignUp/>}/>
          <Route path="/techer" element={<TeacherGreeting/>}/>
          <Route
              path="/student"
              element={
                <ProtectedRoutes user={authtoken}>
                  <Student />
                </ProtectedRoutes>
              }
            />
        </Routes>
      </Router>
    </>
  );
}

export default App;
