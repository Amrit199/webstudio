import React from 'react'
import { Button } from '../button/Button'
import './home.scss'

export default function Home() {
  return (
    <div className='home' id='home'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/homepic.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>WEB DEVELOPMENT AGENCY</h1>
          <p>WEB Studio is a web development agency. 
            Our experienced web designers, UX/UI specialists, web developers, SEOs, 
            digital marketers and managers specialize in business websites creation. 
            We will deliver you marketing and technology solutions to achieve your company's 
            goals in the best way.</p>
        </div>
        <Button>HIRE US</Button>
      </div>
    </div>
  )
}
