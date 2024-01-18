import "./App.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/additional/Loader";
import Mentorssignup from "./components/mentor/Mentorssignup";
import MentorLogin from "./components/mentor/MentorLogin";
import Onboard from "./components/mentor/Onboard";
import Mentorsmanage from "./components/admin/Mentorsmanage";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import MentorDashboard from "./components/mentor/MentorDashboard";
import ClassManagement from "./components/mentor/ClassManagement";
import AddClass from "./components/mentor/AddClass";
import EditClass from "./components/mentor/EditClass"
import DeleteClass from "./components/mentor/DeleteClass";
import CourseManage from "./components/admin/CourseManage";
import Chekout from "./components/checkout/Chekout";
import Ordersucess from "./components/order/Ordersucess";
import VideoPlayer from "./components/videoclass/VideoPlayer";
import { VideoRoom } from "./components/videoclass/VideoRoom";

// using LazyLoader for codesplitting - intial loading faster ( lazy() + <Suspense> ) */}

const Userlogin = lazy(() => import("./components/Userlogin"));
const Usersignup = lazy(() => import("./components/Usersignup"));
const Home = lazy(() => import("./components/home/Home"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const Adminlogin = lazy(() => import("./components/admin/Adminlogin"));
const AdminHome = lazy(() => import("./components/admin/Adminhome"));
const AdminProfile = lazy(() => import("./components/admin/AdminProfile"));
const Create = lazy(() => import("./components/admin/Create"));
const EditUser = lazy(() => import("./components/admin/EditUser"));
const DeleteUser = lazy(() => import("./components/admin/DeleteUser"));
const CourseHome= lazy (() => import("./components/allcourses/CourseHome") );

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? <Loader /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense>
          <Routes>
            {/* user routes */}
            <Route path="/login" element={<Userlogin />} />
            <Route path="/signup" element={<Usersignup />} />
            <Route
              path="/"
              element={
                <LoaderWrapper>
                  <Home />
                </LoaderWrapper>
              }
            />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseHome />} />
            <Route  path="/team" element={<Team />} />
            <Route  path="/pricing" element={<Pricing />} />
            <Route  path="/journal" element={<Blog />} />
            <Route  path="/contact" element={<Contact />} />
            <Route path="/checkout/:courseId" element={<Chekout />} />
            <Route path="/ordersuceess" element={<Ordersucess/>}/>
            <Route path="/videoplayer" element={<VideoPlayer/>}/>
            <Route path="/videoroom" element={<VideoRoom/>}/>



            {/* admin routes */}
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/delete/:id" element={<DeleteUser />} />
            <Route path="/mentorsmanage" element={<Mentorsmanage />} />
            <Route path="/coursemanage" element={<CourseManage />} />

            {/* {mentor routes} */}
            <Route path="/mentorsignup" element={<Mentorssignup />} />
            <Route path="/mentorlogin" element={<MentorLogin />} />
            <Route path="/mentoronboard" element={<Onboard />} />
            <Route path="/mentordashboard" element={<MentorDashboard />} />
            <Route path="/classmanagement" element={<ClassManagement />} />
            <Route path ="/addclass" element={<AddClass/>}/>
            <Route path="/classmanagement/editclass/:id" element={<EditClass />} />
            <Route path="/classmanagement/deleteclass/:id" element={<DeleteClass />} />

          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
