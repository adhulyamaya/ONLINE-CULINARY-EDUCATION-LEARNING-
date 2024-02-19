import React from 'react'
import MentorHeader from "./MentorHeader";
import MentorSidebar from "./MentorSidebar";

const PurchasedCourses = () => {
  return (
    <> 
    <div style={{ display: "flex" }}>
    <MentorSidebar/>
      <div style={{ flex: 1, padding: "20px", margin: 0 }}>
      <MentorHeader />
      
    </div>
    </div>
    </>
  )
}

export default PurchasedCourses
