// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import cForm from '../util/cForm2.png';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
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
            value={this.state.name}
            onChange={this.handleNameChange}>
              <option value="summer">Summer</option>
              <option value="second">Second</option>
              <option selected value="first">First</option>
            </select>
          </div>
          <div className="my-mb-3">
            <label>&#10043;Total courses hours:</label>
            <input type="text" className="myform-control" placeholder="9" />
          </div>
          <div className="my-mb-3">
            <label>&#10043;Courses:</label>
            {this.state.shareholders.map((shareholder, idx) => (
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
          {/* <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p> */}
        </form>
      </div>
    )
  }
}
