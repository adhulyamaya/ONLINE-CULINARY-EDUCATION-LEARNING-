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

// //capture likely error
// const onError = (data, actions) => {
//     setErrorMessage("An Error occured with your payment ");
// };

//   useEffect(() => {
//     if (success) {
//       alert("Payment successful!!");
//       console.log('Order successful. Your order id is--', orderID);
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
