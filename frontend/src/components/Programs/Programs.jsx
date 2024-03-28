import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Programs = () => {
  return (
    <div className="Programs" id="Programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      {/* programs-categories */}
      <div className="prgoram-categories">
        {programsData.map((program, index) => (
          <motion.div
            key={index} // Assign a unique key prop
            whileHover={{ background: 'var(--planCard)', cursor: 'pointer' }}
            transition={{ type: 'spring' }}
            className="category"
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
