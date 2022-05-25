import React from 'react'
import { Grid } from '@mui/material'

import Title from './Title'
import ProjectModal from './ProjectModal'
import projects from '../data/projects'

const Projects = () => {

  return (

    <div className='container full' id="projects">
      <Title prompt="Check out" title="My Projects" />
      <div className='projects__card'>
        <Grid container spacing={2} >
          {projects.map((project, id) => (
            <Grid item key={id} xs={4}>
              <ProjectModal project={project} />
            </Grid>
          ))}
        </Grid>
      </div>

    </div>
  )
}

export default Projects