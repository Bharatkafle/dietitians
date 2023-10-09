import React from 'react';
import './style.css';

import Img from "../../Assets/food.jpg"
import HeadLines from '../headlines';

const MentalHealth = () => {
  return (
    <div className='mental-health_section'>
      <div className='container'>
         <HeadLines Heading="Mental health including anxiety and depression"  paragraph="Our health advice gives you guidance on many diet and nutrition issues. Read our articles to learn how diet and nutrition can improve your health and wellbeing" tolink="Search health advice"/>
        <div className='row healthrow mt-4 d-flex align-items-center  '>
          <div className='col-md-6 col-sm-12 d-flex align-items-center '>
            <div className='health-sec'>
              <div className='mental-health_section-searchheader'>
                <h2>Mental health including anxiety and depression</h2>
                <p className='paragraph'>Our health advice gives you guidance on many diet and nutrition issues. Our health advice gives you guidance on many diet and nutrition issues.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex align-items-center mt-2'>
            <div className='mental-health_section-searchheader--img'>
              <img src={Img} className='img-fluid' alt='Food'  />
            </div>
                  </div>
                  <div className='col-md-6 col-sm-12 d-flex align-items-center'>
            <div className='health-sec'>
              <div className='mental-health_section-searchheader'>
                <h2>Mental health including anxiety and depression</h2>
                <p className='paragraph'>Our health advice gives you guidance on many diet and nutrition issues. Our health advice gives you guidance on many diet and nutrition issues.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-flex align-items-center mt-2'>
            <div className='mental-health_section-searchheader--img'>
              <img src={Img} className='img-fluid' alt='Food' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;
