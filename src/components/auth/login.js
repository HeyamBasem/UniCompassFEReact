import React,{useState} from 'react';
import pngwing from '../util/pngwing.com.png'
import cForm from '../util/cForm2.png';
import axios from "axios";


import { useNavigate} from 'react-router-dom';



export default function Login() {
  const [data,setData] = useState({
    username:"",
    password:""
  })

  const {username,password} = data;

  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    data.username = username.toString();
    data.password = password.toString();
    console.log('test');
    e.preventDefault();
    console.log(data);
    try {
      const res = await axios.post("https://squid-app-j7kro.ondigitalocean.app/login/", data)
      console.log({res});
      console.log("after response ",res.data === 1)
      if (res.data === 1) navigate('/userProfile',{username: data.username});

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
        <div className="auth-inner-signin">
        <form align='left' onSubmit={submitHandler}>
          <div className="formHeader">
            <img src={cForm} alt="cForm.png" className="imgForForm" />
              <h3 align="right"><i> Sign In <br/><br/>Uni Compass</i></h3>
            </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              name="username"
              value={username}
              onChange={changeHandler}
              type="text"
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
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" name="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot < a href="#" >password?</a>
          </p>
        </form>
        </div>
      </div>
    )

}