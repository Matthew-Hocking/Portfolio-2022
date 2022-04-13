import React, { useState } from 'react'
import { Grid, Card, CardHeader } from '@mui/material';
import Title from './Title'

import projectsData from '../data/projects'

const Projects = () => {

  return (
    <div className='container' id="projects">
      <Title prompt="Check out" title="My Projects" />

      <div className='projects__wrapper'>
        <Grid container spacing={4}>
          {projectsData.map((project, id) => (
            <Grid item xs={4}>
              <Card key={id} variant="none">
                <CardHeader title={project.name} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

    </div>
  )
}

export default Projects