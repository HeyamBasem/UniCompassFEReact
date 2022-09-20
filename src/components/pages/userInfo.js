// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import cForm from '../util/cForm2.png';

export default class UserInfo extends Component {
  render() {
    return (
        <div className="auth-inner-userinfo">
          {/* list of courses ,which smester  */}
          <form>
          <div className="homeformHeader">
          <img src={cForm} alt="cForm.png" className="imgForFormHome" />
              <br/><br/>
              <h3><i>&#10043;ABOUT US&#10043;<br/>
              <h6>Your Uni-compass AI prediction model</h6>
              </i></h3>
          </div>
          <p></p>
          <div className="my-mb-3">
          <label> &#10043; &#10043;&#10043;</label>
          <br/>
           <p>Why You Need an 
About Us Page
An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. Which is why we've created this free, easy-to-use tool that lets you instantly generate a custom About Us page for your store.

Once your content is generated, you’ll be able to tweak and customize it until it's just right. Create yours now!</p>

          </div>
        </form>
      </div>
    )
  }
}