import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    "Full-Stack Developer",
    "Livingroom Rockstar",
    "Craft Beer Lover",
    "",
    ""
  ]

  return (
    <Typewriter 
      options={{
      wrapperClassName: 'typewriter',
      loop: true,
      autoStart: true, 
      strings: phrases,
      delay: 80,
      deleteSpeed: 20,
      }}
      onInit={typewriter => {
      typewriter
        .pauseFor(80)
        .deleteAll()
        .start()
    }}/>
  )
}

export default LandingTypewriter