// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import result from '../util/result.png';
import Home from './home'

const preview =() =>{(
  <div className="auth-inner-show">
    <div className="homeformHeader">
      <h3><i>Your Uni Compass<br/>
      <h6>Fill your semester courses</h6>
      </i></h3>
      <br/><br/>
      <img src={result} alt="result.png" className="imgForFormHome" />
    </div>
  </div>
)
}
const Show = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div className="auth-inner-show">
    <div className="homeformHeader">
      <h3><i>Your Uni Compass<br/>
      <h6>Fill your semester courses</h6>
      </i></h3>
      <br/><br/>
      <img src={result} alt="result.png" className="imgForFormHome" />
      <input type="submit" value="Show" onClick={onClick} />
       { showResults ? <Results /> :  <preview/>}
    </div>
  </div>
    // <div>
    //   <input type="submit" value="Show" onClick={onClick} />
    //   { showResults ? <Results /> :  <preview/>}
    // </div>
  )
}

const Results = () => (
  <div id="results" className="show-results">
    <Home/>
  </div>
)
export default class HomePreview extends Component {
  render() {
    return (
      <div >
          <Show/>
  
      </div>
    )
  }
}
