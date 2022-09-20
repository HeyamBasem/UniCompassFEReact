import React, { Component } from "react";
import tech from '../util/tech.png'
import profile from '../util/profile.png'
import UserProfile from "./userProfile";
import User from "../user/index"
export default class Profile extends Component {
    render() {
        return (
            <div className="home">
            <img src={profile} alt="profile.png" className="profileImg" />          
            <div className='homeCards'>
            <div className='imageContainerAuthPage'>
              <img src={tech} alt="tech.png" className="signupImg" />
            </div>
              <div className='cardsContent' >
              
                <div >
                <User/>
                </div>
                {/* <div className="auth-inner-home">
                &#128171;Contact us.
                </div>
                <div className="auth-inner-home">
                &#128171;Borrow Book.
                </div> */}
              </div>
              <div className='homecard'>
                <UserProfile/>
              </div>
              <div className='aboutcard' >
               
              </div>
            </div>      
            
          </div>
        );
    }
}