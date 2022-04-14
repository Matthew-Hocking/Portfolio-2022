import React from 'react'
import { Grid } from '@mui/material';

import ProjectCard from './ProjectCard';
import Title from './Title'

const Projects = () => {

  return (

    <div className='container' id="projects">
      <Title prompt="Check out" title="My Projects" />

      <div className='projects__wrapper'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProjectCard name="HiHi" blurb="A social media app" description="Hello World" />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard name="Share-Me" blurb="A social media app" description="Hello World"/>
          </Grid>
          <Grid item xs={4}>
            <ProjectCard name="Gericht" blurb="A Restaurants website" description="UI and UX" />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard name="Checkd" blurb="a todo list" description="Hello World" />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Projects