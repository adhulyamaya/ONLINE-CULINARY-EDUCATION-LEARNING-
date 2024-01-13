import React from "react";
import { useNavigate } from "react-router-dom";
import MentorHeaders from "./MentorHeader";

function MentorDashboard() {
  const navigate = useNavigate();

  const classmanagement = () => {
    navigate("../classmanagement");
  };
  return (
    <>
      <MentorHeaders />
      <div>
        <button onClick={classmanagement}>classmanagement</button>
      </div>
    </>
  );
}

export default MentorDashboard;
