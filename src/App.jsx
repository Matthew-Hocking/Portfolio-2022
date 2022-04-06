import React from 'react'
import './styles/index.scss'

import { Nav, Home, About, Skills, Projects, Contact, Footer } from './components'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <div className='app__content'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App