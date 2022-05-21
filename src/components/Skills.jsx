import React from 'react'
import { Grid } from '@material-ui/core'

import Title from './Title'
import skills from '../data/skills.js'

const Skills = () => {
  return (
    <div className='container full' id="skills">
      <Title prompt="Go through" title="My skills" />
      <div className='skills__card'>
        <Grid container spacing={10}>
          {skills.map((skill, id) => (
            <Grid item key={id}>
              <div className='skills__item'>
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Skills