import React from 'react';
import { setClassname, setDescription, setPrice, setSyllabus } from "../../feautures/mentorSlice/addClassSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';

const AddClass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const mentorId = useSelector((state) => state.mentorsignup.value.mentorId);

  
  if (mentorId) {
    console.log('Mentor ID is stored in Redux state:', mentorId);
  } else {
    console.log('Mentor ID is not available in Redux state');
  }

  const createclass = useSelector((state) => state.createclass);

  const createClassSubmit = () => {
    const datas = {
      classname: createclass.value.classname,
      description: createclass.value.description,
      price: createclass.value.price,
      syllabus: createclass.value.syllabus,
      mentorId: mentorId, 
    };

    
    console.log(datas, "create class details");

    axiosInstance.post('addclass/', datas)
      .then((res) => {
        console.log(res.data, "created class datas kitiyonn");
        if (res.data.message === "success") {
          navigate('../classmanagement');
        }
      })
      .catch((error) => {
        // Handle errors
      });
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h1>ADD new class</h1>
        <form>
          <div>
            <label htmlFor="classname">CLASSNAME:</label>
            <input type="text" name='classname' className='formcontrol' onChange={e => dispatch(setClassname(e.target.value))} />

            <label htmlFor="classname">DESCRIPTION:</label>
            <input type="text" name='description' className='formcontrol' onChange={e => dispatch(setDescription(e.target.value))} />

            <label htmlFor="classname">PRICE:</label>
            <input type="text" name='price' className='formcontrol' onChange={e => dispatch(setPrice(e.target.value))} />

            <label htmlFor="classname">SYLLABUS:</label>
            <input type="text" name='syllabus' className='formcontrol' onChange={e => dispatch(setSyllabus(e.target.value))} />
          </div>
        </form>
        <button className='btn btn-info' onClick={createClassSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddClass;


