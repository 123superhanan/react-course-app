import React from 'react'
import "./Track.css"
import { FaStar,  FaStarHalfAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { MdDownload } from "react-icons/md";


const Track = () => {
  return (
    <>
    
    <div className="track-section ">
        <span className="track-img">
        <img src="./src/assets/orange.png" alt="" />
        <div className="trk-txt">
        <h1>Our Tracks</h1>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
        <img src="./src/assets/Group.png" alt="" />
        </span>
          
    </div>


        <div className="track-box">
            <div className="track-cards">
              <div className="track-card-img">
    <img src="./src/assets/little-girl-participating-online-classes 1.png" alt="" />
              </div>
              <div className="track-card-icon">
                <p>UI/UX Design</p>
                <div className="icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt/>
                </div>
              </div>
              <div className="track-ui-box">
      <p>UI/UX Design for Beginners</p>
      <span className='cost'>$98</span>
              </div>
              <div className="track-end-game">
             <div> <CiClock1 /> <span>22hr 30min</span></div>
            <div> <CiVideoOn /> <span>34 Courses</span></div>
             <div> <MdDownload /> <span>250 Sales</span></div>
              </div>
              <div className="btn">
              <button>Join Course</button>
            </div>
            </div>
           

           
      

        
       
            <div className="track-cards">
              <div className="track-card-img">
    <img src="./src/assets/image 6.png" alt="" />
              </div>
              <div className="track-card-icon">
                <p>UI/UX Design</p>
                <div className="icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt/>
                </div>
              </div>
              <div className="track-ui-box">
      <p>UI/UX Design for Beginners</p>
      <span className='cost'>$98</span>
              </div>
              <div className="track-end-game">
             <div> <CiClock1 /> <span>22hr 30min</span></div>
            <div> <CiVideoOn /> <span>34 Courses</span></div>
             <div> <MdDownload /> <span>250 Sales</span></div>
              </div>
              <div className="btn">
              <button>Join Course</button>
            </div>
            </div>
           

           
      

      
            <div className="track-cards">
              <div className="track-card-img">
    <img src="./src/assets/image 7.png" alt="" />
              </div>
              <div className="track-card-icon">
                <p>UI/UX Design</p>
                <div className="icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt/>
                </div>
              </div>
              <div className="track-ui-box">
      <p>UI/UX Design for Beginners</p>
      <span className='cost'>$98</span>
              </div>
              <div className="track-end-game">
             <div> <CiClock1 /> <span>22hr 30min</span></div>
            <div> <CiVideoOn /> <span>34 Courses</span></div>
             <div> <MdDownload /> <span>250 Sales</span></div>
              </div>
              <div className="btn">
              <button>Join Course</button>
            </div>
            </div>
           

           
        </div>



    </>
  )
}

export default Track
