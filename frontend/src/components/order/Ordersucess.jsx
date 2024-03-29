// import { VideoRoom } from '../videoclass/VideoRoom';
// import VideoPlayer from '../videoclass/VideoPlayer';

// import Hero from '../home/hero/Hero';
// import Back from '../common/back/Back';
// import axiosInstance from "../../axios/mentoraxios";
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { useLocation } from "react-router-dom";
// import io from 'socket.io-client';



// const Ordersucess = () => { 
//   const [joined, setJoined] = useState(false);
//   const [orderDetails, setOrderDetails] = useState(null);
//   const location = useLocation();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedAmPm, setSelectedAmPm] = useState('AM');
//   const [loading, setLoading] = useState(false);
//   const { state } = useLocation(); // Access state
//   const orderId = location.state?.orderId || null;
//   console.log(orderId,"order id .........")


//   const [confirmed, setConfirmed] = useState(false);
//   useEffect(() => {
//     const socket = io('ws://localhost:8000/ws/booking/');
//     socket.on('bookingConfirmed', (confirmedOrderId) => {
//       if (confirmedOrderId === orderId) {
//         setConfirmed(true);
//       }
//     });
//     return () => {
//       socket.disconnect();
//     };

       
//   }, [orderId]);


//   const mentorIdCookie = Cookies.get('mentorId');
//   const mentorId = mentorIdCookie ? JSON.parse(decodeURIComponent(mentorIdCookie))?.id : null;
//   console.log(mentorId,"......mentor id...")

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const handleAmPmChange = (event) => {
//     setSelectedAmPm(event.target.value);
//   };
  
//      const handleBook = () => {
//       setLoading(true); 
//       const bookingData = {
//         orderId: orderId,
//         selectedDate: selectedDate,
//         selectedTime: selectedTime,
//       };
//       console.log(bookingData)
//       axiosInstance.post('booking/', bookingData)
//         .then((response) => {
//           console.log(response.data);
        
//           setJoined(true);
//         })
//         .catch((error) => {
//           console.error('Error booking:', error);
//         })
//         .finally(() => {
//           setLoading(false); 
//         });
//   };
//       return ( 
//         <div>
//           <Back/>
//           <div className="App">
//           <h1>Order ID: {orderId}</h1>
//             <p>Payment successfully completed</p>
//             <h1>BOOK YOUR TIME</h1>
            // <form>
            //   <label>
            //     Date:
            //     <input type="date" value={selectedDate} onChange={handleDateChange} />
            //   </label>
            //   <br />
            //   <label>
            //     Time:
            //     <input type="time" value={selectedTime} onChange={handleTimeChange} />
            //     <select value={selectedAmPm} onChange={handleAmPmChange}>
            //       <option value="AM">AM</option>
            //       <option value="PM">PM</option>
            //     </select>
            //   </label>
//               <button type="button" onClick={handleBook} disabled={loading}>
//                 {loading ? 'Checking Availability...' : 'Book'}
//               </button>
//             </form>
//             {confirmed ? (
//                   <p>Your order has been confirmed!</p>
//                 ) : (
//                   <p>Waiting for confirmation...</p>
//                 )}



//             {/* {!joined && (
//               <button onClick={() => setJoined(true)}>
//                 Join Room
//               </button>
//             )}


//             {joined && <VideoRoom />} */}
//           </div>
          
//         </div>
//       );
// }

// export default Ordersucess;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';

import Back from '../common/back/Back';

const Ordersuccess = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAmPm, setSelectedAmPm] = useState('AM');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOrderId(location.state?.orderId || null);
  }, [location.state]);

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
    setLoading(true);
    const bookingData = {
      orderId: orderId,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
    };

    axiosInstance
      .post('booking/', bookingData)
      .then((response) => {
        console.log(response.data);
        setConfirmed(true);
      })
      .catch((error) => {
        console.error('Error booking:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (confirmed) {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }, [confirmed, navigate]);

  return (
    <div>
      <Back />
      <div className="App">
        <h1>Order ID: {orderId}</h1>
        <p>Payment successfully completed</p>
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
                <select value={selectedAmPm} onChange={handleAmPmChange}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </label>
          <button type="button" onClick={handleBook} disabled={loading}>
            {loading ? 'Checking Availability...' : 'Book'}
          </button>
        </form>
        {confirmed ? (
          <p>Your order has been booked! we will notify the availability details  ...</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Ordersuccess;
