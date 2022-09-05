import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/auth/login'
import SignUp from './components/auth/signup'
// import AddCourse from  './components/pages/addCourse' 
// import CoursesList from './components/pages/courses-list'
// import Course from './components/pages/course'
// import UserProfile from './components/pages/userProfile'
import User from './components/user/index.js'
import Home from './components/pages/home.js'
import UserProfile from './components/pages/userProfile.js'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
            Uni Compass
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                     Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/userProfile'}>
                     Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/userForm'}>
                     Courses 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userProfile" element={<User />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/userForm" element={<UserProfile />} />
            </Routes>
          </div>
          {/* <div className='user-profile'>
            <Routes>
            <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
          </div> */}
        </div>
      </div>
    </Router>
  )
}
export default App