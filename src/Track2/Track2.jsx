import React from 'react'
import "./Track2.css"
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const Track2 = () => {
  return (
    <>
    
       <div className="track2-section ">
        <span className="track2-img">
        <img src="./src/assets/arrow.png" alt="" />
        <div className="trk2-txt">
        <h1>Our Tracks</h1>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
        <img src="./src/assets/orange.png" alt="" />
        </span>
          
    </div>

    <div className="track2-box">
      <div className="track2-card">
      <div className="track-card-img">
    <img src="./src/assets/teacher.png" alt="" />
              </div>

              <div className="track2-text">
<h3>Matthew E. McNatt</h3>
<p>Professor @George Brown College</p>
<p className='centre'>Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</p>
              </div>
              <div className="track2-end-game">
<p>Engineering physics</p>
<div className="end-icon">
<MdOutlineFacebook />
<FaInstagramSquare />
</div>
              </div>
      </div>
    

    
      <div className="track2-card">
      <div className="track-card-img">
    <img src="./src/assets/white 1.png" alt="" />
              </div>

              <div className="track2-text">
<h3>Tracy D. Wright</h3>
<p>Professor @George Brown College</p>
<p className='centre'>Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</p>
              </div>
              <div className="track2-end-game">
<p>Engineering physics</p>
<div className="end-icon">
<MdOutlineFacebook />
<FaInstagramSquare />
</div>
              </div>
      </div>
    

   
      <div className="track2-card">
      <div className="track-card-img">
    <img src="./src/assets/image 10.png" alt="" />
              </div>

              <div className="track2-text">
<h3>Cynthia A. Nelson</h3>
<p>Professor @George Brown College</p>
<p className='centre'>Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.</p>
              </div>
              <div className="track2-end-game">
<p>Engineering physics</p>
<div className="end-icon">
<MdOutlineFacebook />
<FaInstagramSquare />
</div>
              </div>
      </div>
    </div>
    </>
  )
}

export default Track2
