import React, { Component } from 'react'
import pngwing from '../util/pngwing.com.png'
import cForm from '../util/cForm2.png';  

export default class Login extends Component {
  render() {
    return (
      <div className='rootAuthSignUp'>
        <div className='imageContainerAuthPage'>
          <img src={pngwing} alt="pngwing.com.png" className="signupImg" />
        </div>
        <div className="auth-inner-signin">
        <form align='left'>
          <div className="formHeader">
            <img src={cForm} alt="cForm.png" className="imgForForm" />
              <h3 align="right"><i> Sign In <br/><br/>Uni Compass</i></h3>
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
            <button type="submit" className="btn btn-primary">
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
}