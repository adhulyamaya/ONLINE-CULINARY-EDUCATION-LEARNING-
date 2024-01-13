import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MentorHeader = () => {
  const navigate = useNavigate();
  const [mentorName, setMentorName] = useState('');

  useEffect(() => {
    const userObj = Cookies.get("userDetails");
    if (userObj) {
      const { name } = JSON.parse(userObj);
      setMentorName(name);
    }
  }, []);

  const logoutSubmit = () => {
    Cookies.remove("userDetails");
    Cookies.remove("accessToken");
    navigate("../mentorlogin");
  };

  return (
    <div style={headerStyle}>
      <div style={leftSectionStyle}>WELCOME {mentorName}</div>
      <div style={rightSectionStyle}>
        <button style={logoutButtonStyle} onClick={logoutSubmit}>
          Logout
        </button>
      </div>
    </div>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  background: "#f0f0f0",
};

const leftSectionStyle = {
    flex: 1,
    marginRight: "10px",
    textTransform: "uppercase",
  };

const rightSectionStyle = {
  flex: 0.2,
  textAlign: "right",
};

const logoutButtonStyle = {
  padding: "5px 10px",
  background: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default MentorHeader;
