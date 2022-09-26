import React, { useState } from 'react'
import cForm from '../util/cForm2.png'; 
import pngwing from '../util/pngwing.com.png'

export default function SignUp() {
  const [data,setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })
  
  const {firstname,lastname,email,password} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    console.log('test');
    e.preventDefault();
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
              <label>First name</label>
              <input
                name="firstname" 
                value={firstname}
                onChange={changeHandler}
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input 
                name="lastname" 
                value={lastname}
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