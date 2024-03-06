// import React, { useEffect, useState } from 'react';

// const useNav = () => {  
//   const [notification, setNotification] = useState('');
//   const [isWebSocketOpen, setIsWebSocketOpen] = useState(false);

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:8000/ws/notification/');

//     socket.addEventListener('open', (event) => {
//       console.log('WebSocket connectionnnn opened:', event);
//       setIsWebSocketOpen(true);
//     });
//     socket.addEventListener('message', (event) => {
//       console.log('WebSocket message received:', event.data);
//       try {
//         const data = JSON.parse(event.data);
//         console.log(data.type);
//         console.log('Parsed data:', data);

//       if (data.type === 'notification') {
//         console.log(data.notification.content, 'Notification content');
//         setNotification(data.notification.content);
//         console.log(data.notification.content, 'msg varunnundoo');
//         }
//       } catch (error) {
//         console.error('Error ppppppppppppppppparsing JSON:', error);
//       }
//     });

//     // socket.addEventListener('close', (event) => {
//     //   console.log('WebSocket closed:', event);
//     //   setIsWebSocketOpen(false);
//     // });

//     return () => {
//     if (socket.readyState === WebSocket.OPEN) {
//       console.log('Component unmounted, closing WebSocket');
//       socket.close();
//     }
//   };
//   }, []);

//   return (
//     <div>
//       <nav>
//         <ul style={{ listStyle: "none", display: "flex", gap: "30px", marginLeft: "auto" }}>
//           <li style={{ marginRight: "10px" }}><a href="/">Home</a></li>
//           <li style={{ marginRight: "10px" }}><a href="/about">About</a></li>
//           <li style={{ marginRight: "10px" }}><a href="/contact">Contact</a></li>
//           <div className="notification-icon">
//             <span className="icon">
//               <i className="fas fa-bell"></i>
//             </span>
//             <span className="notification-count"> <p>{notification}</p>  </span>
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default useNav;



import React,{useState} from 'react'
import './UseNav.css'


const UserNav = () => {
  const [active, setActive]=useState('false')
  const navToggle = () => {
    setActive(!active);
  };
  return (
    <nav className='nav'>
      <a href="" className='nav_brand'>E-COOKS</a>
      <ul className='nav_item'>
          <li ><a href="/">Home</a></li>
          <li ><a href="/about">About</a></li>
          <li ><a href="/contact">Contact</a></li>    
      </ul>
      <div onClick={navToggle} className='nav_toggler'>
        <div className='line1'></div>
        
      </div>
                          
    </nav>
  )
}

export default UserNav
