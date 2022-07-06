import React from 'react'
import { Grid, Card } from '@material-ui/core'

import Title from './Title'
import skills from '../data/skills.js'

const style = {
  boxShadow: "none",
  width: "150px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}

const Skills = () => {
  return (
    <div className='container full' id="skills">
      <Title prompt="Go through" title="My skills" />
      <div className='skills__card'>
        <Grid container spacing={6} style={{ marginTop: "30px"}}>
          {skills.map((skill, id) => (
            <Grid item xs={6} md={4} lg={2} key={id} >
              <Card style={ style } >
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Skills