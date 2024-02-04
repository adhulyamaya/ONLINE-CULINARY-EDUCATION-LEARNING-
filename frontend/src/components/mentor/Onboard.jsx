import React from "react";
import {
  changeFullname,
  changeEmail,
  changeBio,
  changeExpertise,
  changeExperience,
  changeAge,
  changeImage,
  changeAddress,
  changeCertificate,
  changeAvailabilityStartTime,
  changeAvailabilityEndTime
} from "../../feautures/mentorSlice/mentorOnboardSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../axios/mentoraxios";

const Onboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mentoronboard = useSelector((state) => state.mentoronboard);
  const location = useLocation();
  const mentorId = location.state?.mentorId || null;

  const mentorSubmit = () => {
    const datas = {
      mentor_id: mentorId,
      fullname: mentoronboard.value.fullname,
      email: mentoronboard.value.email,
      bio: mentoronboard.value.bio,
      expertise: mentoronboard.value.expertise,
      experience: mentoronboard.value.experience,
      age: mentoronboard.value.age,
      image: mentoronboard.value.image,
      address: mentoronboard.value.address,
      certificate: mentoronboard.value.certificate,
      availability_start_time: mentoronboard.value.availability_start_time,
      availability_end_time: mentoronboard.value.availability_end_time,
    };

    axiosInstance.post("mentoronboard/", datas).then((res) => {
      if (res.data.message === "success") {
        navigate("../mentorlogin");
      }
    });
  };

  return (
    <form className="mt-4 mb-4 m-4">
      <div className="form-group mb-1">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Full Name"
          onChange={(e) => dispatch(changeFullname(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          className="form-control"
          id="bio"
          placeholder="Bio"
          onChange={(e) => dispatch(changeBio(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="expertise">Expertise</label>
        <input
          type="text"
          className="form-control"
          id="expertise"
          placeholder="Expertise"
          onChange={(e) => dispatch(changeExpertise(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="experience">Experience</label>
        <input
          type="text"
          className="form-control"
          id="experience"
          placeholder="Experience"
          onChange={(e) => dispatch(changeExperience(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          className="form-control"
          id="age"
          placeholder="Age"
          onChange={(e) => dispatch(changeAge(e.target.value))}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="image">Profile Image</label>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile02"
              onChange={(e) => dispatch(changeImage(e.target.files[0]))}
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-1">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          onChange={(e) => dispatch(changeAddress(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="certificate">Certificate</label>
        <input
          type="text"
          className="form-control"
          id="certificate"
          placeholder="Certificate"
          onChange={(e) => dispatch(changeCertificate(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="availability_start_time">Availability Start Time</label>
        <input
          type="time"
          className="form-control"
          id="availability_start_time"
          onChange={(e) => dispatch(changeAvailabilityStartTime(e.target.value))}
        />
      </div>
      <div className="form-group mb-1">
        <label htmlFor="availability_end_time">Availability End Time</label>
        <input
          type="time"
          className="form-control"
          id="availability_end_time"
          onChange={(e) => dispatch(changeAvailabilityEndTime(e.target.value))}
        />
      </div>
      <button className="btn btn-primary" type="button" onClick={mentorSubmit}>
        Mentor Sign Up
      </button>
    </form>
  );
};

export default Onboard;
