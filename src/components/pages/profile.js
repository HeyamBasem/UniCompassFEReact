import React, { Component } from "react";
import tech from '../util/tech.png'
import profile from '../util/profile.png'
import UserProfileCourses from "./userProfileCourses";
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
              </div>
              <div className='homecard'>
                <UserProfileCourses/>
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