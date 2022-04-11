import React, { useState } from 'react'
import Title from './Title'
import { motion, AnimatePresence } from 'framer-motion'

import projectsData from '../data/projects'

const Projects = () => {

  const [selected, setSelected] = useState(false)

  return (
    <div className='container' id="projects">
      <Title prompt="Check out" title="My Projects" />

      <div className='projects__wrapper'>
        {projectsData.map((project, id) => (
          <motion.div className='projects__card' layoutId={id} onClick={() => setSelected(id)}>
            <motion.h1>{project.name}</motion.h1>
            {selected && (
              <motion.div layoutId={selected}>
                <motion.p>{project.description}</motion.p>
                <motion.h1 onClick={() => setSelected(null)} >X</motion.h1>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Projects