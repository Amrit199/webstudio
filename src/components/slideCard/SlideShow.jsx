import React from 'react'

const SlideShow = ({activeIndex, sliderImage}) => {

    console.log(sliderImage)
  return (
    <div>
      <div>
      {sliderImage.map((d, index) => (
        <div
          key={index}
          className={index === activeIndex ? "containerxyzp" : "inactivedre"}
        >
          <div className="itemamrit">
            <div className="leftamrit">
              <div className="leftContaineramrit">
                <div className="imgContaineramrit">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <div className="descriptionsectionamrit">
                  <p>{d.desc1}</p>
                  <p>{d.desc2}</p>
                  <p>{d.desc3}</p>
                </div>
                <span>Read More</span>
              </div>
            </div>
            <div className="rightamrit">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SlideShow
