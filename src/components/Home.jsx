import React from 'react'
import LandingTypewriter from './LandingTypewriter'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

const Home = () => {
  return (
    <div className='home' id="home">
      <div className='home__banner'>
        <div className='home__banner_content'>
          <div className='home__banner_title'>
            <p>Kia ora, I'm</p>
            <h1>Matthew Hocking</h1>
            <h2 id="blurb"><LandingTypewriter /></h2>
          </div>
          <div className='square'>
            <img src="/images/brother.png" alt="matthew profile illustration" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home