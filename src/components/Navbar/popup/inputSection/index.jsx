import React from 'react'
import "./style.css"

const SectionInput = () => {
  return (
      <div className='input container' style={{ width: '100%' }} >
          <input style={{ width: '100%' }} placeholder='Keyword Search' />
          
          <select name="cars" id="cars" style={{width:'100%'}} >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
    
    <select name="cars" id="cars" style={{width:'100%'}} >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
    
    <select name="cars" id="cars" style={{width:'100%'}} >
  <option value="volvo"  >Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
          <div className='button' >
          <button>Search</button>
    </div>
    </div>
  
  )
}

export default SectionInput;