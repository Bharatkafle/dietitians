import React from 'react'

import "./style.css"
const Button = ({name, icon}) => {
  return (
    <div  className="buttonsec" >
          <button>{name } {icon }</button>
  </div>
  )
}

export default Button