import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import io from "socket.io-client"; 

const Navbar = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    // paddingTop: "20px", // Adjust the value and unit as needed
    background: "#f0e8f0",
   
  };
  const navigate = useNavigate();

  const logoutSubmit = () => {
    Cookies.remove("userDetails");
    Cookies.remove("accessToken");
    navigate("../mentorlogin");
  };

  const logoutButtonStyle = {
    padding: "10px 10px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  
  // useEffect(() => {
  //   // Connect to the WebSocket server
  //   const socket = io("ws://your-django-server/ws/notifications/");

  //   // Listen for incoming notifications
  //   socket.on("send_notification", (data) => {
  //     // Update UI with the received notification data
  //     console.log("Booking notification received:", data.message);
  //   });

  //   // Cleanup on component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);


  return (
    <nav style={headerStyle}>
      <div>
        <h1>E-Cooks </h1>
      </div>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
      
        <li><button style={logoutButtonStyle} onClick={logoutSubmit}>LOGOUT</button></li>
        {/* <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li> */}
      </ul>
    </nav>
   
  );
};

export default Navbar;
