import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios/mentoraxios';
import MentorHeader from "./MentorHeader";
import MentorSidebar from "./MentorSidebar";
import io from 'socket.io-client';

const PurchasedCourses = () => {
  const [userdata, setUserdata] = useState([]);
  const socket = io('ws://localhost:8000/ws/notification/');
  useEffect(() => {
    // Establish a socket connection
    const socket = io('http://127.0.0.1:8000/');

    // Listen for booking confirmation events
    socket.on('bookingConfirmed', (confirmedOrderId) => {
      // Update the state locally to reflect the change
      setUserdata((prevData) => {
        return prevData.map((item) => {
          if (item.id === confirmedOrderId) {
            // Update only the confirmed field or any other field you need
            return { ...item, confirmed: true };
          }
          return item;
        });
      });
    });

    return () => {
      // Clean up the socket connection on component unmount
      socket.disconnect();
    };
  }, []); // Run this effect only once on component mount


  const confirmationHandle = (id) => {
    axiosInstance.post(`confirm-booking/${id}/`)
    .then((res) => {
      console.log("Booking confirmed successfully");
      // Update the state locally to reflect the change
    //   setUserdata(prevData => {
    //     return prevData.map(item => {
    //       if (item.id === id) {
    //         // Update only the confirmed field or any other field you need
    //         return { ...item, confirmed: true };
    //       }
    //       return item;
    //     });
    //   });
    // }) const socket = io('http://your-server-url'); // Replace with your server URL
        socket.emit('bookingConfirmed', id);
      })

      .catch((error) => {
        console.error("Error confirming booking:", error);
      });
  };

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
             <th style={{ paddingRight: '30px' }}>ORD ID</th>
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
                <td>{item.id}</td>
                <td>{item.student_username}</td>
                <td>{item.class_name}</td>
                <td>{item.payment_amount}</td>
                <td>{item.booking_date}</td>
                <td>{item.booking_time}</td>
                    <td>
                  {item.confirmed ? (
                    <span style={{ color: 'green' }}>Confirmed</span>
                  ) : (
                    <button onClick={() => confirmationHandle(item.id)} className='btn btn-sm btn-primary' disabled={item.confirmed}>
                      {item.confirmed ? 'Confirmed' : 'Confirm'}
                    </button>
                  )}
                </td>       
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
