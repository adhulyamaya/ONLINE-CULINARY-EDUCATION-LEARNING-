import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios/axios';
import UserNav from './UserNav';
import UserFooter from './UserFooter';

const MyCourses = () => {
  const [mycourse, setMycourses] = useState([]);

  useEffect(() => {
    axiosInstance.get('purchased-courses/')
      .then((res) => {
        console.log(res.data);
        setMycourses(res.data.userdata);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <UserNav />                                                                 


    <div>
      
      <div style={rectangularBoxStyle}>
        <p>This is a rectangular box within MyCourses component.</p>
        {mycourse.map((course, index) => (
           <div key={index}>
           <p>ID: {course.id}</p>
           <p>Student Username: {course.student_username}</p>
           <p>Class Name: {course.class_name.class_name}</p>
           <p>Order Date: {course.order_date}</p>
           <p>Booking Date: {course.booking_date}</p>
           <p>Booking Time: {course.booking_time}</p>
           <p>Order Time: {course.order_time}</p>
           <p>Payment Amount: {course.payment_amount}</p>
           <p>Confirmation Status: {course.confirmation_status ? 'Confirmed' : 'Not Confirmed'}</p>
           <p>Student ID: {course.student}</p>
           <p>Booked Class: {course.booked_class.class_name }</p>
           <p>Booked Clasaaaaaaaaaaas: {course.booked_class.thumbnail }</p>
           <p>Booked Class: {course.booked_class.mentor }</p>
           <img src={course.booked_class.imageUrl} alt="Course Thumbnail" style={{ width: '200px', height: '150px' }} />
         </div>
        ))}
      </div>
      
    </div>
    <UserFooter/>
    </>
  );
};

const rectangularBoxStyle = {
  width: '500px',
  height: '500px',
  border: '2px solid #000',
  padding: '20px',
  margin: '20px',
};

export default MyCourses;


































// const rectangularBoxStyle = {
//   width: '500px',          // Set the width of the box
//   height: '500px',         // Set the height of the box
//   border: '2px solid #000', // Set border with a color
//   padding: '20px',         // Set padding inside the box
//   margin: '20px',          // Set margin around the box
// };

// export default MyCourses;