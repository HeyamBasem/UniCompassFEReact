import React, { Component } from 'react'
import warn from "../util/warn.png"

export default class Notify extends Component {
  render() {
    return (
      <div className="notify">
        <img src={warn} alt="warn.png" className="warnImg" />
        <div className="formHeader">


              <h6 align="left"><i>The more data you fill in the Courses form in the right side, The more accurate result you got.</i></h6>

            </div>
      </div>
    )
  }
}
