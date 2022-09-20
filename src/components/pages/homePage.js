import React, { Component } from 'react'
import Home from './home'
import About from './about'
// import report from '../util/report.png';
import pngwing from '../util/pngwing.com.png'


export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className='homePageText'>
            <h1 align="left"><i>&#128171; UNI COMPASS &#128171;</i></h1>
            {/* <h3> 
              First prediction system for students marks<br/>
              Let's predict your future marks! <br/>
          </h3> */}
        </div>  
        <div className='homeCards'>
        <div className='imageContainerAuthPage'>
          <img src={pngwing} alt="pngwing.com.png" className="signupImg" />
        </div>
          <div className='cardsContent' >
            <div className="auth-inner-home">
            &#128171;How we are?
            </div>
            <div className="auth-inner-home">
            &#128171;Contact us.
            </div>
            <div className="auth-inner-home">
            &#128171;Borrow Book.
            </div>
          </div>
          <div className='homecard'>
            <Home/>
          </div>
          <div className='aboutcard' >
            <About/>
          </div>
        </div>      
        
      </div>
    )
  }
}
