import React, { Component } from "react";
// import comp.ico from '../../../public'
import cForm from '../util/cForm.png';
export default class UserProfile extends Component {
    render() {
        return (
            <div className="auth-inner">
            <form>
            <div className="formHeader">
            <img src={cForm} alt="cForm.png" className="imgForForm" />;
              <h3 align="right"><i>Your Personal Uni Compass</i></h3>
             
            </div>
            <h6 align="center">Please Fill Your Course info to Improve Uni Compass Analytics Result</h6>
              <div className="mb-3">
                <label>Course name</label>
                <input type="text" className="form-control" placeholder="Course name" />
              </div>
              <div className="mb-3">
                <label>Mark</label>
                <div>
                <select >
                    <option value="a">A</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b">B</option>
                    <option value="b-">B-</option>
                    <option value="c+">C+</option>
                    <option value="c">C</option>
                    <option value="c-">C-</option>
                    <option value="d+">D+</option>
                    <option value="d">D</option>
                    <option value="d-">D-</option>
                    <option value="f">F</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>Repeated ? <br/></label>
                <div>
                <select >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>Hardness rate from 1 as minimum to 10 as maximum value:</label>
                <div>
                <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>How much u spent time in studying it:</label>
                <div>
                <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="mb-3">
                <label>What was the pressure level during your study of this subject?:</label>
                <div>
                <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
              <div><label></label></div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Finish
                </button>
              </div>
            </form>
          </div>
        )
      }
}

  


