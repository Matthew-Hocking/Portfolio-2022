import React from 'react'
import { Grid } from '@mui/material'

import Title from './Title'
import projects from '../data/projects'

const Projects = () => {

  return (

    <div className='container full' id="projects">
      <Title prompt="Check out" title="My Projects" />
      <div className='projects__card'>
        <Grid container spacing={2} >
          {projects.map((project, id) => (
            <Grid item lg={6}>
              <div className='project' key={id}>
                <div className='project__header'>
                  <h2>{project.name}</h2>
                  <div className='project__header_links'>
                    <a href={project.github} target="_blank" >Github</a>
                  </div>
                </div>
                <p>{ project.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Projects