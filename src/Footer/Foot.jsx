import React from 'react'
import"./Footer.css"

const Foot = () => {
  return (
    <>
      {/*FOOTER*/}
  <footer className=" inner_footer ">
    <div className="one-fr">
      <div className="footer-logo ">
        <img src="./src/assets/Group 328.png" alt="" />
      </div>
      <div className="logo-p">
        <p>
          Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum, consectetur. adipisicing elit.
          Similique, consequatur. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div className="two-fr">
      <ul>
        <li className="bold">Company</li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">How to work?</a>
        </li>
        <li>
          <a href="">Populer courses</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
      </ul>
    </div>
    <div className="three-fr">
      <ul>
        <li className="bold">Cources</li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Offline Cources</a>
        </li>
        <li>
          <a href="">Populer courses</a>
        </li>
        <li>
          <a href="">video courses</a>
        </li>
      </ul>
    </div>
    <div className="three-fr">
      <ul>
        <li className="bold">Support</li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Help Line</a>
        </li>
        <li>
          <a href="">Career</a>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>
      </ul>
    </div>
    <div className="four-fr">
      <ul>
        <li className="bold">Contact info</li>
        <li>+0913-705-3875</li>
        <li> ElizabethJ@jourrapide.com</li>
        <li>
          {" "}
          4808 Skinner Hollow Road Days Creek, OR 97429 &amp; western square
        </li>
      </ul>
    </div>
  </footer>
  <div className="copy-end">
    <p>BookStore All Right Reserved, 2022</p>
  </div>

    </>
  )
}

export default Foot
