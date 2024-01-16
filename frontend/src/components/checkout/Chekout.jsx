// import React from 'react'
// import Head from '../common/header/Head'
// import Hero from '../home/hero/Hero'
// import Back from '../common/back/Back'

// const Chekout = () => {

//   return (
//     <>
//     <Back />
    

//     <div>

//      <p> pay now</p> 

//     </div>

  

//     </>
//   )
// }

// export default Chekout


// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer
// } from "@paypal/react-paypal-js";

// // This value is from the props in the UI
// const style = {"layout":"vertical"};

// function createOrder() {
//   // replace this url with your server
//   return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       // use the "body" param to optionally pass additional order information
//       // like product ids and quantities
//       body: JSON.stringify({
//           cart: [
//               {
//                   sku: "1blwyeo8",
//                   quantity: 2,
//               },
//           ],
//       }),
//   })
//       .then((response) => response.json())
//       .then((order) => {
//           // Your code here after create the order
//           return order.id;
//       });
// }
// function onApprove(data) {
//   // replace this url with your server
//   return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           orderID: data.orderID,
//       }),
//   })
//       .then((response) => response.json())
//       .then((orderData) => {
//           // Your code here after capture the order
//       });
// }

// // Custom component to wrap the PayPalButtons and show loading spinner
// const ButtonWrapper = ({ showSpinner }) => {
//   const [{ isPending }] = usePayPalScriptReducer();

//   return (
//       <>
//           { (showSpinner && isPending) && <div className="spinner" /> }
//           <PayPalButtons
//               style={style}
//               disabled={false}
//               forceReRender={[style]}
//               fundingSource={undefined}
//               createOrder={createOrder}
//               onApprove={onApprove}
//           />
//       </>
//   );
// }

// export default function App() {
//   return (
//       <div style={{ maxWidth: "750px", minHeight: "200px" }}>
//           <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
//               <ButtonWrapper showSpinner={false} />
//           </PayPalScriptProvider>
//       </div>
//   );
// }



import { CLIENT_ID } from '../../config/Config'
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);

    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div>
                <div className="wrapper">
                    <div className="product-img">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
                            alt="SunFlower"
                            height="320"
                            width="300" />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1>Sunflower</h1>
                        </div>
                        <div className="product-price-btn">
                            <p>$20</p>
                            <br></br>
                            <button className='buy-btn' type="submit" onClick={() => setShow(true)}>
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
                <br></br>
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