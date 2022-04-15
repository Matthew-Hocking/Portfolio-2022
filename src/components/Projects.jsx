import React from 'react'
import { Grid } from '@mui/material';

import {Hihi, CatFacts} from './project_cards';
import Title from './Title'

const Projects = () => {

  return (

    <div className='container' id="projects">
      <Title prompt="Check out" title="My Projects" />

      <div className='projects__wrapper'>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Hihi />
          </Grid>
          <Grid item xs={4}>
            <CatFacts />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Projects