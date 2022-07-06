import React from 'react'
import { Grid } from '@mui/material'

import Title from './Title'
import projects from '../data/projects'

const Projects = () => {

  return (

    <div className='container full' id="projects">
      <Title prompt="Check out" title="My Projects" />
      <div >
        <Grid container spacing={2} >
          {projects.map((project, id) => (
            <Grid item lg={6} >
              <div className='project hover' key={id}>
                <div className='project__header'>
                  <h2>{project.name}</h2>
                  <div className='project__header_links'>
                    <a href={project.github} target="_blank" className="button">Github</a>
                    {project.deployLink ? <a href={project.deployLink} target="_blank" className="button">Live</a> : null}
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