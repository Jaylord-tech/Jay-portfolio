import React from 'react'
import './Title.css'
import FadeSlide from "../Fade-slide/fade-slide";


const Title = ({title, subTitle}) => {
  return (
    <div className='title container'>

      <FadeSlide direction='fade-up'><h2>{title}</h2></FadeSlide>
      <FadeSlide direction='fade-up' delay={200}><h1>{subTitle}</h1></FadeSlide>
    </div>
  )
}

export default Title
