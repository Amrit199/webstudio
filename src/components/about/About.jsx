import React from 'react'
import './about.scss'

export default function About() {

  const data = [
    {
      id: "1",
      img: "aboutassets/clutch.png",
      cName: "icons"
    },
    {
      id: "2",
      img: "aboutassets/google.jpg",
      cName: "icons"
    },
    {
      id: "3",
      img: "aboutassets/topdevelopers.png",
      cName: "icons"
    },
    {
      id: "4",
      img: "aboutassets/trustpilot.png",
      cName: "icons"
    },
    {
      id: "5",
      img: "aboutassets/wordpress.png",
      cName: "icons"
    },
  ]
  return (
    <div className='about' id='about'>
      <div className="wrapper12">
        <div className="top">
          <h1>ABOUT WEB STUDIO</h1>
          <p className='aboutdesc'>WEB Studio was founded in 2013 to help companies to achieve their business goals 
            on the Web in the best way. Our web designers, UI/UX specialists, 
            web developers and digital marketers work together to create beautiful, 
            well-organized, and unique solutions.
          </p>
          <p className='aboutdesc'>To bring your business to a new level our masters are not limited to standard methods. 
            This approach in web design and development helps us find solutions, 
            especially for your business. 
            In nutshell, we create something you'll be proud of!
          </p>
        </div>
        <div className="bottom">
          <h3>WHAT OUR CLIENTS SAY</h3>
          <div className="reviewsection">
            {data.map((d) => (
              <img src={d.img} className={d.cName}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
