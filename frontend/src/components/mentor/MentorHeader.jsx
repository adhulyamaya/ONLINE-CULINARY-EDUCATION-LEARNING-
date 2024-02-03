// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// const MentorHeader = () => {
//   const navigate = useNavigate();
//   const [mentorName, setMentorName] = useState('');

//   // useEffect(() => {
//   //   const userObj = Cookies.get("userDetails");
//   //   if (userObj) {
//   //     const { name } = JSON.parse(userObj);
//   //     setMentorName(name);
//   //   }
//   // }, []);

  // const logoutSubmit = () => {
  //   Cookies.remove("userDetails");
  //   Cookies.remove("accessToken");
  //   navigate("../mentorlogin");
  // };

//   return (
//     <div style={headerStyle}>
//       <div style={leftSectionStyle}>WELCOME {mentorName}</div>
//       <div style={rightSectionStyle}>
//         <button style={logoutButtonStyle} onClick={logoutSubmit}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// const headerStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "10px",
//   background: "#8d63be",
// };

// const leftSectionStyle = {
//     flex: 1,
//     marginRight: "10px",
//     textTransform: "uppercase",
//   };

// const rightSectionStyle = {
//   flex: 0.2,
//   textAlign: "right",
// };

// const logoutButtonStyle = {
//   padding: "5px 10px",
//   background: "#dc3545",
//   color: "#fff",
//   border: "none",
//   borderRadius: "3px",
//   cursor: "pointer",
// };

// export default MentorHeader;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    // paddingTop: "20px", // Adjust the value and unit as needed
    background: "#f0e8f0",
   
  };
  const navigate =useNavigate
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
