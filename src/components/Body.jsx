import React from 'react'
import './Testimony.css'
import Testimony from './Testimony'

const Body = () => {
  return (
      <>
      <div className="testimonies">
        <Testimony />  
        <Testimony color={{ backgroundColor:"#7C8E0E", color:"#ffffff"}}/>  
        <Testimony />  
      </div>
      </>
  )
}

export default Body
