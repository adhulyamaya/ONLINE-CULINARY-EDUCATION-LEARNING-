import React, { useState } from 'react';

const UserNav = () => {

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "9px",
    paddingTop: "20px",
    background: "rgba(240, 232, 240, 0.5)",
   
  };
  
  const [notificationCount, setNotificationCount] = useState(3);
  return (
    <nav style={headerStyle}>
     <ul style={{ listStyle: "none", display: "flex", gap: "30px", marginLeft: "auto" }}>
        <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
        <li style={{ marginRight: "10px" }}><a href="/about">About</a></li>
        <li style={{ marginRight: "10px" }}><a href="/contact">Contact</a></li>
        <div className="notification-icon">
        
        <span className="icon">
         <i className="fas fa-bell"></i>
       </span>
       <span className="notification-count">{notificationCount}</span>
     </div> 
      </ul>

       
    </nav>
  )
}

export default UserNav


