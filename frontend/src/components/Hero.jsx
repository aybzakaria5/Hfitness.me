import React from 'react'
import './Hero.css'
import Header from './Header/Header'

const Hero = () => {
    return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* The best ad */}
            <div className="the-best-ad">
                <div className=""></div>
                <span><strong>Hfitness</strong>,your favorite fitness platform</span>
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
                <buttons className="btn">Start with Us</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-">right side</div>
    </div>
    )
}

export default Hero