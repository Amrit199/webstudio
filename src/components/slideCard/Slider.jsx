import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SlideShow from './SlideShow';
import { useState } from 'react';
import './slider.scss';
import SlideImages from './SlideImages';

    const data =[
    {
      id: "1",
      icon: "worksassets/webicon.jpg",
      title: "Web Developement",
      desc1: "Website development, Corporate website",
      desc2: "Startup Website, Landings and promo sites",
      desc3: "E-commerce, Web applications development",
      img: "worksassets/webdesign.jpg"
    },
    {
      id: "2",
      icon: "worksassets/designicon.jpg",
      title: "Design Services",
      desc1: "Mobile app design, Web design",
      desc2: "UX & UI design, Logo design",
      desc3: "Brand Identity, Banner ad design",
      img: "worksassets/design.jpg"
    },
    {
      id: "3",
      icon: "worksassets/outsourceicon.png",
      title: "OUTSOURCE",
      desc1: "Dedicated team",
      desc2: "Hire Back-End Developer & Front-End Developer",
      desc3: "Hire Designer & Project Manager",
      img: "worksassets/outsource.jpg"
    },
    ]
const Slider = () => {
      const len = data.length - 1
      const [activeIndex, setActiveIndex] = useState(0)

      const handleLeft = () => {
        setActiveIndex(activeIndex < 1 ? len : activeIndex- 1)
      }

      const handleRight = () => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }

  return (
    <div className='slider-container1' id='services'>
      <h1 className='servicetitle12'>Services</h1>
      <div className="slider123">
        <SlideShow activeIndex={activeIndex} sliderImage={SlideImages} />
      </div>
      <ArrowBackIosIcon className='icon12 left1234' onClick={handleLeft}/>
      <ArrowForwardIosIcon className='icon12 right1234' onClick={handleRight}/>
    </div>
  )
}

export default Slider