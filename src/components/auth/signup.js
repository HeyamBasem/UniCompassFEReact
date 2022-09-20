import React, { Component } from 'react'
import cForm from '../util/cForm2.png'; 
import pngwing from '../util/pngwing.com.png'

export default class SignUp extends Component {
  render() {
    return (
      <div className='rootAuthSignUp'>
        <div className='imageContainerAuthPage'>
          <img src={pngwing} alt="pngwing.com.png" className="signupImg" />
        </div>
        <div className="auth-inner-signup">
          <form align='left'>
            <div className="formHeader">
              <img src={cForm} alt="cForm.png" className="imgForForm" />
              <h3 align="right"><i> Sign UP <br/><br/>Uni Compass</i></h3>
            </div>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
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
}