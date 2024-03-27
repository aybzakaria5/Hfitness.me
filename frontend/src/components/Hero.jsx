import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Heart from "../assets/heart.png";
import hero_image from '../assets/hero_image.png';
import Calories from '../assets/calories.png';
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
    const transition = { duration: 3, type: "spring" };
    const mobile = window.innerWidth<=768? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                {/* The best ad */}
                <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile? "165px": '238px' }}
                    whileInView={{ left: "8px" }}
                    transition={{ ...transition, type: "tween" }}
                ></motion.div>
                    <span><strong>Hfitness</strong>, your favorite fitness platform</span>
                </div>

                {/* Hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Sculpt </span>
                        <span>Your</span> 
                    </div>
                    <div>
                        <span>Dream Physique</span>
                    </div>
                    <div>
                        <span>
                        At our center, we're focused on empowering you to achieve your ideal physique through a balanced approach that includes nourishing your body with wholesome, nutritious foods
                        </span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={210} start={100} delay={4} preFix="+" />
                        </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={1978} start={1100} delay={4} preFix="+" />
                        </span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={80} delay={2} preFix="+" />
                        </span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn" >Start with Us</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                    <a href='/sign-in' target="_blank" className="btn">Sign In</a>
                

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                {/* <img src={hero_image} alt="" className="hero-image"/> */}
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className="hero-image"
                    src={hero_image}
                    alt=""
                />

                {/* Calories */}
                <motion.div
                    initial={{ right: "32rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;