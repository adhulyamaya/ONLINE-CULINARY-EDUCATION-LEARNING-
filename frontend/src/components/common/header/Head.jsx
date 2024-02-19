import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../authUtils";
import Cookies from "js-cookie";


const Head = () => {
  const navigate = useNavigate();

  const logoutSubmit = () => {
    Cookies.remove("userDetails");
    Cookies.remove("accessToken");

    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");

    navigate("../");
  };

  const profileSubmit = () => {
    navigate("../user-profile");
  };

  const signUpSubmit = () => {
    navigate("../signup");
  };

  const mentorSubmit = () => {
    navigate("../mentorsignup");
  };

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            {/* <h1 style={{ color: "darkorange" }}>
              S <span style={{ color: "red" }}>K &nbsp;</span>
              <span style={{ color: "white" }}>Cooks</span>
            </h1> */}
            {/* <h1>E-COOKS</h1> */}
            <h1 style={{color: 'white'}}>E-COOKS</h1>

            <span style={{ color: "gray" }}>
              ONLINE CULINARY EDUCATION & LEARNING
            </span>
          </div>

          <div>
            {isAuthenticated() ? (
              <>
                <button
                  style={{ color: "black", backgroundColor: "gray" }}
                  onClick={profileSubmit}
                >
                  Profile
                </button>
                <button
                  style={{ color: "red", backgroundColor: "gray" }}
                  onClick={logoutSubmit}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                style={{ color: "black", backgroundColor: "gray" }}
                onClick={signUpSubmit}
              >
                Sign Up
              </button>
            )}
            
            <button
              style={{ color: "green", backgroundColor: "gray" , borderLeft: "1px solid black",}}
              onClick={mentorSubmit}
            >
              Become a Mentor
            </button>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
