// import { CLIENT_ID } from '../../config/Config'
// import React, { useState, useEffect } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useParams, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// const Checkout = () => {
//   const [show, setShow] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [ErrorMessage, setErrorMessage] = useState("");
//   const [orderID, setOrderID] = useState(false);
//   const { courseId } = useParams();
//   const location = useLocation();
//   const { courseInfo } = location.state || {};

//   console.log("courseId:", courseId);
//   console.log("courseInfo:", courseInfo);

//   const navigate = useNavigate();
//   console.log("courseId:........", courseId);
  
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//         purchase_units: [

//             {
                
//                 amount: {
//                     currency_code: "USD",
//                     value: courseInfo.price,
//                 },
//             },
//         ],
//     }).then((orderID) => {
//             setOrderID(orderID);
//             return orderID;
//         });
// };


// const onApprove = (data, actions) => {
//     return actions.order.capture().then(function (details) {
//         const { payer } = details;
//         setSuccess(true);
//     });
// };

// const onError = (data, actions) => {
//     setErrorMessage("An Error occured with your payment ");
// };

//   useEffect(() => {
//     if (success) {
//       alert("Payment successful!!");
//       console.log('Order successful. Your order id is--', orderID,CLIENT_ID);
//       navigate('../ordersuceess')
//     }
//   }, [success, orderID, navigate]);

//   return (
//     <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
//       <div>
//         {courseId ? (
//           <div className="wrapper">
//             <div className="product-img">
//               <img
                
//                 alt=""
               
//                 height="320"
//                 width="300"
//               />
//             </div>
//             <div className="product-info">
//               <div className="product-text">
//                 <h1>{courseInfo.class_name}</h1>
//               </div>
//               <div className="product-price-btn">
//                 <p>{`$${courseInfo.price}`}</p>
//                 <br></br>
//                 <button
//                   className='buy-btn'
//                   type="submit"
//                   onClick={() => setShow(true)}
//                 >
//                   Buy now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//         <br></br>
//         {show ? (
//           <PayPalButtons
//             style={{ layout: "vertical" }}
//             createOrder={createOrder}
//             onApprove={onApprove}
//             onError={onError}
//           />
//         ) : null}
//       </div>
//     </PayPalScriptProvider>
//   );
// }

// export default Checkout;



import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams, useLocation } from 'react-router-dom';
import { CLIENT_ID } from '../../config/Config';
// import axiosInstance from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
// import { isAuthenticated } from './authUtils'; // Assuming you have an isAuthenticated utility function
import axiosInstance from "../../axios/mentoraxios";



const Checkout = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
   const [orderIdFromBackend, setOrderIdFromBackend] = useState(null);
  const [orderID, setOrderID] = useState(false);
  const { courseId } = useParams();
  const location = useLocation();
  const { courseInfo } = location.state || {};
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     // Redirect to login if not authenticated
  //     navigate('/userlogin');
  //   }
  // }, [navigate]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: courseInfo.price,
          },
        },
      ],
    }).then((orderID) => {
      console.log(orderID)
      setOrderID(orderID);
      console.log(orderID)
      return orderID;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);

      // Send order details, user details, and course details to the backend
      sendDetailsToBackend(orderID, courseInfo);
    });
  };

  const sendDetailsToBackend = (orderID, courseInfo) => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const userId = userDetails.id;
    console.log(userId)

    // const datas ={
    //   orderID: orderID,
    //   clientID: CLIENT_ID,
    //   userDetails: userDetails,
    //   courseDetails: courseInfo,
    // }
    // console.log(datas)

    
    axiosInstance.post('storeOrder/', {
      // orderID: orderID,
      // clientID: CLIENT_ID,
      userDetails: userDetails,
      courseDetails: courseInfo,
    })
    .then((response) => {
      console.log('Order details stored on the backend:', response.data);
      const orderIdFromBackend =response.data.order.id
      console.log('Order ID from backend:', orderIdFromBackend);
      // setOrderIdFromBackend(orderIdFromBackend);
      console.log('Order successful. Your order id is--', orderIdFromBackend, CLIENT_ID);
    navigate('/ordersuccess', { state: { orderId: orderIdFromBackend } });

      
    })
    .catch((error) => {
      console.error('Error storing order details on the backend:', error);
    });
  };


  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      const orderId = navigate('/ordersuccess', { state: { orderId: orderIdFromBackend } });
      console.log('Order successful. Your order id is--', orderIdFromBackend, CLIENT_ID);
      console.log('Order successful. Your order id is--', orderIdFromBackend, CLIENT_ID);
      console.log('orderIdFromBackend:', orderIdFromBackend);
      // navigate('/ordersuccess', { state: { orderId: orderIdFromBackend } });
    }
  }, [success, orderIdFromBackend, CLIENT_ID, navigate]);
  
  // useEffect(() => {
  //   if (success) {
  //     alert("Payment successful!!");
  //     console.log('Order successful. Your order id is--', orderID, CLIENT_ID);
  //     navigate('/ordersuccess');
      
  //   }
  // }, [success, orderID, CLIENT_ID, navigate]);

  return (                                                                                          
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div>
        {courseId ? (
          <div className="wrapper">
            <div className="product-img">
              <img
                alt=""
                height="320"
                width="300"
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{courseInfo.class_name}</h1>
              </div>
              <div className="product-price-btn">
                <p>{`$${courseInfo.price}`}</p>
                <br />
                <button
                  className='buy-btn'
                  type="submit"
                  onClick={() => setShow(true)}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <br />
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
  );
  
        }
export default Checkout
