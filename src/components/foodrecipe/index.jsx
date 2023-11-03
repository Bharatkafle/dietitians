import React from 'react'
import "./style.css"
import Food from "../../Assets/banner.jpg"
import Button from '../button/Button'


const FoodRecipe = () => {
  return (
      <div className='foodrecipe' >
          <div className='container-fluid' >
              <div className='row' >
                  
                  <div className='col-md-6 col-sm-12 d-flex '  >
                     <img src={Food} className="foodrecipe-image img-fluid"   alt='Food img' />
                  </div>
                  <div className=' bha col-md-6 col-sm-12 d-flex flex-column justify-content-center align-item-center' >
                          <div className='foodrecipe_heading' >
                              <h3 className='header'>Creamy pea pasta</h3>
                              <p className='paragraph'>In 2010, a collective of dedicated dietitians, nutritionists, and professionals in allied healthcare professions came together with the intention of establishing a scientific organization aimed at emphasizing the significance of dietetics and nutrition in promoting health and addressing diseases. As a result, the Nepal Dietitian Association was established.</p>

                          </div>
                          <Button name="view recipe" />
                      </div>
                 
              </div>
           </div>
   </div>
  )
}

export default FoodRecipe