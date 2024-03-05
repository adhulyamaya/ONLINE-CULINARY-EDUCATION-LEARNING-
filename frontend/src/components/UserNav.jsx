// import React, { useState,useEffect} from 'react';

// const UserNav = () => {

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "9px",
//     paddingTop: "20px",
//     background: "rgba(240, 232, 240, 0.5)",
   
//   };
  
//   const [notificationCount, setNotificationCount] = useState(0);
//   useEffect(() => {
//     const newSocket = new WebSocket('ws://localhost:8000/ws/notification/');

//     newSocket.onopen = () => {
//       console.log('WebSocket connection opened');
//     };
//     newSocket.onmessage = (event) => {
//       const newNotification = JSON.parse(event.data);
//       // Handle the received notification, update the UI, or show a notification
//       console.log('Received notification:', newNotification);
//       setNotificationCount((prevCount) => prevCount + 1);
//     };

//     newSocket.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     return () => {
//       newSocket.close();
//     };
//   }, []);
//   return (
    // <nav style={headerStyle}>
    //  <ul style={{ listStyle: "none", display: "flex", gap: "30px", marginLeft: "auto" }}>
    //     <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
    //     <li style={{ marginRight: "10px" }}><a href="/about">About</a></li>
    //     <li style={{ marginRight: "10px" }}><a href="/contact">Contact</a></li>
    //     <div className="notification-icon">
        
    //     <span className="icon">
    //      <i className="fas fa-bell"></i>
    //    </span>
    //    <span className="notification-count">{notificationCount}</span>
    //  </div> 
    //   </ul>

       
    // </nav>
//   )
// }

// export default UserNav


// import React, { useEffect, useState } from 'react';

// const useNav = () => {
//   const [notification, setNotification] = useState('');

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:3000/ws');

//     socket.addEventListener('open', (event) => {
//       console.log('WebSocket connected:', event);
//     });

//     socket.addEventListener('message', (event) => {
//       console.log(event.data,"eventooo")
//       try {
//         const data = JSON.parse(event.data);
//         console.log(data.content, 'is it getting that');
  
//         if (data.type === 'notification' && data.content) {
//           setNotification(data.content);
//         }
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//       }
//     });
//     // socket.addEventListener('close', (event) => {
//     //   console.log('WebSocket closed:', event);
//     // });

//     // return () => {
    
//     //   socket.close();
//     // };
//   }, []);

//   return (
//     <div>
//           <nav >
//      <ul style={{ listStyle: "none", display: "flex", gap: "30px", marginLeft: "auto" }}>
//         <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
//         <li style={{ marginRight: "10px" }}><a href="/about">About</a></li>
//         <li style={{ marginRight: "10px" }}><a href="/contact">Contact</a></li>
//         <div className="notification-icon">
        
//         <span className="icon">
//          <i className="fas fa-bell"></i>
//        </span>
//        <span className="notification-count"> <p>{notification}</p>  </span>
//      </div> 
//       </ul>

       
//     </nav>
//       {/* Display notification in your UI */}
     
//     </div>
//   );
// };

// export default useNav;
import React, { useEffect, useState } from 'react';

const useNav = () => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/ws');

    socket.addEventListener('open', (event) => {
      console.log('WebSocket connected:', event);
    });

    socket.addEventListener('message', (event) => {
      console.log(event.data, 'eventooo');
      try {
        const data = JSON.parse(event.data);
        console.log(data.content, 'is it getting that');

        if (data.type === 'notification' && data.content) {
          setNotification(data.content);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "30px", marginLeft: "auto" }}>
          <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
          <li style={{ marginRight: "10px" }}><a href="/about">About</a></li>
          <li style={{ marginRight: "10px" }}><a href="/contact">Contact</a></li>
          <div className="notification-icon">
            <span className="icon">
              <i className="fas fa-bell"></i>
            </span>
            <span className="notification-count"> <p>{notification}</p>  </span>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default useNav;
