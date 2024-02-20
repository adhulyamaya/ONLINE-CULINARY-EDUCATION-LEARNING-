import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios/mentoraxios';
import MentorHeader from "./MentorHeader";
import MentorSidebar from "./MentorSidebar";

const PurchasedCourses = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    axiosInstance.get("entrolledstudents/")
      .then((res) => {
        console.log(res.data, "displaying datas in mentor side");
        setUserdata(res.data.userdata);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <> 
    <div style={{ display: "flex" }}>
    <MentorSidebar/>
      <div style={{ flex: 1, padding: "20px", margin: 0 }}>
      <MentorHeader />
      <div className='container'>
      <div style={{ flex: 1, padding: "20px", margin: 0 }}>

      <table className='table'>
          <thead>
            <tr>
              <th style={{ paddingRight: '30px' }}>student name</th>
              <th style={{ paddingRight: '30px' }}>classname</th>
              <th style={{ paddingRight: '20px' }}>paid amount</th>
              <th style={{ paddingRight: '20px' }}>booked date</th>
              <th style={{ paddingRight: '20px' }}>booked time</th>
              <th style={{ paddingRight: '20px' }}>availabilty</th>
              <th style={{ paddingRight: '20px' }}></th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((item) => (
              <tr key={item.id}>

                <td>{item.student_username}</td>
                <td>{item.class_name}</td>
                <td>{item.payment_amount}</td>
                <td>{item.booking_date}</td>
                <td>{item.booking_time}</td>
                <td>availablitity</td>
                
                
                </tr>
            ))}
          </tbody>



          </table>


        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default PurchasedCourses
