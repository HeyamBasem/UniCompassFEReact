import React, { useState } from 'react'
import cForm from '../util/cForm2.png';
import pngwing from '../util/pngwing.com.png';
import axios from "axios";
import { useNavigate} from 'react-router-dom';


export default function SignUp() {
  const [data,setData] = useState({
    full_name: "",
    email: "",
    password: ""
  })
  const {full_name,email,password} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    data.full_name= full_name.toString();
    data.email = email.toString();
    data.password = password.toString();
    console.log(data);
    e.preventDefault();
    try {
      const res = await axios.post("https://squid-app-j7kro.ondigitalocean.app/register/", data)
      if (res) navigate('/');
      console.log({res});
      console.log("after response signup")
    } catch (e) {
      console.log("-----------------------------------");
      console.log(e);
  }
  console.log(data);
  }
  return (
      <div className='rootAuthSignUp'>
        <div className='imageContainerAuthPage'>
          <img src={pngwing} alt="pngwing.com.png" className="signupImg" />
        </div>
        <div className="auth-inner-signup">
          <form align='left' onSubmit={submitHandler}>
            <div className="formHeader">
              <img src={cForm} alt="cForm.png" className="imgForForm" />
              <h3 align="right"><i> Sign UP <br/><br/>Uni Compass</i></h3>
            </div>
            <div className="mb-3">
              <label>full name</label>
              <input
                name="full_name"
                value={full_name}
                onChange={changeHandler}
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                name="email"
                value={email}
                onChange={changeHandler}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={changeHandler}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>

      </div>
    )
}