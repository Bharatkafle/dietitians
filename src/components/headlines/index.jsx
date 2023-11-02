import React from 'react'
import { Link } from 'react-router-dom'
const HeadLines = ({ Heading,paragraph, tolink }) => {
  return (
    <div  >
      <div className='mental-health_section-advice--top '>
          <div className='mental-health_section-advice'>
            <div className='heading'>
            <h3>{Heading }</h3>
            </div>
            <div className='paragraph'>
            <p>{paragraph}</p>
            </div>
          </div>
          <div className='mental-health_section-search'>
          <Link to="#">{ tolink}</Link>
          </div>
        </div>
    </div>
  )
}

export default HeadLines