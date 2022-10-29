// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import cForm from '../util/cForm2.png';
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      // student: "",
      total_hours: "",
      type: "",
      name:"",
      courses: [ {name:""} ]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };
  handleTypeChange = evt => {
    this.setState({ type: evt.target.value });
  };
  handleTotalChange = evt => {
    this.setState({ total_hours: evt.target.value });
  };

  
  handleShareholderNameChange = idx => evt => {
    const newCourses = this.state.courses.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ courses: newCourses });
  };

  handleSubmit = async (evt) => {
    console.log('firstLIne ');
    evt.preventDefault();
    try{
    console.log(this.state)
    const {type, total_hours, courses } = this.state;
    const course_name = courses.map(object => object.name);
    console.log(course_name);
    const data = {student:'هيام', type:type, total_hours:total_hours, course_name:course_name};
    // const data = ['هيام', 'first',  9, ['مختبر تطبيقات الحاسوب','القياسات والاجهزة']];
// 
    console.log('my data', data)
    const res =  await axios.post("https://squid-app-j7kro.ondigitalocean.app/semester_courses/", data);
    // const res = {'course1':1, 'course2': 2}
    // const alertData = Object.keys(res.data).map(key => ( 
    //   <li>{res.data[key].name}</li> ));
    const myJSON = JSON.stringify(res.data);
    alert(`Your Result for the this semester:${myJSON}`);
    console.log("after",res.data)
  }catch(e){
    console.log(e);
  }
  };

  handleAddShareholder = () => {
    this.setState({
      courses: this.state.courses.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      courses: this.state.courses.filter((s, sidx) => idx !== sidx)
    });
  };
  render() {
    return (
        <div className="auth-inner-homePage">
          {/* list of courses ,which smester  */}
          <form onSubmit={this.handleSubmit}>
          
          <div className="homeformHeader">
          <img src={cForm} alt="cForm.png" className="imgForFormHome" />
              <br/><br/>
              <h3><i>Your Uni Compass<br/>
              <h6>Fill your semester courses</h6>
              </i></h3>
          </div>
          <p></p>
          <div className="my-mb-3">
          <label> &#10043;Semester Type:</label>
          <br/>
            <select 
            className='myform-select'
            value={this.state.type}
            onChange={this.handleTypeChange}>
              <option value="summer">Summer</option>
              <option value="second">Second</option>
              <option  defaultValue="first">First</option>
            </select>
          </div>
          <div className="my-mb-3">
            <label>&#10043;Total courses hours:</label>
            <input value={this.state.total_hours} onChange={this.handleTotalChange} type="text" className="myform-control" placeholder="9" />
          </div>
          <div className="my-mb-3">
            <label>&#10043;Courses:</label>
            {this.state.courses.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              className='myform-control'
              type="text"
              placeholder={`Course #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="homesmall"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="mysmall"
        >
          Add Course
        </button>
          </div>
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Get My Result
            </button>
          </div>
        </form>
      </div>
    )
  }
}
