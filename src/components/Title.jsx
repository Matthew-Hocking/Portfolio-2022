import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

const Title = (props) => {
  return (
    <div className='title'>
      <div className='title__prompt'>
        <p>{ props.prompt }</p>
      </div>
      <h1>{ props.title }</h1>
    </div>
  )
}

export default Title