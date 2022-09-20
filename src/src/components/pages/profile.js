import React, { Component } from "react";
import tech from '../util/tech.png'
import profile from '../util/profile.png'
import UserProfile from "./userProfile";
import User from "../user/index"
import Notify from "./notify";
export default class Profile extends Component {
    render() {
        return (
            <div className="home">
            <img src={profile} alt="profile.png" className="profileImg" />          
            <div className='proCards'>
            <div className='imageContainerAuthPage'>
              <img src={tech} alt="tech.png" className="techImg" />
            </div>
              <div className='cardsContentUser' >
              
                <div className="userCard">
                <User/>
                </div>
                <div className="userCard">
                <Notify/>
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
                <div className='imageContainerProfile'>
                  <img src={tech} alt="tech.png"  className="markImg" />
                </div>
              </div>
            </div>      
            
          </div>
        );
    }
}