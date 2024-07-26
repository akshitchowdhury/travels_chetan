import React from 'react'
import aboutBg from "../../assets/aboutBg.jpg"
import HomeAbout from '../Home/HomeAbout'
import WhyUs from './WhyUs/WhyUs'
const About = () => {
  return (
    <>
    <img src={aboutBg} className='h-[50vh] object-cover object-center w-full'/>
      <HomeAbout/>
      <WhyUs/>    
    </>
  )
}

export default About
