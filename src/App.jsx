import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/DashBord/EmployeeDashboard";
import AdminDashboard from "./Components/DashBord/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContext } from "./Context_Store/AuthProvider";

const App = () => {
  // State to track the logged-in user role
  const [user, setUser] = useState(null);

  // Context for employee and admin data
  const [userData, setUserData] = useContext(AuthContext);

  // State to hold the logged-in user's details
  const [loggedInUser, setLoggedUser] = useState(null);

  // Load logged-in user data from localStorage on component mount
  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUserData");
    if (loggedInUserData) {
      const parsedData = JSON.parse(loggedInUserData);
      setUser(parsedData.role); // Set the user role
      setLoggedUser(parsedData.data || null); // Set the user details
    }
  }, []);

  // Handle user login
  const handleLogin = (email, password) => {
    // Ensure authentication data is available
    if (!userData) {
      alert("Authentication data is not available");
      return;
    }

    // Admin login logic
    if (email === "admin@example.com" && password === "1234") {
      setUser("admin"); // Set role as admin
      setLoggedUser(userData.admin || null); // Set admin details
      localStorage.setItem(
        "loggedInUserData",
        JSON.stringify({ role: "admin", data: userData.admin })
      );
    } 
    // Employee login logic
    else if (userData) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee"); // Set role as employee
        setLoggedUser(employee); // Set employee details
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials"); // Show error for invalid login
      }
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.setItem("loggedInUserData", ""); // Clear localStorage
    setUser(""); // Reset user role
  };

  return (
    <>
      {/* Show Login component if no user is logged in */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) 
      // Show AdminDashboard for admin users
      : user === "admin" ? (
        <AdminDashboard
          loggedInUserData={loggedInUser}
          handleLogout={handleLogout}
        />
      ) 
      // Show EmployeeDashboard for employee users
      : (
        <EmployeeDashboard
          loggedInUserData={loggedInUser}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default App;
