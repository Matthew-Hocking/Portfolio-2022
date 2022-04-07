import React from 'react'

import Title from './Title'

const Skills = () => {
  return (
    <div className='container' id="skills">
      <Title prompt="Go through" title="My skills" />
      <div className='skills__card'>
        <div className='skills__item'>
          <img src="images/javascript.svg" alt="javascript" />
          <p>JavaScript</p>
        </div>
        <div className='skills__item'>
          <img src="images/html5.svg" alt="html5" />
          <p>HTML5</p>
        </div>
        <div className='skills__item'>
          <img src="images/css3.svg" alt="css3" />
          <p>CSS3</p>
        </div>
        <div className='skills__item'>
          <img src="images/sass.svg" alt="sass" />
          <p>SASS</p>
        </div>
        <div className='skills__item'>
          <img src="images/node.svg" alt="node" />
          <p>Node</p>
        </div>
        <div className='skills__item'>
          <img src="images/react.svg" alt="react" />
          <p>React</p>
        </div>
        <div className='skills__item'>
          <img src="images/material-ui.svg" alt="material-ui" />
          <p>Material-UI</p>
        </div>
        <div className='skills__item'>
          <img src="images/git.svg" alt="git" />
          <p>Git</p>
        </div>
        <div className='skills__item'>
          <img src="images/sqlite.svg" alt="sqlite" />
          <p>SQLite</p>
        </div>
        <div className='skills__item'>
          <img src="images/mongodb.svg" alt="mongo db" />
          <p>MongoDB</p>
        </div>
        <div className='skills__item'>
          <img src="images/sanity.svg" alt="sanity" />
          <p>Sanity CMS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills