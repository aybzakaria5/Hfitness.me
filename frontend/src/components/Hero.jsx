import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Heart from "../assets/heart.png";
import hero_image from '../assets/hero_image.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>
                {/* The best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span><strong>Hfitness</strong>, your favorite fitness platform</span>
                </div>

                {/* Hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+ 210</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 1978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 80</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn">Start with Us</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Sign In</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>121 bpm</span>
                </div>

                {/* Hero Images */}
                <img src={hero_image} alt="" className="hero-image"/>        
            </div>
        </div>
    );
}

export default Hero;