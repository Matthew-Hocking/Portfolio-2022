import React from 'react'
import './styles/index.scss'

import { Nav, About, Skills, Experience, Contact, Footer } from './components'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <div className='app__content'>
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App