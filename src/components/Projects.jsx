import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

import projectsData from '../data/projects'

const projects = () => {
  return (
    <div className='container' id="projects">
      <Title prompt="Check out" title="My Projects" />
      <div className='skills__card'>

      </div>
    </div>
  )
}

export default projects