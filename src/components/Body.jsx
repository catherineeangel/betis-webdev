import React from 'react'
import './Body.css'
import Testimony from './Testimony'

const Body = () => {
  return (
      <>
      <div className="body">
        <h1 className='body-title'>What Do They Say?</h1>
        <div className="testimonies">
          <Testimony className='testimony' />  
          <Testimony className='testimony' color={{ backgroundColor:"#7C8E0E", color:"#ffffff"}}/>  
          <Testimony className='testimony' />  
        </div>
      </div>
      </>
  )
}

export default Body
