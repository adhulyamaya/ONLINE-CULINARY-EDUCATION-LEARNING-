// import React from "react";
// import { useNavigate } from "react-router-dom";
// import MentorHeaders from "./MentorHeader";

// function MentorDashboard() {
//   const navigate = useNavigate();

//   const classmanagement = () => {
//     navigate("../classmanagement");
//   };
//   return (
//     <>
//       <MentorHeaders />
//       <div>
//         <button onClick={classmanagement}>classmanagement</button>
//       </div>
//     </>
//   );
// }

// export default MentorDashboard;



import React from "react";
import { useNavigate } from "react-router-dom";
import MentorHeader from "./MentorHeader";

const MentorDashboard = () => {
  const navigate = useNavigate();

  const classManagement = () => {
    navigate("../classmanagement");
  };
  const EntrolledStudents = () => {
    navigate("/purchased courses");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={menuItemStyle} onClick={classManagement}>
          Class Management
        </div>
        <div style={menuItemStyle} onClick={EntrolledStudents}>
          Entrolled Students
        </div>
       
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px",margin:0 }}>
        <MentorHeader />
        {/* Your main content goes here */}
      </div>
    </div>
  );
};


const sidebarStyle = {
  width: "210px",
  height:"698px",
  backgroundColor: "#a07fa0",
  color: "#fff",
  padding: "20px",
};

const menuItemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #fff",
};

export default MentorDashboard;
