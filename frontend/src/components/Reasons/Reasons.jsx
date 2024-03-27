import React from 'react'
import './Reasons.css'
import video1 from "../../assets/video1.mp4";
import video3 from "../../assets/video3.mp4";
import image from "../../assets/image.jpg";
import image5 from "../../assets/image5.jpg";
import tick from "../../assets/tick.png";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
          <video width="320" height="240" controls autoplay>
            <source src={video1} type="video/mp4"/>
          </video>

          <img src={image} alt="" />

          <video width="320" height="180" controls autoplay>
            <source src={video3} type="video/mp4"/>
          </video>

          <img src={image5} alt="" />
        </div>

      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 210+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Elevate your training efficiency and speed to new heights</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Unlock Your Potential: Enjoy a Complimentary Program as a New Member!</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Trusted Allies: Your Reliable Partners on the Journey to Success</span>
          </div>
        </div>
        <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
        <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons
