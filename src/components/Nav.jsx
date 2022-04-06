import React from 'react'
import { IoPersonOutline, IoHammerOutline, IoMailOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from 'react-icons/hi';

const Nav = () => {

  return (
    <div className='nav'>
      <a href="#home">Home</a>
      <div className='nav__links'>
        <a href="#about" ><IoPersonOutline color="ffffff" size={25}/></a>
        <a href="#skills" ><HiOutlineLightBulb color="ffffff" size={25}/></a>
        <a href="#projects" ><IoHammerOutline color="ffffff" size={25}/></a>
        <a href="#contact" ><IoMailOutline color="ffffff" size={25}/></a>
      </div>
    </div>
  )
}

export default Nav