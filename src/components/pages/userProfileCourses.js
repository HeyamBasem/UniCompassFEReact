import React, { useState } from "react";
// import comp.ico from '../../../public'
import cForm from '../util/cForm2.png';
import axios from "axios";

//TODD get name from get function u will define 
export default function UserProfileCourses() {
  const initalData = {
  student: 'هيام',//todo get from profile
  course_name:'مختبر تطبيقات الحاسوب', //todo get  from profile
  mark:'4',
  repeated: ' False',
  hardness: '1',
  studying_time: '1',
  pressure_level: '1',
  semester: 'first'
}
  const [data,setData] = useState({
    // student: 'Heyam',
    // course_name:'',
    // mark:'',
    // repeated: '',
    // hardness: '1',
    // studying_time: '1',
    // pressure_level: '1',
    // semester: 'first'
    student: 'هيام',//todo get from profile
  course_name:'مختبر تطبيقات الحاسوب', //todo get  from profile
  mark:'4',
  repeated: false,
  hardness: '1',
  studying_time: '1',
  pressure_level: '1',
  semester: 'first'
  })
  
  const { course_name, mark, repeated, hardness, studying_time, pressure_level } = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = async (e) => {
    console.log('courses form :))))');
    e.preventDefault();
    try {
          const res = await axios.post("https://squid-app-j7kro.ondigitalocean.app/course_info/", data)
          console.log({res});
          console.log("after response")
        } catch (e) {
          console.log("-----------------------------------");
          console.log(e);
      }
    console.log(data);
    setData(initalData);

  }
  return (
            <div className="auth-inner-course">
            <form onSubmit={submitHandler}>
            <div className="formHeader">
            <img src={cForm} alt="cForm.png" className="imgForForm" />
              <h3 align="right"><i>Your Personal Uni Compass</i></h3>
             
            </div>
            <h6 align="center">Please Fill Your Course info to Improve Uni Compass Analytics Result</h6>
              <div className="mb-3">
                <label>Course name</label>
                <input name="course_name" value={course_name} onChange={changeHandler} type="text" className="form-control" placeholder="Course name" />
              </div>
              <div className="mb-3">
                <label>mark</label>
                <div>
                <select name="mark" value={mark} onChange={changeHandler}>
                    <option value="4">A+</option>
                    <option value="3.75">A</option>
                    <option value="3.5">A-</option>
                    <option value="3.25">B+</option>
                    <option value="3">B</option>
                    <option value="2.5">B-</option>
                    <option value="2">C+</option>
                    <option value="1.5">C</option>
                    <option value="1.25">C-</option>
                    <option value="1">D+</option>
                    <option value="0.75">D</option>
                    <option value="0.5">D-</option>
                    <option value="0">F</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>Repeated ? <br/></label>
                <div>
                <select name="repeated" value={repeated} onChange={changeHandler} >
                    <option value="True">Yes</option>
                    <option value="False">No</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>Hardness rate from 1 as minimum to 10 as maximum value:</label>
                <div>
                <select name="hardness" value={hardness} onChange={changeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>How much u spent studying_time in studying it:</label>
                <div>
                <select name="studying_time" value={studying_time} onChange={changeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>What was the pressure_level level during your study of this subject?:</label>
                <div>
                <select name="pressure_level" value={pressure_level} onChange={changeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
              <div><label></label></div>
              {/* <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Finish
                </button>
              </div> */}
            </form>
          </div>
        )
      
}

  


