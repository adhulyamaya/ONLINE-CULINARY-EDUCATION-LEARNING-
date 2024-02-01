// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axios/adminaxios';

// const Adminlogin = () => {
//   const navigate = useNavigate();
//   const [adminUsername, setAdminUsername] = useState('');
//   const [adminPassword, setAdminPassword] = useState('');
//   const [error, setError] = useState(null);

//   const loginSubmit = (e) => {
//     e.preventDefault();

  //   const datas = {
  //     username: adminUsername,
  //     password: adminPassword,
  //   };

  //   axiosInstance.post('adminlogin/', datas)
  //     .then((res) => {
  //       const tokens = {
  //         access: res.data.access,
  //         refresh: res.data.refresh,
  //       };
  //       localStorage.removeItem('userDetails');
  //       localStorage.setItem('adminDetails', JSON.stringify(res.data.userdataa));
  //       localStorage.setItem('accessToken', JSON.stringify(res.data.access));
  //       if (res.data.message === 'success') {
  //         navigate('/admin-home');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setError('Invalid credentials. Please check your username and password.');
  //     });
  // };

//   return (
//     <div className="wrapper">
//       <form className="p-3 mt-3" onSubmit={loginSubmit}>
//         <div className="form-field d-flex align-items-center">
//           <span className="far fa-user"></span>
//           <input
//             type="text"
//             name="userName"
//             id="userName"
//             placeholder="Username"
//             value={adminUsername}
//             onChange={(e) => setAdminUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-field d-flex align-items-center">
//           <span className="fas fa-key"></span>
//           <input
//             type="password"
//             name="password"
//             id="pwd"
//             placeholder="Password"
//             value={adminPassword}
//             onChange={(e) => setAdminPassword(e.target.value)}
//           />
//         </div>
//         <button className="btn mt-3" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Adminlogin;


import React, { useState } from "react";
import "./adminlogin.css";
import axiosInstance from "../../axios/adminaxios";
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
    const [adminUsername, setUsername] = useState("");
    const [adminPassword, setPassword] = useState("");
    const [error,setError]=useState(null);
    const navigate=useNavigate();
    
    const handleSignup = (e) => {
        e.preventDefault();
        
        console.log("Signup details:", { adminUsername,  adminPassword });
        const datas = {
          username: adminUsername,
          password: adminPassword,
        };
    
        axiosInstance.post('adminlogin/', datas)
          .then((res) => {
            const tokens = {
              access: res.data.access,
              refresh: res.data.refresh,
            };
            localStorage.removeItem('userDetails');
            localStorage.setItem('adminDetails', JSON.stringify(res.data.userdataa));
            localStorage.setItem('accessToken', JSON.stringify(res.data.access));
            if (res.data.message === 'success') {
              navigate('/admin-home');
            }
          })
          .catch((error) => {
            console.error(error);
            setError('Invalid credentials. Please check your username and password.');
          });
      };
   

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                <form onSubmit={handleSignup}>
                    <h1>Sign Up</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                value={adminUsername}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={adminPassword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                {/* <div className="text">
                    Already have an account? <span>Login</span>
                </div> */}
            </div>
        </>
    );
};

export default SignupForm;








// import { useState, useEffect } from "react";
// import "./adminlogin.css";

// function App() {
//     const initialValues = {
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//     };

//     useEffect(() => {
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors, formValues, isSubmit]);
//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         if (!values.username) {
//             errors.username = "Username is required!";
//         }
//         if (!values.email) {
//             errors.email = "Email is required!";
//         } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!";
//         }
//         if (!values.password) {
//             errors.password = "Password is required";
//         } else if (values.password.length < 4) {
//             errors.password = "Password must be more than 4 characters";
//         } else if (values.password.length > 10) {
//             errors.password = "Password cannot exceed more than 10 characters";
//         }
//         if (values.password !== values.confirmPassword) {
//             errors.confirmPassword = "Those passwords didn’t match. Try again.";
//         }
//         return errors;
//     };

//     return (
//         <>
//             <div className="bgImg"></div>
//             <div className="container">
//                 {Object.keys(formErrors).length === 0 && isSubmit ? (
//                     <div className="ui message success">
//                         Signed in successfully
//                     </div>
//                 ) : (
//                     console.log("Entered Details", formValues)
//                 )}

//                 <form onSubmit={handleSubmit}>
//                     <h1>Sign Up</h1>
//                     <div className="ui divider"></div>
//                     <div className="ui form">
//                         <div className="field">
//                             <label>Username</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 placeholder="Choose a username"
//                                 value={formValues.username}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <p>{formErrors.username}</p>
//                         <div className="field">
//                             <label>Email</label>
//                             <input
//                                 type="text"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={formValues.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <p>{formErrors.email}</p>
//                         <div className="field">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={formValues.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <p>{formErrors.password}</p>
//                         <div className="field">
//                             <label>Confirm Password</label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 placeholder="Confirm password"
//                                 value={formValues.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <p>{formErrors.confirmPassword}</p>
//                         <button className="fluid ui button blue">Submit</button>
//                     </div>
//                 </form>
//                 <div className="text">
//                     Already have an account? <span>Login</span>
//                 </div>
//             </div>{" "}
//         </>
//     );
// }

// export default App;