import React from 'react'
import "./Head.css"

const Head = () => {
  return (
    <>
      
  <div className="page-overall-padding">
    <header>
      <div className="nav-logo">
        <img src="./src/assets/Group 328.png" alt="page_logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"> About us</a>
          </li>
          <li>
            <a href="#"> Courses</a>
          </li>
          <li>
            <a href="#">Our Service</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li id="cl-btn">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </header>
  </div>

  

    </>
  )
}

export default Head
