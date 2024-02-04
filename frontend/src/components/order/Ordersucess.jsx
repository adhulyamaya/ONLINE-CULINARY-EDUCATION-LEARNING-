import { VideoRoom } from '../videoclass/VideoRoom';
import VideoPlayer from '../videoclass/VideoPlayer';
import Hero from '../home/hero/Hero';
import Back from '../common/back/Back';
import axiosInstance from "../../axios/mentoraxios";
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const Ordersucess = () => { 
  const [joined, setJoined] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAmPm, setSelectedAmPm] = useState('AM');
  const [availableTimes, setAvailableTimes] = useState([]);
  const mentorId = useSelector((state) => state.mentorId);

  

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleAmPmChange = (event) => {
    setSelectedAmPm(event.target.value);
  };
  
  const handleBook = () => {
    // Perform booking logic here
    // For example, send a request to your backend API to handle the booking
    
    // After successful booking, you can set the state to indicate that the user has joined
    setJoined(true);

    // Display any additional messages or perform other actions as needed
    alert('Booking completed successfully');
  };


  // useEffect(() => {
  //   // Fetch available times from your backend API
  //   // Adjust the URL and request method based on your API
  //   axiosInstance.get('mentor-availability/')  // Adjust the endpoint
  //     .then((response) => {
  //       // Assuming the response.data is an array of available time slots
  //       setAvailableTimes(response.data);
  //     })
      
  // }, []);
  useEffect(() => {
    if (mentorId) {
      axiosInstance.get(`mentor-availability/${mentorId}/`)
        .then((response) => {
          setAvailableTimes(response.data);
        })
        .catch((error) => {
          console.error('Error fetching mentor availability:', error);
        });
    }
  }, [mentorId]);
  

  return (
<div>
  {/* <Back/> */}
      <div className="App">
      <p>payment successfully completed</p>
      <h1>BOOK YOUR TIME</h1>

      <form>
          <label>
            Date:
            <input type="date" value={selectedDate} onChange={handleDateChange} />
            
          </label>
          <br />
          <label>
            Time:
            <input type="time" value={selectedTime} onChange={handleTimeChange} />
            <select value={`${selectedTime} ${selectedAmPm}`} onChange={handleTimeChange}>
              {availableTimes.map((timeSlot) => (
                <option key={timeSlot} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          </label>
        </form>
        <button onClick={handleBook}>Book</button>

      {/* {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />} */}
    </div>
    

    </div>  )
}

export default Ordersucess
