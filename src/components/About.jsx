import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard =({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn("right", "spring"), 0.5 * index, 0.75}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div 
            options={{
              max:45,
              scale: 1,
              speed: 450
            }}
            className='bg-[#1d1d1d] rounded-[20px] py- px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt={title} className='w-16 h-16' />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center mt-20`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
    </motion.div>
    <motion.p
      varient={fadeIn("","",0.1, 1)}
      className='mt-4 text-center text-secondary text-[17px] leading-[30px]'
    >A 3D Renderer project focuses on creating a program or application that can convert 3D models into 2D images using techniques like shading, lighting, and perspective projection. This is a fundamental part of computer graphics, used in fields like game development, animation, simulations, and more.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index} {...service}
        />
      ))}
    </div>
    </>
  )
}

export default About;