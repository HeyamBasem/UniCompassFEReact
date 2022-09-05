// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'

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
        <div className="auth-inner">
          {/* list of courses ,which smester  */}
          <form onSubmit={this.handleSubmit}>
          <h3>Your Uni Compass</h3>
          <h6>Fill ur semester courses</h6>
         
          <label>Semester Type :</label>
          <div className="mb-3">
            <select 
            value={this.state.name}
            onChange={this.handleNameChange}>
              <option value="summer">Summer</option>
              <option value="second">Second</option>
              <option selected value="first">First</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Total courses hours</label>
            <input type="text" className="form-control" placeholder="9" />
          </div>
          <div className="mb-3">
            <label>Courses</label>
            {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Course #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
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
