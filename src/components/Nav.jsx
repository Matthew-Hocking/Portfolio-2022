import React from 'react'
import { IoPersonOutline, IoHammerOutline, IoMailOutline, IoHomeOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from 'react-icons/hi';

const Nav = () => {

  return (
    <div className='nav'>
      <div className='nav__links'>
        <a href="#home"><IoHomeOutline color="#ffffff" size={25}/><span>Home</span></a>
        <a href="#about" ><IoPersonOutline color="ffffff" size={25}/><span>About</span></a>
        <a href="#skills" ><HiOutlineLightBulb color="ffffff" size={25}/><span>Skills</span></a>
        <a href="#projects" ><IoHammerOutline color="ffffff" size={25}/><span>Projects</span></a>
        <a href="#contact" ><IoMailOutline color="ffffff" size={25}/><span>Contact</span></a>
      </div>
    </div>
  )
}

export default Nav