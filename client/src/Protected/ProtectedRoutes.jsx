import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, user }) {
  const token = localStorage.getItem("token");
  console.log("protect :", user)
  return token ? children : <Navigate to={"/"}></Navigate>;
}

export default ProtectedRoutes;
